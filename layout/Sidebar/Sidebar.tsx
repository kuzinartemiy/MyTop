import { SidebarProps } from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Menu } from "../Menu/Menu";
import LogoIcon from '../logo.svg';

export const Sidebar = ({className, ...props }:SidebarProps):JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <LogoIcon className={styles.logo}/>
      <div className="search">Search</div>
      <Menu />
    </div>
  )
}