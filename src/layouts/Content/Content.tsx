import type { PropsWithChildren } from "react";
import styles from './Content.module.scss';

export default ({ children }: PropsWithChildren) => {
  return <main className={styles.content}>{children}</main>
}