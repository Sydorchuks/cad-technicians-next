"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Container from "../ui/Container/Container"
import Button from "../ui/Button/Button"
import { cn } from "../../../../cn"
import useScrolled from "@/app/hooks/useScrolled"

type HeaderProps = {
  variant?: "light-bg" | "dark-bg"
}

export default function Header({
  variant = "light-bg",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(50);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const headerBackground = (() => {
    if (!scrolled) {
      return "bg-transparent";
    }
  
    return isDark
      ? "bg-primary shadow-sm"
      : "bg-white shadow-sm";
  })();

  return (
    <header className={cn("fixed left-0 top-0 z-50 w-full border-b border-border/20 md:min-h-27", headerBackground)}>
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
                variant={isDark ? "secondary" : "primary"}
                className="h-15.75 w-65.5 text-md"
              >
                LOGIN / REGISTRATION
              </Button>
                <nav>
                  <ul className="flex items-center gap-5.5">
                    {navItems.map((item) => (
                      <li key={item.route}>
                        <Link
                          href={item.route}
                          className={cn(
                            textColor,
                            "text-xl font-semibold uppercase transition-colors duration-300 hover:opacity-70"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
              className="relative z-50 mt-4 w-19.25 h-13.25 md:w-32.25 md:h-22.25"
            />

            <div className="flex items-start">
              {!menuOpen && (
                <Button
                  variant={isDark ? "secondary" : "primary"}
                  className="mt-6 w-39.5 h-9 text-[11px] md:mt-7.5 md:w-48.25 md:h-14.5 md:text-sm"
                >
                  LOGIN / REGISTRATION
                </Button>
              )}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={cn(
                  "relative z-50 ml-4.5",
                  menuOpen
                    ? "mt-7.5 md:mt-10"
                    : "mt-7.75 md:mt-11.5 md:ml-10.5"
                )}
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

          <nav
            className={cn(
              "fixed inset-0 z-40 bg-bg flex flex-col items-center pt-34 md:pt-46 transition-opacity duration-300 ease-in-out",
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-8 pointer-events-none"
            )}
          >
            <ul className="flex flex-col items-center">
              {navItems.map((item, index) => (
                <li
                  key={item.route}
                  className={cn(
                    index !== 0 && "mt-3 md:mt-4.5"
                  )}
                >
                  <Link
                    href={item.route}
                    onClick={() => setMenuOpen(false)}
                    className="text-md font-bold uppercase text-primary md:text-xl transition-colors duration-300 hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}