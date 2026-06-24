import { useGSAP } from "@gsap/react";
import avatars from "../../assets/images/proofAvatars.png";
import backgrounPic from "../../assets/images/proofBackgroundImage.png";
import { useRef } from "react";
import gsap from "gsap";

const ProofSection = () => {
  const lists = [
    "New York University",
    "Emory University",
    "Brown University",
    "Chicago University",
    "Massachusetts Institute of Technology",
  ];

  const listLoopRef = useRef(null);

  useGSAP(() => {
    const width = listLoopRef.current.scrollWidth / 2;

    gsap.to(listLoopRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1000),
      },
    });
  });

  return (
    <section className="bg-[#FFAC1C] h-299.75 px-13 flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(${backgrounPic})` }}
        className="p-13 h-250 w-full rounded-[40px] bg-cover overflow-hidden flex flex-col justify-between"
      >
        <div className="flex gap-3 items-center py-4.5 px-6 max-w-84.75 w-full bg-[#21140136] backdrop-blur-xs rounded-[9999px]">
          <img
            src={avatars}
            alt="Pictures of placed students"
            className="h-8"
          />
          <p className="font-geist leading-6 font-semibold text-white">
            5K Students placed
          </p>
        </div>
        <ul
          ref={listLoopRef}
          className="flex justify-between w-full text-white"
        >
          {lists.map((data, index) => (
            <li
              key={index + 1}
              className="text-2xl font-quattrocento font-normal leading-8.5 tracking-[-1%]"
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProofSection;
