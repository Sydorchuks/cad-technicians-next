import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

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
      <main>{children}</main>
      <Footer />
    </>
  );
}