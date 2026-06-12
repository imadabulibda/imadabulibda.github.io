import { useLanguage } from '../i18n/LanguageContext.jsx'
import { FooterEmail } from './FooterEmail.jsx'
import { SocialLink } from './SocialLink.jsx'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__intro">
            <h2 className="section__title">{t.contact.title}</h2>
            <p className="footer__subtitle">{t.contact.subtitle}</p>
          </div>

          <div className="footer__reach">
            <FooterEmail />

            <ul className="footer__social">
              {t.contact.links.map((link) => (
                <SocialLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  icon={link.icon}
                />
              ))}
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
