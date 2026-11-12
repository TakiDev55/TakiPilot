'use client';

interface PageHeaderProps {
  title: string;
  description?: string;
}

/**
 * PageHeader – consistent page title block.
 */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-balance">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground max-w-3xl">{description}</p>}
    </div>
  );
}
