import kateStonePrepLogo from "../../assets/images/kateStonePrepLogo.png";

const Header = () => {
  const list = ["About", "Events", "Services", "Testimonials", "Pricing"];

  return (
    <header className="flex items-center justify-between fixed top-10 mx-auto left-0 right-0 z-999 inset-y-0 h-23 bg-[#21140136] backdrop-blur-xs rounded-[9999px] px-13 max-w-334 w-full">
      <img
        src={kateStonePrepLogo}
        alt="The Kate Stone Prep logo"
        className="h-9 object-cover"
      />

      <nav>
        <ul className="flex gap-20">
          {list.map((data, index) => (
            <li
              key={index + 1}
              className="text-white font-geist font-medium leading-6"
            >
              {data}
            </li>
          ))}
        </ul>
      </nav>

      <a className="text-white font-geist font-medium leading-6">Contact us</a>
    </header>
  );
};

export default Header;
