import { Outlet } from "@tanstack/react-router";
import { Header } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

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
