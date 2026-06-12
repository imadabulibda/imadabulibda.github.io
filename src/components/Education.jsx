import { useLanguage } from '../i18n/LanguageContext.jsx'

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section__title section__title--soft">{t.education.title}</h2>
        <div className="card-list">
          {t.education.items.map((item) => (
            <article key={`${item.school}-${item.period}`} className="card">
              <div className="card__top">
                <div>
                  <p className="card__company">{item.school}</p>
                  <h3 className="card__role">{item.degree}</h3>
                </div>
                <span className="card__period">{item.period}</span>
              </div>
              <p className="card__text">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
