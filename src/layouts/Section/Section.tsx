import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import clsx from "clsx";

type Props = {
  id: string
  title: string
  titleId: string
  description?: string
  hasContainer: boolean
  children: ReactNode
}

export default ({
  id,
  title,
  titleId,
  description,
  hasContainer = true,
  children,
}: Props) => {
  return (
    <section
      className={clsx(styles.section, {
        container: hasContainer,
      })}
      id={id}
      aria-labelledby={titleId}
    >
      <header className={styles.header}>
        <h2
          className={styles.title}
          id={titleId}
        >
          {title}
        </h2>
        {description && (
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        )}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}