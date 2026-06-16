"use client"
import { cn } from "../../../../cn";
import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";
import Button from "../ui/Button/Button";
import "../../styles/vertical-lines.css";
import { useState } from "react";
import Toast from "../ui/Toast/Toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.e164("Phone number must include country code"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputs = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
] as const;


export default function ContactBlock() {

    const [showSuccess, setShowSuccess] = useState(false);
    const inputClass =`w-full border-2 border-border pl-[20px] text-[16px] leading-[24px] 
     md:pl-[40px] md:text-[20px] md:leading-[26px] text-text-dark outline-none placeholder:text-placeholder`;

    const greenBlock = {
      height: "h-105 md:h-150 xl:h-175 2xl:h-215.5",
      width: "xl:w-140 2xl:w-175",
      color: "bg-primary"
    };

    const { register, handleSubmit, reset, formState: { errors },} = useForm<ContactFormData>({
      resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
      console.log(data);
      setShowSuccess(true);
      reset();
    };

    return (
      <section className="relative overflow-hidden bg-white py-0">
        <div className="absolute left-0 top-4 md:top-18 2xl:top-24.5 w-full z-0">
          <DecorLines count={1} position="top" direction="horizontal" />
        </div>

        <div className="md:block xl:hidden">
          <div className="absolute left-0 bottom-1 md:bottom-5.25 w-full z-0">
            <DecorLines count={4} position="bottom" direction="horizontal" />
          </div>

          <div className="absolute left-0 bottom-11 md:bottom-17.5 w-full z-0">
            <DecorLines count={1} position="bottom" direction="horizontal" />
          </div>
        </div>

        <div className="hidden xl:block absolute left-0 bottom-0 w-full z-0">
          <DecorLines count={6} position="bottom" direction="horizontal" />
        </div>

        <div className="hidden md:flex lg:hidden absolute top-0 vertical-line-right h-full z-30 opacity-40">
          <DecorLines count={1} position="right" direction="vertical" />
        </div>

        <div className="hidden md:flex lg:hidden absolute bottom-0 right-10.25 h-225 z-30 opacity-40">
          <DecorLines count={1} position="right" direction="vertical" />
        </div>

        <div className="hidden md:flex lg:hidden absolute top-0 vertical-line-left h-full z-30 opacity-20">
          <DecorLines count={1} position="left" direction="vertical" />
        </div>

        <div className="hidden xl:block absolute 2xl:left-250 ultra:left-327.75 bottom-0 h-256.5 z-0">
          <DecorLines count={1} position="center" direction="vertical"/>
        </div>

        <div className="hidden xl:block absolute top-45 2xl:top-58.75 w-full bg-white/30 z-30">
          <DecorLines count={1} position="top" direction="horizontal"/>
        </div>

        <div className="hidden xl:block absolute bottom-60 2xl:bottom-74.5 left-0 w-175 2xl:w-306 opacity-15 z-30">
          <DecorLines count={1} position="bottom" direction="horizontal"/>
        </div>

        <div className="hidden xl:block absolute bottom-52 2xl:bottom-60 left-0 w-187.5 2xl:w-335.25 bg-white/30 z-30">
          <DecorLines count={1} position="bottom" direction="horizontal"/>
        </div>

        <div className="hidden xl:block absolute lg:flex bottom-0 vertical-line-right-2 h-full z-30">
          <DecorLines count={1} position="right" direction="vertical" />
        </div>

        <div className="absolute hidden lg:flex top-0 vertical-line-right h-full z-30">
          <DecorLines count={1} position="right" direction="vertical" />
        </div>

        <Container className="relative">
          <div className="relative z-20 pt-12.75 pb-18 md:pb-30 md:pt-27.5 xl:pt-35 2xl:pt-44.75 2xl:pb-35">
            <div className="relative flex flex-col items-center xl:flex-row xl:items-start xl:gap-25 2xl:gap-43">
              
              <div className={cn("absolute left-[-100vw] top-0 w-screen", greenBlock.height, greenBlock.color)}/>
              <div className={cn("relative w-screen", greenBlock.width, greenBlock.height, greenBlock.color)}>
                <div className="mx-auto mt-9.25 md:mt-17 xl:mt-20 max-w-134.5 text-center xl:mx-0 xl:mr-10 2xl:mr-0 2xl:mt-27 2xl:text-left">
                  
                  <h2 className="font-lora text-[44px] leading-13 md:text-[60px] md:leading-17.5 xl:text-[56px] xl:leading-17 2xl:text-[70px] 2xl:leading-22.5 uppercase text-white font-normal">
                    READY
                    <br />
                    TO START?
                  </h2>
                  <p className="mt-6 px-5 text-[16px] leading-6 md:mt-10.25 md:px-0 md:text-[20px] md:leading-7.5 xl:max-w-112.5 2xl:max-w-none text-white">
                    Working with Survey Drafters allows you to save time and focus
                    on building your business. With the ability to connect with us
                    online and have a team of experienced drafters at your
                    service, we think there&apos;s no better partnership.
                  </p>
                  <Button
                    variant="secondary"
                    className="text-[12px] md:text-[14px] 2xl:text-md mt-6.75 h-9 w-39.5 mx-auto
                    md:mt-12 md:h-14.5 md:w-48.25 xl:h-14 xl:w-55 2xl:mt-13 2xl:h-15.75 2xl:w-65.5 2xl:mx-0"
                  >
                    START PROJECT
                  </Button>

                </div>
              </div>

              <div className="relative w-full max-w-[320px] md:w-115.5 xl:w-100 2xl:w-117.5 pt-12.5 md:max-w-none md:pt-16.25 xl:pt-17.5 2xl:pt-25">
                <h2 className="font-lora text-center text-[36px] leading-11 md:text-[60px] md:leading-19.25
                    xl:text-[56px] xl:leading-18 2xl:text-left 2xl:text-[70px] 2xl:leading-22.5 font-normal uppercase text-text-dark whitespace-nowrap"
                >
                  HAVE
                  <br />
                  A QUESTION?
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6.75 flex flex-col gap-3.5">
                  {inputs.map((input) => (
                    <div key={input.name}>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(input.name)}
                        className={cn(inputClass,
                          "h-12.5 md:h-18.75 xl:h-15 2xl:h-18.75", 
                          errors[input.name] && "border-red-500"
                        )}
                      />
                      {errors[input.name] && (
                        <p className="ml-10 mt-1 text-[12px] text-red-500">
                          {errors[input.name]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                  <div>
                    <textarea
                        placeholder="Type your question"
                         {...register("message")}
                        className={cn(inputClass,
                          "h-30 md:h-47.25 xl:h-37.5 2xl:h-47.25 resize-none pt-5 md:pt-10 xl:pt-5 2xl:pt-10",
                          errors.message && "border-red-500"
                        )}
                    />
                    {errors.message && (
                      <p className="ml-10 mt-1 text-[12px] text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="outline-green"
                    className="mt-1.25 md:mt-2.75 w-39.5 h-9 mx-auto text-[12px] md:text-[14px] 2xl:text-md leading-6.5 
                    md:h-14.5 md:w-48.25 md:mx-auto xl:mt-2 xl:h-14 2xl:h-15.75 xl:w-full xl:mx-0"
                  >
                    SEND
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
          
        <Toast open={showSuccess} onClose={() => setShowSuccess(false)} message="Thank you for your question!" />
      </section>
  );
}