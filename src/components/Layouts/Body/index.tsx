import style from "./index.module.css";

interface Props {
  children:any;
}

const Body = ({children} : Props) => {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default Body;