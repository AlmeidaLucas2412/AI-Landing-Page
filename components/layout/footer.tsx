import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <nav className="flex flex-col items-center justify-between p-4 md:flex-row">
        <div className="flex gap-x-2">
          <Image
            src="/robot-head.png"
            alt="logo"
            className="size-7"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold tracking-wide">
            BR<span className="text-[#51E34F]">AI</span>N
          </h1>
        </div>
        <ul className="flex font-semibold gap-x-2 md:gap-x-8">
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
      <div className="flex flex-col px-4 xs:items-center md:items-start md:justify-between md:flex-row">
        <span className="text-gray-400">Copyright &copy; 2025 BRAIN AI</span>
        <div className="flex gap-x-2 xs:text-xs m:text-base">
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
