import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'inverse' | 'ghost' | 'link'

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
  'group inline-flex items-center justify-center gap-2 font-bold transition-[background-color,border-color,color,box-shadow,translate] duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const solid = 'min-h-12 rounded-control px-6 py-2.5 text-[0.95rem] active:translate-y-px'

const variants: Record<Variant, string> = {
  // روی پس‌زمینه روشن
  primary: `${solid} bg-accent text-white shadow-[0_10px_24px_-10px_rgb(31_79_216/0.7)] hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_14px_28px_-10px_rgb(31_79_216/0.8)]`,
  secondary: `${solid} border border-border bg-white text-brand hover:border-accent/40 hover:bg-mist-50`,
  // روی پس‌زمینه تیره
  inverse: `${solid} bg-white text-navy-900 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.5)] hover:-translate-y-0.5 hover:bg-mist-100`,
  ghost: `${solid} border border-white/25 text-white hover:border-white/50 hover:bg-white/10`,
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
