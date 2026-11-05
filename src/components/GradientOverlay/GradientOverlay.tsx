import styles from "./GradientOverlay.module.scss";
import clsx from "clsx";

type Props = {
  position: "left" | "right"
  width?: string
}

export default ({ position, width = '2.29%' }: Props) => {

  console.log(styles)
  return (
    <div
      className={clsx(styles.overlay, styles[position])}
      style={{ width }}
      aria-hidden="true"
    />
  )
}