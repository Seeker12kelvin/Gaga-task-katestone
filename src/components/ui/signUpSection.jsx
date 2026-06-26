import signUpSectionPic1 from "../../assets/images/signUpSectionPic1.png";

const SignUpSection = () => {
  return (
    <section
      id="signUp"
      style={{ backgroundImage: `url(${signUpSectionPic1})` }}
      className="scroll-mt-32 max-sm:min-h-115 sm:min-h-190 h-fit bg-cover bg-no-repeat max-[481px]:px-5 max-[1021px]:px-8 p-13 flex items-end"
    >
      <div className="text-white flex flex-col max-[527px]:gap-10 gap-14">
        <h2 className="max-[527px]:text-[44px] max-[605px]:text-[54px] max-[1024px]:text-[64px] lg:text-[88px] font-quattrocento max-[527px]:leading-15 leading-20.5 tracking-[-5%] font-normal max-w-175.75 w-full">
          Find out what your kid is truly capable of.
        </h2>
        <p className="font-geist max-w-108 w-full font-normal leading-6 tracking-[0%]">
          One conversation is all it takes to see if we're the right fit. No
          pressure, no obligation.
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

export default SignUpSection;
