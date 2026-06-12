import { cn } from "../../../../cn";
import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";
import Button from "../ui/Button/Button";

export default function ContactBlock() {

    const inputs = [
        {
            type: "text",
            placeholder: "Name",
        },
        {
            type: "email",
            placeholder: "Email",
        },
        {
            type: "text",
            placeholder: "Phone",
        },
    ];
    const inputClass = "w-full border-2 border-border pl-[40px] text-[20px] leading-[26px] text-text-dark outline-none placeholder:text-[#9B9B9B]";
    
    return (
    <section className="relative overflow-hidden bg-white py-0">
      <div className="absolute left-0 top-[98px] w-full z-0">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute left-0 bottom-[43px] w-full z-0">
        <DecorLines count={6} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute top-0 vertical-line-right h-full z-0">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute 2xl:left-[1000px] ultra:left-[1311px] bottom-0 h-[1026px] z-0">
        <DecorLines count={1} position="center" direction="vertical"/>
      </div>

      <div className="absolute top-[235px] h-[1026px] z-0  w-full bg-white/30 z-30 h-px">
        <DecorLines count={1} position="top" direction="horizontal"/>
      </div>

      <div className="absolute bottom-[298px] h-[1026px] z-0 left-0 w-[1224px] opacity-15 z-30 h-px">
        <DecorLines count={1} position="bottom" direction="horizontal"/>
      </div>

      <div className="absolute bottom-[240px] h-[1026px] z-0 left-0 w-[1341px] bg-white/30 z-30 h-px">
        <DecorLines count={1} position="bottom" direction="horizontal"/>
      </div>

      <div className="absolute hidden lg:flex bottom-0 vertical-line-right-2 h-full z-30">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <Container className="relative">
        <div className="relative z-20 pt-[179px] pb-[140px]">
          <div className="relative flex items-start gap-[172px]">
            
            <div className="absolute left-[-100vw] top-0 h-[862px] w-[100vw] bg-primary"/>
            <div className="relative w-[700px] h-[862px] bg-primary">

              <div className="mt-[108px] max-w-[538px]">
                <h2 className="font-lora text-[70px] font-normal leading-[90px] uppercase text-white">
                  READY
                  <br />
                  TO START?
                </h2>

                <p className="mt-[41px] text-[20px] leading-[30px] text-white">
                  Working with Survey Drafters allows you to save time and focus
                  on building your business. With the ability to connect with us
                  online and have a team of experienced drafters at your
                  service, we think there&apos;s no better partnership.
                </p>

                <Button
                  variant="secondary"
                  className="mt-[52px] h-[63px] w-[262px]"
                >
                  START PROJECT
                </Button>
              </div>
            </div>

            <div className="relative w-[470px] shrink-0 pt-[100px]">
              <h2 className="font-lora text-[70px] font-normal leading-[90px] uppercase text-text-dark whitespace-nowrap">
                HAVE A
                <br />
                QUESTION?
              </h2>

              <form className="mt-[27px] flex flex-col gap-[14px]">
                {inputs.map((input) => (
                    <input
                        key={input.placeholder}
                        type={input.type}
                        placeholder={input.placeholder}
                        className={cn(inputClass, "h-[75px]")}
                    />
                ))}

                <textarea
                    placeholder="Type your question"
                    className={cn(inputClass, "h-[189px] resize-none pt-[40px]")}
                />

                <Button variant="outline-green" className="mt-[8px] h-[63px] w-full">
                  SEND
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}