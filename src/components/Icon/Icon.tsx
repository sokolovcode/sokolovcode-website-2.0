import clsx from 'clsx'
import React from 'react'
import styles from './Icon.module.scss'

type Props = {
  name: string
  className?: string
  title?: string
} & React.SVGProps<SVGSVGElement>

export default ({ name, className, title, ...attributes }: Props) => {
  return (
    <span className={clsx(className, styles.icon)}>
      <svg
        aria-hidden={title ? undefined : true}
        role={title ? 'img' : undefined}
        {...attributes}
      >
        {title && <title>{title}</title>}
        <use href={`/icons/sprite.svg#${name}`} />
      </svg>
    </span>
  )
}