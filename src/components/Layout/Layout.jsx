import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Main } from "./Layout.styles";

export function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
