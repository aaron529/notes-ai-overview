import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/siteHeader";
import { ThemeProvider } from "@/components/theme-provider";

function MainLayout() {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      ></ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <Outlet />
      </div>
      <ThemeProvider />
    </>
  );
}

export default MainLayout;
