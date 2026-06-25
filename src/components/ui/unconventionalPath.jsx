import unconventionalPic1 from "../../assets/images/unconventionalPic1.png";

const UnconventionalPath = () => {
  const boxContents = [
    {
      id: 1,
      heading: "The checkbox mentality",
      desc: "Good grades. High test scores. Team captain. Community service hours. These credentials are necessary — but they're table stakes, not differentiators. If every applicant has them, they don't help you get selected.",
    },
    {
      id: 2,
      heading: "Unrefined Passion Projects",
      desc: "Most students pursue activities that look good on paper but lack scale, depth, or demonstrable impact. Elite candidates don't just participate in causes — they build initiatives that move communities forward.",
    },
    {
      id: 3,
      heading: "No measurable impact",
      desc: "Admissions readers aren't counting volunteer hours or tracking titles earned. They're asking: what changed because this student showed up? Your application must answer that question with evidence.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#F6F3E7] min-h-[1583px] h-fit py-20 px-13 flex flex-col gap-25"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="border-[#E8E8E8] border p-3 flex items-center gap-1.5 w-fit rounded-4xl">
          <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
          <p className="text-xs font-geist font-medium">
            WHY MOST STUDENTS FALL SHORT
          </p>
        </div>
        <h2 className="text-[64px] max-w-170 font-quattrocento font-normal leading-18.75 tracking-[-4%] ">
          The conventional path makes your child invisible.
        </h2>
        <p className="text-sm text-[#505258] max-w-108 w-full font-geist font-normal leading-5.5">
          Admissions committees at elite schools review thousands of identical
          profiles. Standing out requires a fundamentally different approach.
        </p>
      </div>

      <div
        style={{ backgroundImage: `url(${unconventionalPic1})` }}
        className="min-h-249 h-fit w-full bg-cover bg-no-repeat rounded-[40px] flex flex-col justify-between p-13"
      >
        {boxContents.map((data) => (
          <div
            key={data.id}
            className={`${data.id === 1 || data.id > 2 ? "self-start" : "self-end"} bg-[#21140140] backdrop-blur-[50px] rounded-[40px] p-6 border-[0.5px] border-[#FFFFFF33] w-fit flex flex-col gap-3`}
          >
            <h3 className="text-4xl font-quattrocento font-normal leading-12 tracking-[-4%] text-white">
              {data.heading}
            </h3>

            <p className="text-sm text-white font-geist leading-5.5 tracking-[0%] max-w-124.25 w-full">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnconventionalPath;
