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
      id: 1,
      img: newsSectionPic2,
      bubs: "MARCH 20, 2026  .  IMPACT",
      header: "Our annual idea building picnic",
    },
    {
      id: 1,
      img: newsSectionPic3,
      bubs: "You don’t need 20 activities anymore",
      header: "Passion projects are now taking over",
    },
  ];

  return (
    <section
      id="news"
      className="min-h-278.25 h-fit px-13 py-20 flex flex-col justify-between"
    >
      <div className="flex justify-between items-end w-full h-fit">
        <div className="w-fit flex flex-col gap-5">
          <div className="border-[#E8E8E8] border py-1.5 px-3 flex items-center gap-1.5 w-fit rounded-4xl">
            <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
            <p className="text-xs font-geist font-medium">NEWS</p>
          </div>
          <h2 className="text-[64px] max-w-140 font-quattrocento font-normal leading-18.75 tracking-[-4%] ">
            Latest News and Upcoming Events
          </h2>
          <p className="text-sm text-[#505258] max-w-108 w-full font-geist font-normal leading-5.5">
            A focused framework designed to turn strong applicants into standout
            admits.
          </p>
        </div>
        <a className="py-3.5 px-6 rounded-[9999px] border border-[#505258] font-geist font-semibold text-[#211401]">
          See all news
        </a>
      </div>

      <div className="flex justify-between items-center">
        {boxContent.map((data) => (
          <div
            style={{ backgroundImage: `url(${data.img})` }}
            key={data.id}
            className="max-w-108 w-full bg-cover bg-no-repeat min-h-144 h-fit"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
