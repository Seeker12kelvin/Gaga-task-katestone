import heroSectionBackground from "../../assets/images/heroBackgroundImage.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroSectionBackground})` }}
      className="h-250 w-full bg-cover bg-center bg-no-repeat flex items-end px-13 pb-50"
    >
      <div className="flex flex-col gap-14">
        <h1 className="text-[88px] text-white max-w-180 w-full leading-20.5 tracking-[-5%] font-quattrocento font-normal">
          Prepared for College, Career, and Life
        </h1>

        <p className="text-[#FFFDFA] max-w-108 w-full font-geist font-normal leading-6">
          We help students build strong academic profiles through guided
          mentorship, meaningful experiences, and a clear path to competitive
          admissions.
        </p>

        <div className="flex gap-5">
          <a className="border-[#FFFDFA] border rounded-[9999px] w-fit text-[#FFFDFA] font-geist font-semibold leading-6 py-3.5 px-6">
            View full services
          </a>

          <a className="bg-[#FFAC1C] rounded-[9999px] w-fit text-[#211401] font-geist font-semibold leading-6 py-3.5 px-6">
            Schedule a consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
