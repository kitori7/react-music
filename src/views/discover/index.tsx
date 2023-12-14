import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./c-cpns/nav-bar";

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = memo(() => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
});

export default Discover;
