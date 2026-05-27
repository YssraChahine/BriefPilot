import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { AppShell, Main } from "./Layout.styles";

export function Layout() {
  return (
    <AppShell>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </AppShell>
  );
}
