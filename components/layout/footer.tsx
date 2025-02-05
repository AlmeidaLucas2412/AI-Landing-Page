import { Bot } from "lucide-react";

export const Footer = () => {
  return (
    <footer>
      <nav className="flex items-center justify-between p-4">
        <div className="flex gap-x-2">
          <Bot className="size-7" />
          <h1 className="text-2xl font-bold tracking-wide">
            BR<span className="text-[#51E34F]">AI</span>N
          </h1>
        </div>
        <ul className="flex font-semibold gap-x-8">
          <li className="hover:text-green-400">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-green-400">
            <a href="#features">Features</a>
          </li>
          <li className="hover:text-green-400">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:text-green-400">
            <a href="#testimonial">Testimonials</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between px-4">
        <span className="text-gray-400">Copyright &copy; 2025 BRAIN AI</span>
        <div className="flex gap-x-2">
          <a href="#" className="hover:text-green-400">
            Instagram
          </a>
          <a href="#" className="hover:text-green-400">
            Facebook
          </a>
          <a href="#" className="hover:text-green-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
