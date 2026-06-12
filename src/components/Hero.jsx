import { useLanguage } from '../i18n/LanguageContext.jsx'
import { DownloadButton } from './DownloadButton.jsx'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">{t.hero.label}</p>
        <h1 className="hero__title">
          {t.hero.title.map((part, index) =>
            part.br ? (
              <br key={index} />
            ) : (
              <span key={index} className={part.m ? 'text-muted' : undefined}>
                {part.t}
              </span>
            ),
          )}
        </h1>
        <DownloadButton className="btn btn--dark btn--download" />
      </div>
    </section>
  )
}
