import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "../shared/SEO";
import FloatingNasiyeCTA from "../shared/FloatingNasiyeCTA";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main className="min-h-screen pt-12">{children}</main>
      <Footer />
      <FloatingNasiyeCTA />
    </>
  );
};

export default Layout;
