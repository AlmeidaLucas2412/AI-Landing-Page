import { Bot } from "lucide-react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <div className="flex gap-x-2">
          <Bot className="size-7" />
          <h1 className="font-bold text-2xl tracking-wide">
            BR<span className="text-[#51E34F]">AI</span>N
          </h1>
        </div>
        <ul className="flex gap-x-8 font-semibold">
          <li className="hover:text-green-400">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-green-400">
            <a href="#">Features</a>
          </li>
          <li className="hover:text-green-400">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-green-400">
            <a href="#">Testimonials</a>
          </li>
        </ul>
        <div>
          <Button variant="success" className="font-semibold">
            Sign in
          </Button>
        </div>
      </nav>
    </header>
  );
};
