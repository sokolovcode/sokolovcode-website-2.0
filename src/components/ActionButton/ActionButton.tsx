import styles from './ActionButton.module.scss'
import buttonStyles from '../Button/Button.module.scss'
import headerStyles from '@/layouts/Header/Header.module.scss'
import clsx from "clsx";
import Icon from "@/components/Icon/Icon.tsx";

type Props = {
  className?: string
  onClick?: () => void
}

export default ({ className, onClick }: Props) => {
  return (
    <button
      className={clsx(className, {
        [buttonStyles.button]: true,
        [styles.actionButton]: true,
        // [styles.isActive]: isActive,
      })}
      onClick={onClick}
    >
      <Icon
        className={clsx(headerStyles.icon, styles.icon)}
        name='action-arrow'
      />
    </button>
  )
}