import { Image } from '@srcset/react'
import type { ImageModule } from "@/types/image"
import styles from '../../Experience.module.scss'
import Icon from "@/components/Icon/Icon.tsx";

type ExperienceDate = {
  isoDate: string
  display: string
}

type Props = {
  title: string
  logo?: string
  image?: ImageModule
  position: string
  duties: Array<string>
  date: ExperienceDate
  endDate: string
}

export default ({
  title,
  logo,
  image,
  position,
  duties,
  date,
  endDate,
}: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.visual}>
        {image && (
          <Image
            className={styles.image}
            src={image.src}
            srcSet={image.srcSet}
            placeholder={image.placeholder}
            alt={title}
          />
        )}

        <time
          className={styles.time}
          dateTime={date.isoDate}
        >
          {date.display} - {endDate}
        </time>

        <div className={styles.title}>
          {logo ? (
            <Icon name={logo} size={167} title={title} />
          ) : (
            <span>{title}</span>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.badge}>Должность</p>
          <h3 className='h5'>{position}</h3>
        </div>

        <div className={styles.inner}>
          <p className={styles.badge}>Обязанности</p>
          <ul className={styles.duties}>
            {duties.map(duty => (
              <li key={duty} className={styles.duty}>
                <p>{duty}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}