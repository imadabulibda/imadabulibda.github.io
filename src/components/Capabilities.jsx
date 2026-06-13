import { useLanguage } from '../i18n/LanguageContext.jsx'

export function Capabilities() {
  const { t } = useLanguage()

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <h2 className="section__title section__title--soft">{t.capabilities.title}</h2>
        <div className="capabilities-grid">
          {t.capabilities.items.map((item) => (
            <article key={item.title} className="capability-card">
              <h3 className="capability-card__title">{item.title}</h3>
              <p className="capability-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
