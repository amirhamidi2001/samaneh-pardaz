type SectionHeadingProps = {
  title: string
  description?: string
  align?: 'start' | 'center'
  /** سطح heading؛ در هر صفحه فقط یک h1 */
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  /** برای استفاده روی پس‌زمینه تیره */
  inverted?: boolean
  className?: string
}

const sizes = {
  h1: 'text-4xl leading-[1.35] sm:text-5xl lg:text-[3.5rem]',
  h2: 'text-3xl leading-[1.4] md:text-4xl',
  h3: 'text-2xl leading-[1.4]',
}

export function SectionHeading({
  title,
  description,
  align = 'start',
  as: Tag = 'h2',
  id,
  inverted = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-start'
  const titleColor = inverted ? 'text-white' : 'text-brand'
  const descColor = inverted ? 'text-mist-300' : 'text-muted'

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <Tag id={id} className={`${sizes[Tag]} ${titleColor} text-balance font-extrabold`}>
        {title}
      </Tag>
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-8 md:text-lg md:leading-9 ${descColor} ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
