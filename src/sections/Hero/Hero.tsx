import styles from "./Hero.module.scss";
import clsx from "clsx";
import Button from "@/components/Button/Button.tsx";
import { Image } from "@srcset/react";
import { src, srcSet, placeholder } from "@/assets/images/hero/hero.jpg";

export default () => {
  const sectionId = 'hero'
  const titleId = `${sectionId}-title`

  return (
    <section
      className={clsx(styles.hero, "container")}
      id={sectionId}
      aria-labelledby={titleId}
    >
      <div className={styles.info}>
        <header className={styles.header}>
          <h1 className={styles.title} id={titleId}>
            Я - Frontend-разработчик.
          </h1>
          <h2 className={styles.subtitle}>
            Привет, меня зовут
            Александр Соколов.
          </h2>
        </header>
        <Button label='Сверить опыт' />
      </div>
      <Image
        className={styles.image}
        src={src}
        srcSet={srcSet}
        placeholder={placeholder}
        alt=""
      />
    </section>
  )
}