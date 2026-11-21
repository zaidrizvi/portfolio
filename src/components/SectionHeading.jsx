export function SectionHeading({ index, eyebrow, title, align = 'left', tone = 'dark' }) {
  return (
    <div className={`mb-12 md:mb-20 ${align === 'right' ? 'md:text-right' : ''}`}>
      <p className={`mb-4 font-mono text-sm uppercase tracking-[0.24em] ${tone === 'light' ? 'text-ember-dark' : 'text-acid'}`}>
        {index} / {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  )
}
