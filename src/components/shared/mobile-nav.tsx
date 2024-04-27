import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./nav-items";

export function MobileNav() {
  return (
    <div className="md:hidden flex-end">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"link"} className="pt-10">
            <span className="icon-[iconamoon--menu-burger-horizontal-bold] text-3xl text-black"></span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-transparent backdrop-blur-sm p-0">
          <SheetHeader>
            <SheetTitle className="flex-start border-b-2 border-white text-tertiary">
              <div className="flex-center gap-4 text-start p-4">
                <img src="/assets/images/logo-color.png" width={40} />
                <div className="flex flex-col font-bold">
                  <h2 className="text-base">S C O L A</h2>
                  <p className="text-xs">A &ensp;P R I V I L E G E</p>
                </div>
              </div>
            </SheetTitle>
            <SheetDescription className="p-4 text-xl text-white">
              <NavItems />
            </SheetDescription>
          </SheetHeader>

          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
