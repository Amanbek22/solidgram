import css from "./SideBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { sideBarElements } from "../../constants";

const CustomLink = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <Link
      className={`${css.link} ${
        location.pathname === props.to ? css.active : ""
      }`}
      to={props.to}
    >
      <img width="20" src={props.icon} alt="Home" />
      {props.title}
    </Link>
  );
};

function SideBar() {
  const render = sideBarElements.map((el) => (
    <CustomLink key={el.title} {...el} />
  ));
  return (
    <aside className={css.wrapper}>
      {render}
      {/* <CustomLink to='/' title="Главная" src="dfsfsdf" /> */}
    </aside>
  );
}

export default SideBar;
