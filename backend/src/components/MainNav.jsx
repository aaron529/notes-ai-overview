import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const mainNavItems = ["Home", "Notes", "About"];

export default function MainNav() {
  return (
    <>
      <div className="flex justify-around w-full">
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
