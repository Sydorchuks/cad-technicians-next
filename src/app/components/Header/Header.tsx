"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Container from "../ui/Container/Container"

type HeaderProps = {
  variant?: "light-bg" | "dark-bg"
}

export default function Header({
  variant = "light-bg",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const isDark = variant === "dark-bg"

  const logoSrc = isDark
    ? "/logo-white.png"
    : "/logo-black.png"

  const textColor = isDark
    ? "text-white"
    : "text-[var(--color-primary)]"

  return (
    <header
      className={`absolute left-0 top-0 z-50 w-full border-b border-(--color-border)/20 md:min-h-[108px]
        ${
          menuOpen
            ? "bg-(--color-bg) md:h-[483px] h-[345px]"
            : ""
        }
      `}
    >
      <Container>
        <div className="hidden lg:block">
          <div className=" w-full pt-[46px] pb-[24px] 2xl:pt-[32px] 2xl:pb-[23px]">
            <div className="flex items-start justify-between">
              <Image
                src={logoSrc}
                alt="Logo"
                width={160}
                height={111}
                priority
                className="h-[111px] w-[160px] shrink-0"
              />

              <div className="flex flex-col items-end gap-[27px]">
                <button
                  className={`h-[63px] w-[262px] border-[2px] text-[18px] font-bold uppercase
                    ${
                      isDark
                        ? "border-(--color-bg) text-(--color-text-light)"
                        : "border-[--color-primary] text-[--color-primary:]"
                    }
                  `}
                >
                  LOGIN / REGISTRATION
                </button>

                <nav className="flex items-center">
                  <Link
                    href="/"
                    className={`${textColor} mr-[44px] text-[22px] font-semibold uppercase`}
                  >
                    HOME
                  </Link>

                  <Link
                    href="/about"
                    className={`${textColor} mr-[26px] text-[22px] font-semibold uppercase`}
                  >
                    ABOUT
                  </Link>

                  <Link
                    href="/services"
                    className={`${textColor} mr-[26px] text-[22px] font-semibold uppercase`}
                  >
                    OUR SERVICES
                  </Link>

                  <Link
                    href="/contact"
                    className={`${textColor} text-[22px] font-semibold uppercase`}
                  >
                    CONTACT US
                  </Link>

                </nav>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:hidden">
        <div className="flex items-start justify-between">
          <Image
            src={menuOpen ? "/logo-black.png" : logoSrc}
            alt="Logo"
            width={129}
            height={89}
            priority
            className="mt-[16px] w-[77px] h-[53px] md:w-[129px] md:h-[89px]"
          />

          <div className="flex items-start">
            {!menuOpen && (
              <button
                className={`mt-[24px] w-[158px] h-[36px] text-[11px] md:mt-[30px] md:w-[193px] md:h-[58px] md:text-[14px] border-[2px] font-bold uppercase
                  ${
                    isDark
                      ? "border-(--color-bg) text-(--color-text-light)"
                      : "border-(--color-primary) text-(--color-primary)"
                  }
                `}
              >
                LOGIN / REGISTRATION
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={
                menuOpen
                  ? "mt-[30px] ml-[18px] md:mt-[40px]"
                  : "mt-[31px] ml-[18px] md:mt-[46px] md:ml-[42px]"
              }
            >
              {menuOpen ? (
                <Image
                  src="/header-exit-button.png"
                  alt="Close"
                  width={15}
                  height={16}
                  className="w-[15px] h-[16px]"
                />
              ) : (
                <Image
                  src="/header-burger-button.png"
                  alt="Menu"
                  width={37}
                  height={26}
                  className="w-[31px] h-[23px] md:w-[37px] md:h-[26px]"
                />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col items-center mt-[22px] md:mt-[37px]">
            <Link
              href="/"
              className="text-[18px] font-bold uppercase text-(--color-primary) md:text-[24px]"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="mt-[12px] text-[18px] font-bold uppercase text-(--color-primary) md:mt-[18px] md:text-[24px]"
            >
              ABOUT
            </Link>

            <Link
              href="/services"
              className="mt-[12px] text-[18px] font-bold uppercase text-(--color-primary) md:mt-[18px] md:text-[24px]"
            >
              OUR SERVICES
            </Link>

            <Link
              href="/contact"
              className="mt-[12px] text-[18px] font-bold uppercase text-(--color-primary) md:mt-[18px] md:text-[24px]"
            >
              CONTACT US
            </Link>
          </nav>
        )}
        </div>
      </Container>
    </header>
  )
}