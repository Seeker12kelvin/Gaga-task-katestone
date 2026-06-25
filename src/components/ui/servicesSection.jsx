import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import servicesPic1 from "../../assets/images/servicesPic1.png";
import servicesPic2 from "../../assets/images/servicesPic2.png";
import servicesPic3 from "../../assets/images/servicesPic3.png";
import servicesPic4 from "../../assets/images/servicesPic4.png";
import servicesPic5 from "../../assets/images/servicesPic5.png";
const IMAGE_URLS = [
  servicesPic1,
  servicesPic2,
  servicesPic3,
  servicesPic4,
  servicesPic5,
];

const ServicesSection = () => {
  const blockLinks = [
    {
      id: 1,
      img: servicesPic1,
      grade: "GRADE 6 - 11",
      header: "College Prep Program",
      desc: "We develop your student into a recognized expert in 2–3 areas of genuine interest, building a portfolio of evidence that reads as authentic, not manufactured.",
    },
    {
      id: 2,
      img: servicesPic2,
      grade: "GRADE 11 - 12",
      header: "Application Strategy",
      desc: "The final stage. We teach your student how to pitch their unique narrative through compelling essays and a coherent, focused application package.",
    },
    {
      id: 3,
      img: servicesPic3,
    },
    {
      id: 4,
      img: servicesPic4,
      grade: "STUDENT ATHLETES",
      header: "Sports Recruiting Program",
      desc: "We guide student-athletes through exposure to college-level opportunities across D1, D2, and D3 programs — from positioning to commitment.",
    },
  ];

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve; // Triggers when the image binary is fully cached
        img.onerror = reject;
      });
    };

    // Wait for every single image promise to resolve
    Promise.all(IMAGE_URLS.map(loadImage))
      .then(() => setAssetsLoaded(true))
      .catch((err) => console.error("Failed to load assets", err));
  }, []);

  if (!assetsLoaded) {
    return <div className="splash-screen">Downloading visual assets...</div>;
  }

  return (
    <section
      id="services"
      className="min-h-[2444px] h-fit flex flex-col justify-end"
    >
      <div className="flex flex-col gap-25">
        <div className="w-full px-13 flex flex-col gap-5">
          <div className="border-[#E8E8E8] border p-3 flex items-center gap-1.5 w-fit rounded-4xl">
            <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
            <p className="text-xs font-geist font-medium">OUR SERVICES</p>
          </div>
          <h2 className="text-[64px] max-w-180 font-quattrocento font-normal leading-18.75 tracking-[-4%]">
            Programs designed to move the needle, not check boxes.
          </h2>
          <p className="text-sm text-[#505258] max-w-108 w-full font-geist font-normal leading-5.5">
            Every engagement is built around filling the skill gaps your
            student's education hasn't addressed yet.
          </p>
        </div>

        <div className="flex flex-wrap max-w-screen w-full border min-h-300 h-full">
          {blockLinks.map((data) => (
            <div
              key={data.id}
              style={{ backgroundImage: `url(${data.img})` }}
              className={`max-[882px]:w-full min-[882px]:w-1/2 min-w-110 h-150 bg-cover bg-no-repeat pt-7.5 pb-8 px-10 flex flex-col justify-between border-[white] border-[0.5px] ${data.id === 1 || data.id === 3 ? "min-[882px]:border-l-0 max-[882px]:border-b" : data.id === 2 || data.id === 4 ? "min-[882px]:border-r-0 max-[882px]:border-b" : ""}`}
            >
              {data.grade && (
                <div className="bg-[#21140136] backdrop-blur-xs rounded-[9999px] w-fit py-1.25 px-4 border-[0.5px] border-[#FFFFFF33]">
                  <p className="font-geist text-sm font-medium leading-5.5 text-white">
                    {data.grade}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5.75 h-fit">
                  <h3 className="text-4xl text-white font-quattrocento font-normal leading-12 tracking-[-4%]">
                    {data.header}
                  </h3>

                  <p className="leading-5.5 text-sm text-white font-geist font-normal max-w-107 w-full">
                    {data.desc}
                  </p>
                </div>

                {data.grade && (
                  <div className="-mt-5 flex p-5.5 justify-center items-center bg-[#21140140] backdrop-blur-xs rounded-full border-[0.5px] border-[#FFFFFF33] text-white">
                    <GoArrowRight size={24} />
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="w-full flex">
            <div className="bg-[#2F574D] max-w-121 w-full h-190 py-25 px-13 flex flex-col justify-between">
              <h3 className="font-quattrocento text-[64px] font-normal text-white leading-18.75 tracking-[-4%] max-w-93 w-full">
                "Great applicants are developed, not born."
              </h3>

              <button className="py-3.5 px-6 bg-[#FFAC1C] rounded-[9999px] text-[#211401] leading-6 font-geist w-fit">
                Book a free call
              </button>
            </div>

            <div
              style={{ backgroundImage: `url(${servicesPic5})` }}
              className={`w-full min-w-100 h-full bg-cover bg-no-repeat pt-7.5 pb-8 px-10 flex flex-col justify-between`}
            >
              {/* <div className="bg-[#21140136] backdrop-blur-xs rounded-[9999px] w-fit py-1.25 px-4 border-[0.5px] border-[#FFFFFF33]">
                <p className="font-geist text-sm font-medium leading-5.5 text-white">
                  EARLY CAREER
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5.75 h-fit">
                  <h3 className="text-4xl text-white font-quattrocento font-normal leading-12 tracking-[-4%]">
                    Job & Career coaching
                  </h3>

                  <p className="leading-5.5 text-sm text-white font-geist font-normal max-w-107 w-full">
                    Don't wait until graduation. Build the professional skills,
                    network, and positioning strategy that lead to competitive
                    job offers before your peers even start applying.
                  </p>
                </div>

                <div className="-mt-5 flex size-17 justify-center items-center bg-[#21140140] backdrop-blur-xs rounded-full border-[0.5px] border-[#FFFFFF33] text-white">
                  <GoArrowRight size={24} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
