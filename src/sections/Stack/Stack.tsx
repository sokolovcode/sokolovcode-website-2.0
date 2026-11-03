import styles from './Stack.module.scss'
import Section from "@/layouts/Section/Section.tsx";
import StackList from "@/sections/Stack/components/StackList/StackList.tsx";

export default () => {
  const stackItems = [
    'HTML', 'PUG', 'JSX', 'CSS', 'SASS', 'SCSS', 'BEM', 'PostCSS',
    'Accessibility', 'Bootstrap', 'JavaScript', 'OOP', 'jQuery', 'Vue',
    'Vuex', 'React', 'TypeScript', 'Minista', 'Figma', 'FSD', 'Webpack', 'Vite', 'Gulp',
    'Git', 'GitHub', 'GitLab',
  ]

  return (
    <Section
      id='stack'
      title={<><span>Стек</span> технологий</>}
      description='Навыки, которые я применяю для создания современных продуктов.'
      hasContainer={false}
    >
      <div className={styles.stack}>
        <div className={styles.wrapper}>
          <StackList items={stackItems} />
          <StackList items={stackItems} />
          <StackList items={stackItems} />
          <StackList items={stackItems} />
        </div>
        <div className={styles.wrapper}>
          <StackList items={stackItems} />
          <StackList items={stackItems} />
          <StackList items={stackItems} />
          <StackList items={stackItems} />
        </div>
      </div>
    </Section>
  )
}