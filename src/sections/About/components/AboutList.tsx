import { useState } from "react";
import styles from '../About.module.scss'
import Accordion from "@/components/Accordion/Accordion.tsx";

type AboutListProps = {
  items: {
    title: string
    description: string
  }[]
}

export default ({ items }: AboutListProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const onOpen = (index: number) => {
    setOpenIndex((currentIndex) => {
      if (currentIndex !== index) {
        return index
      }

      if (index < items.length - 1) {
        return index + 1
      }

      return index - 1
    })
  }

  return (
    <ul className={styles.list}>
      {items.map(({ title, description }, index) => (
        <li className={styles.item} key={title}>
          <Accordion
            title={title}
            id={`information-${index}`}
            name="info"
            isOpen={openIndex === index}
            onOpen={() => onOpen(index)}
          >
            <p>{description}</p>
          </Accordion>
        </li>
      ))}
    </ul>
  )
}