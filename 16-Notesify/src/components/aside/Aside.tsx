import { useLocation } from "react-router-dom";
import * as React from "react"
import { NavMenu, NavItem, NavLinks, IconWrapper } from "./asideComponent";
import { HomeIcon ,TrashIcon,ArchiveIcon} from "../../assets/icons/navigationIcon";
import { useAppSelector } from "../../Redux/hooks";

export const Aside = ():JSX.Element => {
  const { pathname } = useLocation();
  const { drawerOpen } = useAppSelector(store => store.aside)
  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" &&
    pathname !== "/mockman" ? (
    <aside className={drawerOpen ? "aside aside-show" : "aside"}>
      <NavMenu>
        <NavLinks to="/" className={navData=> navData.isActive ? "active" :""}>
          <IconWrapper><HomeIcon height="2rem" width="2rem" /></IconWrapper>
          <NavItem>Home</NavItem>
        </NavLinks>
        <NavLinks to="/archive" >
          <IconWrapper><ArchiveIcon height="2rem" width="2rem" /></IconWrapper>
          <NavItem>Archive</NavItem>
        </NavLinks>
        <NavLinks to="/trash" >
          <IconWrapper><TrashIcon height="2rem" width="2rem" /></IconWrapper>
          <NavItem>Trash</NavItem>
        </NavLinks>
      </NavMenu>
    </aside>
  ) : <></>;
};
