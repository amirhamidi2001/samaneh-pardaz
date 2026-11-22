import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'link'

type CommonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type InternalLinkProps = CommonProps & { to: string; href?: never }
/** لینک بیرونی (external=true) یا tel:/mailto: (external=false) */
type AnchorProps = CommonProps & { href: string; external?: boolean; to?: never }
type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: never
    href?: never
  }

export type ButtonProps = InternalLinkProps | AnchorProps | NativeButtonProps

const base =
  'inline-flex items-center justify-center gap-2 font-bold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'min-h-11 rounded-control bg-accent px-5 py-2 text-white hover:bg-accent-strong',
  secondary:
    'min-h-11 rounded-control border border-border bg-surface px-5 py-2 text-brand hover:bg-surface-alt',
  link: 'text-accent underline-offset-4 hover:text-accent-strong hover:underline',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if (props.href !== undefined) {
    const external = props.external === true
    return (
      <a
        href={props.href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  const {
    variant: _v,
    className: _c,
    children: _ch,
    to: _t,
    href: _h,
    type = 'button',
    ...rest
  } = props
  void [_v, _c, _ch, _t, _h]
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
