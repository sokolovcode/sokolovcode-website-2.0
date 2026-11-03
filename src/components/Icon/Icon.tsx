import clsx from 'clsx'
import styles from './Icon.module.scss'

type Props = {
  name: string
  size?: number
  className?: string
  title?: string
}

export default ({
  name,
  size = 24,
  className,
  title,
}: Props) => {
  return (
    <svg
      className={clsx(styles.icon, className)}
      width={size}
      height={size}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title && <title>{title}</title>}
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  )
}