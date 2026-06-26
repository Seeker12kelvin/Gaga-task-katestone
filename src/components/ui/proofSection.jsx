import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import avatars from "../../assets/images/proofAvatars.png";
import backgrounPic from "../../assets/images/proofBackgroundImage.png";

const ProofSection = () => {
  const lists = [
    "New York University",
    "Emory University",
    "Brown University",
    "University of Chicago",
    "Massachusetts Institute of Technology",
  ];

  const marqueeRef = useRef(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <section className="bg-[#FFAC1C] py-8 lg:py-12 px-5 lg:px-12">
      <div
        style={{ backgroundImage: `url(${backgrounPic})` }}
        className="w-full max-w-7xl mx-auto rounded-4xl lg:rounded-[40px] bg-cover bg-center overflow-hidden min-h-[500px] md:min-h-[700px] lg:min-h-[900px] p-6 md:p-10 lg:p-13 flex flex-col justify-between"
      >
        <div className="inline-flex items-center gap-3 bg-[#21140136] backdrop-blur-xl rounded-full px-5 py-4 w-fit">
          <img
            src={avatars}
            alt="Pictures of placed students"
            className="h-8 md:h-10 object-contain"
          />

          <p className="font-geist text-sm md:text-base font-semibold text-white whitespace-nowrap">
            5K Students placed
          </p>
        </div>

        <div className="overflow-hidden w-full">
          <div ref={marqueeRef} className="flex w-max">
            {[...lists, ...lists].map((item, index) => (
              <div key={index} className="flex items-center shrink-0">
                <h2 className="text-white text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-quattrocento whitespace-nowrap">
                  {item}
                </h2>

                <span className="mx-8 md:mx-12 lg:mx-16 text-white text-2xl md:text-4xl">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
