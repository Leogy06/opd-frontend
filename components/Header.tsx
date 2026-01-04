import { Hospital } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header>
      {/* height and backgorund */}
      <div className="bg-accent shadow-sm shadow-background w-full h-18">
        {/* element container */}
        <div className=" py-3">
          {/* element positioning */}
          <div className="lex items-center justify-between">
            {/* sidebar triger + theme toggle */}
            <SidebarTrigger />
          </div>
        </div>
      </div>
    </header>
  );
}
