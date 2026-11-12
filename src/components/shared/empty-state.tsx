'use client';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

/**
 * EmptyState – a consistent empty-state placeholder.
 */
export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted-foreground max-w-xs">{description}</p>}
    </div>
  );
}
