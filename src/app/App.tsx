import './styles'
import Content from "@/layouts/Content/Content";
import Hero from "@/sections/Hero/Hero.tsx";
import Stack from "@/sections/Stack/Stack.tsx";
import About from "@/sections/About/About.tsx";
import Portfolio from "@/sections/Portfolio/Portfolio.tsx";
import Experience from "@/sections/Experience/Experience.tsx";
import Footer from "@/layouts/Footer/Footer.tsx";
import Header from "@/layouts/Header/Header.tsx";

export default () => {
  return (
    <>
      <Header />
      <Content>
        <Hero />
        <Stack />
        <About />
        <Portfolio />
        <Experience />
      </Content>
      <Footer />
    </>
  )
}
