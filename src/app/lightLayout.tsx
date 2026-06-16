import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


export default function LightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="light-bg" />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}