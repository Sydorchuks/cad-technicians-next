"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Container from "../ui/Container/Container"
import Button from "../ui/Button/Button"
import { cn } from "../../../../cn"

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
    : "text-primary"

  const navItems = [
    {
      route: "/",
      label: "HOME",
    },
    {
      route: "/about",
      label: "ABOUT",
    },
    {
      route: "/services",
      label: "OUR SERVICES",
    },
    {
      route: "/contact",
      label: "CONTACT US",
    },
  ]

  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-50 w-full border-b border-border/20 md:min-h-27",
        menuOpen && "bg-bg md:h-120.75 h-86.25"
      )}
    >
      <Container>
        <div className="hidden lg:block">
          <div className=" w-full pt-11.5 pb-6 2xl:pt-8 2xl:pb-5.75">
            <div className="flex items-start justify-between">
              <Image
                src={logoSrc}
                alt="Logo"
                width={160}
                height={111}
                priority
                className="h-27.75 w-40 shrink-0"
              />

              <div className="flex flex-col items-end gap-6.75">
                <Button
                  className={cn(
                    "h-15.75 w-65.5 text-18",
                    isDark
                      ? "border-white text-text-light"
                      : "border-primary text-primary"
                  )}
                >
                  LOGIN / REGISTRATION
                </Button>
                <nav className="flex items-center gap-5.5">
                  {navItems.map((item) => (
                      <Link
                        key={item.route}
                        href={item.route}
                        className={cn(textColor, "text-22 font-semibold uppercase")}
                      >
                        {item.label}
                      </Link>
                    ))}
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
            className="mt-4 w-19.25 h-13.25 md:w-32.25 md:h-22.25"
          />

          <div className="flex items-start">
            {!menuOpen && (
              <Button
              className={cn(
                "mt-6 w-39.5 h-9 text-11 md:mt-7.5 md:w-48.25 md:h-14.5 md:text-14",
                isDark
                  ? "border-white text-text-light"
                  : "border-primary text-primary"
                )}>
                LOGIN / REGISTRATION
              </Button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={
                cn("ml-4.5",
                menuOpen
                  ? "mt-7.5 md:mt-10"
                  : "mt-7.75 md:mt-11.5 md:ml-10.5")}
            >
              {menuOpen ? (
                <Image
                  src="/header-exit-button.png"
                  alt="Close"
                  width={15}
                  height={16}
                  className="w-3.75 h-4"
                />
              ) : (
                <Image
                  src="/header-burger-button.png"
                  alt="Menu"
                  width={37}
                  height={26}
                  className="w-7.75 h-5.75 md:w-9.25 md:h-6.5"
                />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col items-center mt-5.5 md:mt-9.25">
            {navItems.map((item, index) => (
              <Link
                key={item.route}
                href={item.route}
                className={cn(
                  "text-18 font-bold uppercase text-primary md:text-24",
                  index !== 0 && "mt-3 md:mt-4.5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
        </div>
      </Container>
    </header>
  )
}