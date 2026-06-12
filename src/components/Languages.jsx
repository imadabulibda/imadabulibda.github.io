import { useLanguage } from '../i18n/LanguageContext.jsx'

export function Languages() {
  const { t } = useLanguage()

  return (
    <section id="languages" className="section">
      <div className="container">
        <h2 className="section__title section__title--soft">{t.languages.title}</h2>
        <ul className="language-list">
          {t.languages.items.map((item) => (
            <li key={item.name} className="language-item">
              <span className="language-item__name">{item.name}</span>
              <span className="language-item__level">{item.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
