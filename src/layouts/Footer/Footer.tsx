import styles from './Footer.module.scss';
import GradientOverlay from "@/components/GradientOverlay/GradientOverlay.tsx";
import clsx from "clsx";
import { AUTHOR_NAME, AUTHOR_SURNAME } from "@/constants/author.ts";
import Button from "@/components/Button/Button.tsx";

export default () => {
  const currentYear = String(new Date().getFullYear())

  const socialLinks= [
    {
      label: 'Telegram',
      iconName: 'telegram',
      href: 'https://t.me/Leksandrdrdr',
    },
    {
      label: 'GitHub',
      iconName: 'git-hub',
      href: 'https://github.com/sokolovcode',
    },
    {
      label: 'Mail',
      iconName: 'mail',
      href: 'mailto:alek7765@rambler.ru',
    },
    {
      label: 'LinkedIn',
      iconName: 'linked-in',
      href: '#',
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.divider}>
        <GradientOverlay position='left' width='50%'/>
        <hr className={styles.hr}/>
        <GradientOverlay position='right' width='50%'/>
      </div>
      <div className={clsx(styles.inner, "container")}>
        <p className={clsx(styles.copyright, "h6")}>
          @ {AUTHOR_NAME} {AUTHOR_SURNAME}, <time dateTime={currentYear}>{currentYear}</time>
        </p>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {socialLinks.map(({ label, iconName, href }, index) => (
              <li className={styles.item} key={iconName}>
                <Button
                  className={styles.link}
                  iconClassName={styles.icon}
                  href={href}
                  target="_blank"
                  label={label}
                  iconName={iconName}
                  isLabelHidden
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}