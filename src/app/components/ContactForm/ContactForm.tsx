import FeedbackForm from "../FeedbackForm/FeedbackForm";
import DecorLines from "../ui/DecorLines/DecorLines";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex justify-center px-5 pt-9 pb-25 md:pt-15 xl:pt-20">
        <FeedbackForm align="center"/>
      </div>

      <div className="absolute top-4.75 right-0 z-0 w-85.5 md:w-175.25 xl:w-372.5 2xl:w-449 ultra:w-521.5 [&>div>div]:gap-1.5">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute bottom-6.75 left-0 z-0 w-full">
        <DecorLines count={5} position="bottom" direction="horizontal" />
      </div>
    </section>
  );
}
