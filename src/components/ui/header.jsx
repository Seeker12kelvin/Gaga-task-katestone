import Logo from "./logo";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useActiveSection } from "../../hooks/useScrollView";
import SignUpSection from "./signUpSection";

const Header = () => {
  const list = [
    { id: 1, name: "About", href: "about" },
    { id: 2, name: "Events", href: "news" },
    { id: 3, name: "Services", href: "services", icon: <IoIosArrowDown /> },
    { id: 4, name: "Testimonials", href: "testimonials" },
    { id: 5, name: "Pricing", href: "pricing" },
  ];

  const activeSection = useActiveSection(list);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex items-center justify-between fixed top-10 mx-auto left-0 right-0 z-999 inset-y-0 h-23 bg-[#21140136] backdrop-blur-xs rounded-[9999px] px-13 max-w-334 w-full">
      <Logo />

      <nav className="w-fit">
        <ul className="flex gap-22">
          {list.map((data) => (
            <li key={data.id}>
              <a
                onClick={() => handleScroll(data.href)}
                className={`${activeSection === data.id ? "text-[#FFAC1C]" : "text-white"} font-geist font-medium leading-6 flex gap-2 items-center cursor-pointer`}
              >
                {data.name}
                {data.icon && <span>{data.icon}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        onClick={() => handleScroll("signUp")}
        className={`${activeSection === "signUp" ? "text-[#FFAC1C]" : "text-white"} font-geist font-medium leading-6 flex gap-2 items-center cursor-pointer`}
      >
        Contact us{" "}
        <span>
          <IoIosArrowRoundForward size={26} />
        </span>
      </a>
    </header>
  );
};

export default Header;
