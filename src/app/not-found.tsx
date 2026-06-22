import PageLayout from "@/app/pageLayout";

export default function NotFound() {
  return (
    <PageLayout headerVariant="light-bg">
      <section className="flex py-40 justify-center bg-white pb-[45px]">
        <img
          src="/404.svg"
          alt="404 error. Sorry, page not found."
          className="
            h-auto w-[80vw]
          "
        />
      </section>
    </PageLayout>
  );
}