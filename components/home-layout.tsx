import IYarlesNavbar from './navbar'
// import Footer from './footer'

export default function HomeLayout({ children }: any): JSX.Element {
  return (
    <>
      <IYarlesNavbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}