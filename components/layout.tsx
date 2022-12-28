import IYarlesNavbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }: any): JSX.Element {
  return (
    // <div className='container'>
    <div>
      <IYarlesNavbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}