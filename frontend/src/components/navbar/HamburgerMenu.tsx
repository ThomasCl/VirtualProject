import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface MobileLinksProps {
  navigation: { name: string; href: string }[];
}

const HamburgerMenu = ({ navigation }: MobileLinksProps) => {
  const router = useRouter();
  return (
    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
      {/* Mobile menu button*/}
      <Sheet>
        <SheetTrigger
          className={cn(
            buttonVariants({ variant: "outline" }),
            "inline-flex items-center justify-center rounded-md p-2",
          )}
        >
          <Bars3Icon className="block h-6 w-6 " aria-hidden="true" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Navigation</SheetTitle>
          </SheetHeader>
          <div className="mt-2 flex flex-col space-y-1 pb-3 ">
            {navigation.map((item) => (
              <SheetClose>
                <Button
                  type="submit"
                  key={item.name}
                  variant="secondary"
                  className="w-full p-0"
                  onClick={() => router.push(item.href)}
                >
                  {item.name}
                </Button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
