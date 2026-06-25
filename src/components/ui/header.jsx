import Logo from "./logo";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useActiveSection } from "../../hooks/useScrollView";
import MenuBtn from "./menuBtn";

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
    <header className="flex items-center justify-between fixed top-10 mx-auto max-[481px]:left-2 max-[481px]:right-2 max-[966px]:left-5 max-[966px]:right-5 left-13 right-13 z-999 inset-y-0 h-23 bg-[#21140136] backdrop-blur-xs rounded-[9999px] max-sm:px-8 px-13">
      <Logo />

      <nav className="w-fit max-[966px]:hidden">
        <ul className="flex max-[1149px]:gap-10 max-[1003px]:gap-8 min-[1149px]:gap-15 xl:gap-22">
          {list.map((data) => (
            <li key={data.id}>
              <a
                onClick={() => handleScroll(data.href)}
                className={`${activeSection === data.id ? "text-[#FFAC1C]" : "text-white"} max-[1149px]:text-sm font-geist font-medium leading-6 flex gap-2 items-center cursor-pointer`}
              >
                {data.name}
                {data.icon && <span>{data.icon}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <a
          onClick={() => handleScroll("signUp")}
          className={`${activeSection === "signUp" ? "text-[#FFAC1C]" : "text-white"} max-[1149px]:text-sm font-geist font-medium leading-6 flex gap-2 items-center cursor-pointer max-[574px]:hidden`}
        >
          Contact us{" "}
          <span>
            <IoIosArrowRoundForward size={26} />
          </span>
        </a>

        <MenuBtn />
      </div>
    </header>
  );
};

export default Header;
