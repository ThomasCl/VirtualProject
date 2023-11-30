"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../dark-mode/switch";
import DesktopLinks from "./DesktopLinks";
import HamburgerMenu from "./HamburgerMenu";
import ProfileDropDown from "./ProfileDropDown";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import pic1 from "../../../public/logo-vote.png";
const navigation = [
  { name: "Overview", href: "/suggestions-overview" },
  {
    name: "Admin",
    href: "/admin",
  },
  { name: "Suggestions Review", href: "/suggestions-review" },
];

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const path = usePathname();
  const { data: session } = useSession();

  const filteredNavigation = useMemo(() => {
    if (session) {
      return session.user.role === "ADMIN"
        ? navigation
        : navigation.slice(0, 1);
    }
    return navigation;
  }, [session]);

  return (
    <nav className="sticky top-0 z-50 w-full border-1 border-border bg-background">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/*Mobile hamburger menu*/}
          <HamburgerMenu navigation={filteredNavigation} />
          {/*Navbar*/}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/*Logo*/}

            {/*NavLinks (hidden in mobile mode)*/}
            <DesktopLinks>
              <Image
                src={pic1}
                alt="Logo VoteEase"
                className={cn([
                  { "brightness-0 filter": resolvedTheme == "light" },
                ])}
                width={150}
              />
              <NavigationMenu>
                <NavigationMenuList>
                  {filteredNavigation.map((item) => (
                    <NavigationMenuItem>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                          active={item.href === path}
                        >
                          <div
                            className={cn(
                              item.href === path
                                ? "font-semibold"
                                : "font-normal",
                            )}
                          >
                            {item.name}
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </DesktopLinks>
          </div>
          {/*Profile menu*/}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* BellIcon */}
            {/* <Notification /> */}
            {/* DarkMode */}
            <ModeToggle />
            {/* Profile dropdown */}
            <ProfileDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
}
