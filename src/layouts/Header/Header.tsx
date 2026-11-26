import styles from "./Header.module.scss"
import Icon from "@/components/Icon/Icon.tsx";
import BurgerButton from "@/components/BurgerButton/BurgerButton.tsx";

export default () => {
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
    <header className={styles.header}>
      <dialog className={styles.dialog}>
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
      </dialog>
      <BurgerButton className="visible-mobile" />
    </header>
  )
}