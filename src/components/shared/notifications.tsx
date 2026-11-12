'use client';

import { createContext, useCallback, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type NotificationVariant = 'default' | 'success' | 'error' | 'info';

interface NotificationItem {
  id: string;
  title: string;
  description?: string;
  variant?: NotificationVariant;
  duration: number;
}

interface NotificationContextValue {
  notifications: NotificationItem[];
  addNotification: (notification: Omit<NotificationItem, 'id'>) => string;
  removeNotification: (id: string) => void;
  dismissAll: () => void;
}

const NotificationContext = createContext<NotificationContextValue | null>(null);

const variantConfig: Record<NotificationVariant, { icon: React.ReactNode; color: string }> = {
  default: { icon: <Info size={16} />, color: 'text-primary' },
  success: { icon: <CheckCircle size={16} />, color: 'text-green-400' },
  error: { icon: <AlertCircle size={16} />, color: 'text-red-400' },
  info: { icon: <Info size={16} />, color: 'text-blue-400' },
};

const defaultDuration = 5000;

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = useCallback((notification: Omit<NotificationItem, 'id'>) => {
    const id = Math.random().toString(36).slice(2, 9);
    const item: NotificationItem = {
      ...notification,
      id,
      duration: notification.duration ?? defaultDuration,
    };

    setNotifications((prev) => [...prev, item]);

    if (item.duration > 0) {
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, item.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const ctx: NotificationContextValue = {
    notifications,
    addNotification,
    removeNotification,
    dismissAll,
  };

  return (
    <NotificationContext.Provider value={ctx}>
      {children}
      <div className="pointer-events-none fixed top-5 right-5 z-50 flex flex-col gap-2">
        {notifications.map((n) => (
          <Notification key={n.id} notification={n} onDismiss={() => removeNotification(n.id)} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

function Notification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: () => void;
}) {
  const { icon, color } = variantConfig[notification.variant ?? 'default'];

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-lg animate-in fade-in slide-in-from-right-2 duration-300',
        notification.variant === 'error'
          ? 'border-destructive/50 bg-destructive/10'
          : notification.variant === 'success'
            ? 'border-green-500/30 bg-green-500/10'
            : notification.variant === 'info'
              ? 'border-blue-500/30 bg-blue-500/10'
              : ''
      )}
    >
      <div className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</div>
      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-semibold">{notification.title}</h4>
        {notification.description && (
          <p className="text-xs text-muted-foreground">{notification.description}</p>
        )}
      </div>
      <button
        onClick={onDismiss}
        className={cn(
          'shrink-0 rounded p-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors',
          color
        )}
        aria-label="Dismiss notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}
