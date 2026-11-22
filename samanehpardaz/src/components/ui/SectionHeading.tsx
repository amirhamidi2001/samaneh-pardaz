type SectionHeadingProps = {
  title: string
  description?: string
  align?: 'start' | 'center'
  /** سطح heading؛ در هر صفحه فقط یک h1 */
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  /** برای استفاده روی پس‌زمینه تیره */
  inverted?: boolean
}

export function SectionHeading({
  title,
  description,
  align = 'start',
  as: Tag = 'h2',
  id,
  inverted = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-start'
  const titleSize = Tag === 'h1' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'
  const titleColor = inverted ? 'text-white' : 'text-brand'
  const descColor = inverted ? 'text-slate-300' : 'text-muted'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Tag id={id} className={`${titleSize} ${titleColor} font-bold leading-tight`}>
        {title}
      </Tag>
      {description ? (
        <p className={`mt-4 text-base md:text-lg ${descColor}`}>{description}</p>
      ) : null}
    </div>
  )
}
