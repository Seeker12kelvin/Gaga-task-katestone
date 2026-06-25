import signUpSectionPic1 from "../../assets/images/signUpSectionPic1.png";

const SignUpSection = () => {
  return (
    <section
      id="signUp"
      style={{ backgroundImage: `url(${signUpSectionPic1})` }}
      className="min-h-190 h-fit bg-cover bg-no-repeat p-13 flex items-end"
    >
      <div className="text-white flex flex-col gap-14">
        <h2 className="text-[88px] font-quattrocento leading-20.5 tracking-[-5%] font-normal max-w-175.75 w-full">
          Find out what your kid is truly capable of.
        </h2>
        <p className="font-geist max-w-108 w-full font-normal leading-6 tracking-[0%]">
          One conversation is all it takes to see if we're the right fit. No
          pressure, no obligation.
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

export default SignUpSection;
