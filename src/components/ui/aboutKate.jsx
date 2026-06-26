import aboutKatePic1 from "../../assets/images/aboutKatePic1.png";

const AboutKate = () => {
  return (
    <section
      id="about"
      className="min-h-287 h-fit w-full flex flex-wrap justify-between"
    >
      <div className="bg-[#FFAC1C] h-full w-full px-13 py-30 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-5">
          <div className="border-[#2F574D] border py-2 px-3 flex items-center gap-1.5 w-fit rounded-4xl">
            <div className="rounded-[9999px] bg-[#2F574D] size-1.5"></div>
            <p className="text-xs text-[#2F574D] font-geist font-medium">
              MEET KATE STONE
            </p>
          </div>
          <h2 className="text-[64px] text-[#211401] max-w-110 font-quattrocento font-normal leading-18.75 tracking-[-4%] ">
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
        className="max-w-205.75 h-287 w-full object-cover"
      />
    </section>
  );
};

export default AboutKate;
