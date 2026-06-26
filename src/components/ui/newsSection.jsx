import newsSectionPic1 from "../../assets/images/newsSectionPic1.png";
import newsSectionPic2 from "../../assets/images/newsSectionPic2.png";
import newsSectionPic3 from "../../assets/images/newsSectionPic3.png";

const NewsSection = () => {
  const boxContent = [
    {
      id: 1,
      img: newsSectionPic1,
      bubs: "MAY 20, 2026  .  HANGOUT",
      header: "APRIL 2, 2026  .  STRATEGY",
    },
    {
      id: 2,
      img: newsSectionPic2,
      bubs: "MARCH 20, 2026  .  IMPACT",
      header: "Our annual idea building picnic",
    },
    {
      id: 3,
      img: newsSectionPic3,
      bubs: "You don’t need 20 activities anymore",
      header: "Passion projects are now taking over",
    },
  ];

  return (
    <section
      id="news"
      className="scroll-mt-32 max-[770px]:gap-20 min-[770px]:min-h-278.25 h-fit max-[481px]:px-5 max-[1021px]:px-8 px-13 py-20 flex flex-col min-[770px]:justify-between"
    >
      <div className="flex flex-wrap gap-5 justify-between items-end w-full h-fit">
        <div className="w-fit flex flex-col gap-5">
          <div className="border-[#E8E8E8] border py-1.5 px-3 flex items-center gap-1.5 w-fit rounded-4xl">
            <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
            <p className="text-xs font-geist font-medium">NEWS</p>
          </div>
          <h2 className="max-[527px]:text-[44px] max-[605px]:text-[54px] text-[64px] max-[770px]:max-w-108 max-w-140 font-quattrocento font-normal max-[527px]:leading-15 leading-18.75 tracking-[-4%] ">
            Latest News and Upcoming Events
          </h2>
          <p className="text-sm text-[#505258] max-w-108 w-full font-geist font-normal leading-5.5">
            A focused framework designed to turn strong applicants into standout
            admits.
          </p>
        </div>
        <a className="max-[770px]:text-sm max-[770px]:px-3 max-[770px]:py-2.5 py-3.5 px-6 rounded-[9999px] border border-[#505258] font-geist font-semibold text-[#211401]">
          See all news
        </a>
      </div>

      <div className="max-w-full gap-5 flex w-full justify-between items-center overflow-scroll no-scrollbar">
        {boxContent.map((data) => (
          <img
            src={data.img}
            key={data.id}
            className="min-w-90 max-w-108 w-full object-cover object-no-repeat max-sm:max-h-108 sm:min-h-144 h-fit rounded-4xl"
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
