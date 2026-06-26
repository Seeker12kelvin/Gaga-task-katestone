import aboutKatePic1 from "../../assets/images/aboutKatePic1.png";

const AboutKate = () => {
  return (
    <section
      id="about"
      className="max-[732px]:h-fit max-[1280px]:h-200 h-full xl:h-287 w-full flex max-[732px]:flex-col justify-between"
    >
      <div className="bg-[#FFAC1C] h-full max-[732px]:w-full max-[940px]:w-1/2 w-full max-[1021px]:px-8 px-13 py-30 flex flex-col max-[940px]:gap-10 justify-between">
        <div className="w-full flex flex-col gap-5">
          <div className="border-[#2F574D] border py-2 px-3 flex items-center gap-1.5 w-fit rounded-4xl">
            <div className="rounded-[9999px] bg-[#2F574D] size-1.5"></div>
            <p className="text-xs text-[#2F574D] font-geist font-medium">
              MEET KATE STONE
            </p>
          </div>
          <h2 className="max-[527px]:text-[44px] max-[981px]:text-[44px] max-[1117px]:text-[50px] min-[1117px]:text-[64px] text-[#211401] max-w-110 font-quattrocento font-normal max-[1117px]:leading-15 leading-18.75 tracking-[-4%] ">
            The most authentic voice in college admissions
          </h2>
          <p className="text-sm text-[#211401] max-w-md w-full font-geist font-normal leading-6">
            Kate Stone has spent 15 years helping thousands of students gain
            admission to the country's most competitive universities. She has a
            rare ability to help students discover and articulate their own
            stories — work that extends well beyond college applications.
          </p>
          <p className="text-sm text-[#211401] max-w-md w-full font-geist font-normal leading-6">
            She got her start working with the most competitive applicants in
            the U.S. and has since opened those same strategies to students at
            every level. Her team brings decades of combined experience coaching
            students to perform at elite levels.
          </p>
        </div>

        <button className="text-[#211401] border-[#211401] border py-3.5 px-6 rounded-[9999px] font-geist w-fit">
          Learn more about Kate
        </button>
      </div>
      <img
        src={aboutKatePic1}
        alt="A picture of Kate Stone"
        className="min-[940px]:max-w-205.75 max-[732px]:w-full max-[940px]:w-1/2 h-full w-full object-cover"
      />
    </section>
  );
};

export default AboutKate;
