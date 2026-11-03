import styles from './About.module.scss'
import clsx from "clsx";
import { AUTHOR_NAME, AUTHOR_SURNAME } from "@/constants/author.ts";
import Accordion from "@/components/Accordion/Accordion.tsx";

export default () => {
  const sectionId = 'about'
  const titleId = `${sectionId}-title`

  const aboutItems = [
    {
      title: 'Обо мне',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at culpa, deleniti deserunt dolore doloremque doloribus enim error, et, excepturi ipsa magnam minima possimus sed tempore totam voluptate voluptatem?Accusamus ad dolore dolorem doloremque expedita labore laboriosam libero, magnam mollitia nesciunt officiis omnis, placeat porro quaerat quidem rem repudiandae sit tempora vitae voluptas. Adipisci culpa debitis harum sequi soluta!Ab autem blanditiis quisquam ratione ullam! Corporis expedita nemo porro voluptatum! A accusamus adipisci animi corporis cum doloremque ducimus.',
    },
    {
      title: 'Софт-скиллы',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at culpa, deleniti deserunt dolore doloremque doloribus enim error, et, excepturi ipsa magnam minima possimus sed tempore totam voluptate voluptatem?Accusamus ad dolore dolorem doloremque expedita labore laboriosam libero, magnam mollitia nesciunt officiis omnis, placeat porro quaerat quidem rem repudiandae sit tempora vitae voluptas. Adipisci culpa debitis harum sequi soluta!Ab autem blanditiis quisquam ratione ullam! Corporis expedita nemo porro voluptatum! A accusamus adipisci animi corporis cum doloremque ducimus.',
    },
    {
      title: 'Хард-скиллы',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at culpa, deleniti deserunt dolore doloremque doloribus enim error, et, excepturi ipsa magnam minima possimus sed tempore totam voluptate voluptatem?Accusamus ad dolore dolorem doloremque expedita labore laboriosam libero, magnam mollitia nesciunt officiis omnis, placeat porro quaerat quidem rem repudiandae sit tempora vitae voluptas. Adipisci culpa debitis harum sequi soluta!Ab autem blanditiis quisquam ratione ullam! Corporis expedita nemo porro voluptatum! A accusamus adipisci animi corporis cum doloremque ducimus.',
    },
    {
      title: 'Дополнительно',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at culpa, deleniti deserunt dolore doloremque doloribus enim error, et, excepturi ipsa magnam minima possimus sed tempore totam voluptate voluptatem?Accusamus ad dolore dolorem doloremque expedita labore laboriosam libero, magnam mollitia nesciunt officiis omnis, placeat porro quaerat quidem rem repudiandae sit tempora vitae voluptas. Adipisci culpa debitis harum sequi soluta!Ab autem blanditiis quisquam ratione ullam! Corporis expedita nemo porro voluptatum! A accusamus adipisci animi corporis cum doloremque ducimus.',
    },
  ]

  return (
    <section
      className={clsx(styles.about, "container")}
      id={sectionId}
      aria-labelledby={titleId}
    >
      <h2
        className="visually-hidden"
        id={titleId}
      >
        Информация обо мне
      </h2>
      <div className={styles.snapshot}>
        <picture className={styles.image}></picture>
        <div className={styles.caption}>
          <span>{AUTHOR_NAME}</span>
          <span>{AUTHOR_SURNAME}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {aboutItems.map(({ title, description }, index) => (
          <li className={styles.item} key={title}>
            <Accordion
              title={title}
              id={`information-${index}`}
              name="info"
              isOpen={index === 0}
            >
              <p>{description}</p>
            </Accordion>
          </li>
        ))}
      </ul>
    </section>
  )
}