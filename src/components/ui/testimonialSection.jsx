import testimonialPic1 from "../../assets/images/testimonialPic1.png";
import testimonialPic2 from "../../assets/images/testimonialPic2.png";
import testimonialPic3 from "../../assets/images/testimonialPic3.png";

const TestimonialSection = () => {
  const content = [
    {
      id: 1,
      img: testimonialPic1,
      bubs: "Pillar one",
      header: "Real-World Problem Solving",
      desc: "Our students don't just study the world's challenges — they engage with them. We develop the skills to identify, frame, and address real problems, producing measurable outcomes that stand on their own.",
    },
    {
      id: 2,
      img: testimonialPic2,
      bubs: "Pillar two",
      header: "Stacks of evidence",
      desc: "Academic interest is easy to claim. We help students build a body of proof — through internships, research, original projects, and work experience — that validates their expertise in 2–3 focused areas.",
    },
    {
      id: 3,
      img: testimonialPic3,
      bubs: "Pillar three",
      header: "Mentorship & Strategic Networks",
      desc: "The opportunities that change trajectories rarely come from a job board. We help students build genuine mentorships and advisor relationships that open doors unavailable to the average applicant.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="scroll-mt-32 bg-[#FFFDFA] w-full min-h-[1583px] h-fit py-30 max-xl:px-6 xl:pl-13 flex flex-col gap-25"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="border-[#E8E8E8] border p-3 flex items-center gap-1.5 w-fit rounded-4xl">
          <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
          <p className="text-xs font-geist font-medium">OUR METHODLOGY</p>
        </div>
        <h2 className="max-[416px]:text-4xl max-[486px]:text-[44px] max-[557px]:text-[54px] text-[64px] max-w-180 font-quattrocento font-normal max-[416px]:leading-12 max-[486px]:leading-15 leading-18.75 tracking-[-4%] ">
          Three pillars. One unforgettable candidate.
        </h2>
        <p className="text-sm text-[#505258] max-w-108 w-full font-geist font-normal leading-5.5">
          A focused framework designed to turn strong applicants into standout
          admits.
        </p>
      </div>

      <div className="flex flex-col max-xl:gap-15">
        {content.map((data) => (
          <div
            key={data.id}
            className="flex max-xl:flex-wrap max-xl:gap-5 justify-between items-center border-[#E8E8E8] border-b max-xl:pb-5"
          >
            <div className="flex flex-col max-xl:gap-6 gap-13">
              <div className="border-[#F64921] border-[0.5px] px-3 flex items-center gap-1.5 w-fit h-7 rounded-4xl">
                <div className="rounded-[9999px] bg-[#F64921] size-1.5"></div>
                <p className="text-xs font-geist font-medium text-[#F64921]">
                  {data.bubs}
                </p>
              </div>

              <h3 className="text-[#211401] text-4xl leading-12 tracking-[-4%] font-quattrocento">
                {data.header}
              </h3>

              <p className="text-[#505258] text-sm font-geist leading-5.5 font-normal tracking-[0%] xl:max-w-107 w-full">
                {data.desc}
              </p>
            </div>
            <img
              src={data.img}
              alt={`A picture showcasing ${data.header}`}
              className="max-xl:max-h-108 xl:max-h-257 h-full max-xl:max-w-full max-w-205.75 w-full object-cover max-xl:rounded-3xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
