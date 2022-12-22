import FooterApp from "./Footer";
import HeadAPP from "./Head";

export default function Layout({ children }){
  return (
    <>
      <HeadAPP />
      
      <main>
        { children }
      </main>

      <FooterApp />
      
    </>
  )
}