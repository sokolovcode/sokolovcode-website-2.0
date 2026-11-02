import styles from './Button.module.scss';
import clsx from "clsx";

type Props = {
  className?: string
  mode?: string
  type?: 'button'
  href?: string
  target?: string
  label?: string
  isLabelHidden?: boolean
  extraAttrs?: Record<string, string>
}

export default ({
  className,
  mode = '',
  type = 'button',
  href,
  target,
  label,
  isLabelHidden = false,
  extraAttrs,
} : Props) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={clsx(
        className,
        styles.button,
        mode && styles[`button--${mode}`],
      )}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {!isLabelHidden && (
        <span className={styles.label}>{label}</span>
      )}
    </Component>
  )
}