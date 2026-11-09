import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import clsx from "clsx";

type Props = {
  id: string
  title: ReactNode
  subtitle?: ReactNode
  hasContainer?: boolean
  children: ReactNode
}

export default ({
  id,
  title,
  subtitle,
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
        {subtitle && (
          <div className={styles.subtitle}>
            <p>{subtitle}</p>
          </div>
        )}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}