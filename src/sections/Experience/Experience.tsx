import styles from './Experience.module.scss'
import Section from "@/layouts/Section/Section.tsx";
import * as freelanceImage from '@/assets/images/experience/freelance.jpg'
import ExperienceItem
  from "@/sections/Experience/components/ExperienceItem/ExperienceItem.tsx";

export default () => {
  const experience = [
    {
      title: 'TutorPlace',
      logo: 'tutor-place',
      position: 'HTML-верстальщик',
      duties: [
        'Development of the frontend part of landing pages and e-commerce projects.',
        'Development of the frontend part of landing pages and e-commerce projects.',
        'Development of the frontend part of landing pages and e-commerce projects.',
        'Development of the frontend part of landing pages and e-commerce projects.',
      ],
      date: {
        isoDate: '2025-01',
        display: 'Январь 2025',
      },
    },
    {
      title: 'Freelance',
      image: freelanceImage,
      position: 'Web Developer',
      duties: [
        'Development of the frontend part of landing pages and e-commerce projects.',
        'Development of the frontend part of landing pages and e-commerce projects.',
        'Development of the frontend part of landing pages and e-commerce projects.',
        'Development of the frontend part of landing pages and e-commerce projects.',
      ],
      date: {
        isoDate: '2024-03',
        display: 'Март 2024',
      },
    },
  ]

  return (
    <Section
      id='experience'
      title={
        <>
          <span>Опыт</span> работы
        </>
      }
      subtitle={
        <>
          Данные взяты с <a href="#">hh.ru</a>
        </>
      }
    >
      <ul className={styles.list}>
        {experience.map((item, index) => {
          const endDate = index === 0
            ? 'сейчас'
            : experience[index - 1].date.display
          return (
            <ExperienceItem
              key={index}
              { ...item }
              endDate={endDate}
            />
          )
        })}
      </ul>
    </Section>
  )
}