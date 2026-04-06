import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingPetals from "./FloatingPetals";
import Chatbot from "./Chatbot";
import ThemeSwitcher from "./ThemeSwitcher";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <FloatingPetals />
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
    <ThemeSwitcher />
    <Chatbot />
  </div>
);

export default Layout;
