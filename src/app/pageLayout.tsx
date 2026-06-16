import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

type PageLayoutProps = {
  children: React.ReactNode;
  headerVariant?: "light-bg" | "dark-bg";
};

export default function PageLayout({
  children,
  headerVariant = "dark-bg",
}: PageLayoutProps) {
  return (
    <>
      <Header variant={headerVariant} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}