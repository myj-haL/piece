import style from "./index.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

const Layout = ({children}) => {
  return (
    <div className={style.container}>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default Layout;