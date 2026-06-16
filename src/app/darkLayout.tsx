import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function DarkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="dark-bg" />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}