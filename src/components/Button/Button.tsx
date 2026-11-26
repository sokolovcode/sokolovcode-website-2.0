import styles from './Button.module.scss';
import clsx from "clsx";
import Icon from "@/components/Icon/Icon.tsx";

type Props = {
  className?: string
  mode?: string
  type?: 'button'
  href?: string
  target?: string
  label?: string
  isLabelHidden?: boolean
  iconName?: string
  iconPosition?: 'before' | 'after'
  iconClassName?: string
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
  iconName,
  iconPosition = 'before',
  iconClassName,
  extraAttrs,
} : Props) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className={clsx(iconClassName, styles.icon)}
      name={iconName}
      title={title}
    />
  )

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
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className={styles.label}>{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}