import HomeHero from '../components/home-hero'
import HomeArchitecture from '../components/home-architecture'
import HomeEngineering from '../components/home-engineering'
import HomeStack from '../components/home-stack'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeEngineering />
      <HomeArchitecture />
      <HomeStack />
    </>
  )
}