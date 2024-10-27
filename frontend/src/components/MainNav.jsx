import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const mainNavItems = ["Home", "Notes", "About"];

export default function MainNav() {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <span className="relative flex shrink-0 overflow-hidden h-10 w-10">
            <img src="/logo2.png" className="aspect-square h-full w-full" />
          </span>
          <p className="font-medium">Notes AI</p>
        </div>
        <div className="mr-4 hidden gap-2 md:flex">
          {mainNavItems.map((item, index) => (
            <Link to={`/${item.toLowerCase()}`}>
              <Button key={index} variant="link">
                {item}
              </Button>
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </>
  );
}
