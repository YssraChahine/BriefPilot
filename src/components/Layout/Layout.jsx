import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { AppShell, Main } from "./Layout.styles";

export function Layout() {
  return (
    <AppShell>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AppShell>
  );
}
