import { skillCategories } from '../data/skills.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SkillIcon } from './SkillIcon.jsx'

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title section__title--soft">{t.skills.title}</h2>

        <div className="skills-groups">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="skills-group__title">{t.skills.categories[category.id]}</h3>
              <ul className="skills-chips">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.id} name={skill.name} icon={skill.icon} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
