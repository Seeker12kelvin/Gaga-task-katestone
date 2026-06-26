import heroSectionBackground from "../../assets/images/heroBackgroundImage.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroSectionBackground})` }}
      className="scroll-mt-32 max-[412px]:h-210 max-[467px]:h-200 max-[540px]:h-200 max-[800px]:h-225 h-230 w-full bg-cover bg-center bg-no-repeat flex items-end max-[800px]:px-6.5 px-13 pb-50"
    >
      <div className="flex flex-col max-[540px]:gap-5 max-[767px]:gap-10 gap-14">
        <h1 className="max-[467px]:text-[45px] max-[540px]:text-[55px] max-[625px]:text-[65px] max-[767px]:text-[75px] text-[88px] text-white max-w-180 w-full max-[467px]:leading-15.5 leading-20.5 tracking-[-5%] font-quattrocento font-normal">
          Prepared for College, Career, and Life
        </h1>

        <p className="text-[#FFFDFA] max-w-108 w-full font-geist font-normal leading-6">
          We help students build strong academic profiles through guided
          mentorship, meaningful experiences, and a clear path to competitive
          admissions.
        </p>

        <div className="flex max-[448px]:flex-col max-[448px]:items-center gap-5">
          <a className="max-[540px]:text-sm border-[#FFFDFA] border rounded-[9999px] w-fit text-[#FFFDFA] font-geist font-semibold leading-6 py-3.5 px-6">
            View full services
          </a>

          <a className="max-[540px]:text-sm bg-[#FFAC1C] rounded-[9999px] w-fit text-[#211401] font-geist font-semibold leading-6 py-3.5 px-6">
            Schedule a consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
