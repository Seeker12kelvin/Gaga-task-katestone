import footerPic1 from "../../assets/images/footerkateStonePreplogo2.png";

const Footer = () => {
  const lists = [
    {
      id: 1,
      heading: "COMPANY",
      one: "About Kate",
      two: "Events",
      three: "Testimonials",
      four: "Pricing",
      five: "Careers",
    },
    {
      id: 2,
      heading: "SERVICES",
      one: "College Preparation",
      two: "Application strategy",
      three: "Sport recruiting",
      four: "Academic advancement",
      five: "Career coaching",
    },
  ];

  return (
    <footer className="bg-[#FFAC1C] p-5 min-h-143 w-full h-fit">
      <div className="rounded-[40px] p-8 bg-[white] h-full flex flex-col gap-13">
        <div className="flex justify-between">
          <div className="text-black flex flex-col gap-5">
            <img
              src={footerPic1}
              alt="The Kate Stone Prep logo"
              className="h-9 w-48 object-cover"
            />
            <p className="max-w-79.75 text-sm leading-5.5 w-full text-[#211401]">
              We help students build wildly successful lives through community
              impact, demonstrated expertise, and strategic positioning.
            </p>
          </div>

          <div className="bg-[#F6F3E7] min-h-63 h-fit rounded-4xl max-w-108 w-full p-6 flex flex-col justify-between">
            <div className="bg-[#FFFDFA] py-1.75 px-4 rounded-[9999px]">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex justify-between"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="placeholder:text-[#505258] placeholder:text-sm text-sm text-[#505258] outline-none w-full"
                />

                <button
                  type="submit"
                  className="leading-6 font-geist font-semibold bg-[#FFAC1C] py-2 px-4 rounded-[9999px]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-quattrocento leading-8.5 tracking-[-1%]">
                The Weekly Edge
              </h3>
              <p className="text-[#505258] text-sm leading-5.5 font-geist">
                Advice and resources that have helped thousands of students get
                into their top-choice schools. Free, weekly, unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between min-h-41 h-fit">
          {lists.map((data) => (
            <div
              key={data.id}
              className="flex flex-col gap-5 h-full justify-end"
            >
              <h3 className="text-xs font-geist font-semibold leading-4.5">
                {data.heading}
              </h3>

              <ul className="flex flex-col gap-1 h-full">
                {[data.one, data.two, data?.three, data?.four, data?.five].map(
                  (items, index) => (
                    <li key={index} className="text-sm font-geist leading-5.5">
                      {items}
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-5 h-full justify-end">
            <h3 className="text-xs font-geist font-semibold leading-4.5">
              CONNECT
            </h3>

            <ul className="flex flex-col gap-1 h-full">
              <li className="text-sm font-geist leading-5.5">Instagram</li>
              <li className="text-sm font-geist leading-5.5">(203) 714-4435</li>
              <li className="text-sm font-geist leading-5.5">Book a call</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 h-full justify-end">
            <h3 className="text-xs font-geist font-semibold leading-4.5">
              LEGAL
            </h3>

            <ul className="flex flex-col gap-1 h-full">
              <li className="text-sm font-geist leading-5.5">
                Terms of service
              </li>
              <li className="text-sm font-geist leading-5.5">Privacy policy</li>
            </ul>
          </div>

          <p className="text-xs font-geist font-medium leading-4.5">
            2026 KATE STONE PREP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
