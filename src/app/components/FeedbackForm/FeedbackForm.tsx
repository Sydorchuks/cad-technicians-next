"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/cn";
import Button from "@/app/components/ui/Button/Button";
import Toast from "@/app/components/ui/Toast/Toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.e164("Phone number must include country code"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FeedbackFormProps = {
  className?: string;
  align?: "responsive" | "center";
};

const inputs = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
] as const;

const inputClass = `
  w-full border-2 border-border pl-[20px] text-[16px] leading-[24px]
  text-text-dark outline-none placeholder:text-placeholder
  md:pl-[40px] md:text-[20px] md:leading-[26px]
`;

export default function FeedbackForm({
  className,
  align = "responsive",
}: FeedbackFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const isCentered = align === "center";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setShowSuccess(true);
    reset();
  };

  return (
    <>
    <div
        className={cn(
            "relative w-full max-w-[320px] md:w-115.5 md:max-w-none xl:w-100 2xl:w-117.5",
            className
        )}
    >
        <h2
          className={cn(
            "font-lora text-[36px] font-normal uppercase leading-11 text-text-dark whitespace-nowrap md:text-[60px] md:leading-19.25 xl:text-[56px] xl:leading-18 2xl:text-[70px] 2xl:leading-22.5",
            isCentered ? "text-center" : "text-center 2xl:text-left"
          )}
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
                className={cn(
                  inputClass,
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
              className={cn(
                inputClass,
                "h-30 resize-none pt-5 md:h-47.25 md:pt-10 xl:h-37.5 xl:pt-5 2xl:h-47.25 2xl:pt-10",
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
            className={cn(
              "mt-1.25 h-9 w-39.5 text-[12px] leading-6.5 md:mt-2.75 md:h-14.5 md:w-48.25 md:text-[14px] xl:mt-2 xl:h-14 xl:w-full 2xl:h-15.75 2xl:text-md",
              isCentered ? "mx-auto" : "mx-auto xl:mx-0"
            )}
          >
            SEND
          </Button>
        </form>
      </div>

      <Toast
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you for your question!"
      />
    </>
  );
}
