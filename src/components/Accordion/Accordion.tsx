import styles from './Accordion.module.scss'
import clsx from "clsx";
import Icon from "@/components/Icon/Icon.tsx";
import type { ReactNode } from "react";

type Props = {
  title: string
  titleLevelClassName?: string
  id: string
  name: string
  isOpen: boolean
  onOpen: () => void
  children: ReactNode
}

export default ({
  title,
  titleLevelClassName = 'h4',
  id,
  name,
  isOpen,
  onOpen,
  children,
} : Props) => {
  return (
    <div className={styles.accordion}>
      <details
        className={styles.details}
        name={name}
        open={isOpen}
      >
        <summary
          className={styles.summary}
          onClick={(event) => {
            event.preventDefault()
            onOpen()
          }}
        >
          <h3 className={clsx(styles.title, titleLevelClassName)}>
            <span role="term" aria-details={id}>{title}</span>
            <div className={styles.arrow}>
              <Icon name="arrow-down" />
            </div>
          </h3>
        </summary>
      </details>

      <div
        className={styles.content}
        id={id}
        role="definition"
      >
        <div className={styles.inner}>
          <div className={styles.body}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}