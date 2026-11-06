import styles from "./Portfolio.module.scss"
import Section from "@/layouts/Section/Section.tsx"
import Slider from "@/components/Slider/Slider.tsx"
import { Image } from "@srcset/react"
import type { ImageModule } from "@/types/image"

const images = import.meta.glob<ImageModule>(
  "/src/assets/images/portfolio/*.jpg",
  { eager: true },
)

export default () => {
  const portfolioItems = [
    {
      title: 'Vertical videos',
      href: 'https://vertvidw.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-1.jpg',
    },
    {
      title: 'Food diary',
      href: 'https://pitaniewsb2.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-5.jpg',
    },
    {
      title: 'React App - To Do List',
      href: 'https://sokolovcode.github.io/todo-react/',
      imgSrc: '/src/assets/images/portfolio/portfolio-app-1.jpg',
    },
    {
      title: 'Chinese goods',
      href: 'https://medchinaw1.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-4.jpg',
    },
    {
      title: 'Waist',
      href: 'https://pitaniews9.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-9.jpg',
    },
    {
      title: 'Food diary',
      href: 'https://pitanwsb6.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-2.jpg',
    },
    {
      title: 'Food diary',
      href: 'https://pitanws10.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-8.jpg',
    },
    {
      title: 'Matrix',
      href: 'https://matrixv10.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-6.jpg',
    },
    {
      title: 'Pelvic floor',
      href: 'https://pelvicws.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-3.jpg',
    },
    {
      title: 'Food diary',
      href: 'https://pitaniecalt5sm.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-7.jpg',
    },
  ]

  return (
    <Section
      id="portfolio"
      title={<><span>Мои</span> работы</>}
      hasContainer={false}
    >
      <div className={styles.portfolio}>
        <Slider>
          {portfolioItems.map(({ href, imgSrc, title}) => {
            const { src, srcSet, placeholder } = images[imgSrc]

            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.image}
                  src={src}
                  srcSet={srcSet}
                  placeholder={placeholder}
                  alt={title}
                />
              </a>
            )
          })}
        </Slider>
      </div>
    </Section>
  )
}