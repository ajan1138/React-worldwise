import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
