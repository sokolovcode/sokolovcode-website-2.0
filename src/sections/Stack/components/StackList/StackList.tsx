import styles from './StackList.module.scss';

type Props = {
  items: Array<string>
}

export default ({ items } : Props) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li
          className={styles.item}
          key={item}
        >
          <p>{item}</p>
        </li>
      ))}
    </ul>
  )
}