import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "../shared/SEO";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
