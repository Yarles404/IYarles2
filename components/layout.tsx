import IYarlesNavbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }: any): JSX.Element {
  return (
    // <div className='container'>
    <>
      <IYarlesNavbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
