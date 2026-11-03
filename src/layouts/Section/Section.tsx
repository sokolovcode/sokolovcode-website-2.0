import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import clsx from "clsx";

type Props = {
  id: string
  title: ReactNode
  description?: string
  hasContainer?: boolean
  children: ReactNode
}

export default ({
  id,
  title,
  description,
  hasContainer = true,
  children,
}: Props) => {
  const titleId = `${id}-title`;

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
          className={clsx(styles.title, 'h3')}
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