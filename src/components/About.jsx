import { useLanguage } from '../i18n/LanguageContext.jsx'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section section--about">
      <div className="container">
        <h2 className="section__title section__title--soft">{t.about.title}</h2>
        <div className="about-card">
          <div className="about-card__inner">
            <p className="about-card__text">{t.about.text}</p>
            <figure className="about-card__photo">
              <img
                src={`${import.meta.env.BASE_URL}images/imad-abulibda-brand.png`}
                alt={t.about.photoAlt}
                width={853}
                height={1280}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p className="about-card__hobbies-text">{t.about.hobbies}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
