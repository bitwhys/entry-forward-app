import { cn } from './lib'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({
  children,
  className,
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn('bg-glow-conic dark:bg-dim-conic text-lg', className)}
      type="button"
      {...other}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
