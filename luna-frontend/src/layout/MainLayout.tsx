import { Outlet } from "@tanstack/react-router";
import { Header } from "@/component/header/Header";
import { Footer } from "@/component/footer/Footer";
import { ScrollToTop } from "@/component/ui/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainLayout;
