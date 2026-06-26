import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { UserContext } from "../context/user";
import { useContext, useRef } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useActiveSection } from "../../hooks/useScrollView";

const MobileMenu = () => {
  const list = [
    { id: 1, name: "About", href: "about" },
    { id: 2, name: "Events", href: "news" },
    { id: 3, name: "Services", href: "services", icon: <IoIosArrowDown /> },
    { id: 4, name: "Testimonials", href: "testimonials" },
    { id: 5, name: "Pricing", href: "pricing" },
  ];

  const activeSection = useActiveSection(list);

  const { setMenu } = useContext(UserContext);
  const asideRef = useRef();

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: "smooth",
    });
  };

  useGSAP(
    () => {
      const menu = asideRef.current;
      const tl = gsap.timeline();

      tl.fromTo(menu, { xPercent: 100 }, { xPercent: 0, duration: 0.2 }).to(
        ".animNav",
        { opacity: 1, xPercent: 0, duration: 0.2, stagger: 0.1 },
      );
    },
    { scope: asideRef },
  );

  const exitAnimation = () => {
    const menu = asideRef.current;
    const tl = gsap.timeline();

    tl.to(".animNav", {
      opacity: 0,
      xPercent: 500,
      duration: 0.2,
      stagger: 0.1,
      reversed: true,
    })
      .fromTo(menu, { xPercent: 0 }, { xPercent: 100, duration: 0.2 })
      .call(() => setMenu(false));
  };

  return (
    <aside
      ref={asideRef}
      className="h-dvh min-[481px]:max-w-62.5 fixed right-0 w-full bg-[#21140136] backdrop-blur-xl flex flex-col z-1000 gap-2 p-4 inset-y-0 min-[966px]:hidden"
    >
      <div className="h-fit w-full flex flex-col justify-center">
        <button onClick={() => exitAnimation()} className="p-2 self-center">
          <IoMdClose size={50} />
        </button>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-fit flex flex-col gap-6 items-start justify-start text-white">
          {list.map((data) => (
            <a
              key={data.id}
              onClick={() => {
                exitAnimation();
                handleScroll(data.href);
              }}
              className={`font-medium font-geist text-xl cursor-pointer focus:text-[#C75804] hover:text-[#C75804] transition-all duration-500 animNav opacity-0 translate-x-[500%] ${activeSection == data.href ? "text-[#C75804]" : ""}`}
            >
              {data.name}
            </a>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
