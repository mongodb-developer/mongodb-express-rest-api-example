import { SideNav, SideNavItem } from '@leafygreen-ui/side-nav';
import { Link, useLocation } from "react-router-dom";

export default function Navigation ({ className }) {
  const location = useLocation();

  return (
    <SideNav aria-label="Navigation Bar" className={className}>
      <SideNavItem aria-label="Home" as={Link} active={location.pathname === "/"} to="/">Home</SideNavItem>
      <SideNavItem aria-label="Archive" as={Link} active={location.pathname === "/archive"} to="/archive">Archive</SideNavItem>
      <SideNavItem aria-label="New Post" as={Link} active={location.pathname === "/create"} to="/create">New Post</SideNavItem>
    </SideNav>
  );
}