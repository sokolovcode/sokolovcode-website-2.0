import Content from "../layouts/Content/Content";
import './styles'
import Hero from "@/sections/Hero/Hero.tsx";
import Stack from "@/sections/Stack/Stack.tsx";
import About from "@/sections/About/About.tsx";
import Portfolio from "@/sections/Portfolio/Portfolio.tsx";

export default () => {
  return (
    <Content>
      {/*<Hero />*/}
      <Stack />
      <About />
      <Portfolio />
    </Content>
  )
}
