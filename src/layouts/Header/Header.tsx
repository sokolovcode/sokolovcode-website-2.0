import styles from "./Header.module.scss"
import Icon from "@/components/Icon/Icon.tsx";
import BurgerButton from "@/components/BurgerButton/BurgerButton.tsx";
import ActionButton from "@/components/ActionButton/ActionButton.tsx";
import clsx from "clsx";
import { useState } from "react";

export default () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  const menuItems = [
    {
      label: 'Главная',
      href: '#hero',
      iconName: 'home',
    },
    {
      label: 'Стек',
      href: '#stack',
      iconName: 'stack',
    },
    {
      label: 'Обо мне',
      href: '#about',
      iconName: 'about',
    },
    {
      label: 'Работы',
      href: '#portfolio',
      iconName: 'portfolio',
    },
    {
      label: 'Опыт работы',
      href: '#experience',
      iconName: 'experience',
    },
    {
      label: 'Контакты',
      href: '#footer',
      iconName: 'footer',
    },
  ]

  return (
    <header className={clsx({
      [styles.header]: true,
      [styles.isExpanded]: isExpanded
    })}>
      <ActionButton onClick={() => setIsExpanded(false)} />
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {menuItems.map(({ label, href, iconName }) => (
            <li key={iconName}>
              <a href={href} className={styles.link}>
                <span className={styles.label}>{label}</span>
                <Icon
                  className={styles.icon}
                  name={iconName}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}