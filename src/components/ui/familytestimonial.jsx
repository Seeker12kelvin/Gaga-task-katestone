import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import familyTestimonialPic1 from "../../assets/images/familyTestimonialPic1.png";
import familyTestimonialPic2 from "../../assets/images/familyTestimonialPic2.png";
import gsap from "gsap";
import { useRef, useState } from "react";

const Familytestimonial = () => {
  const [increment, setIncrement] = useState(1);
  const boxRef = useRef(null);
  const blocks = [
    {
      id: 1,
      img: familyTestimonialPic1,
      quote:
        "“Dear Kate — I just wanted to send a sincere thank you from the bottom of my heart for helping me get into Stanford.”",
      owner: "Tannen H.",
      role: "STUDENT",
      bg: "#FB6B1D",
    },
    {
      id: 2,
      img: familyTestimonialPic2,
      quote:
        "“You helped my daughter get into Harvard. She's feeling so much more confident and grounded. I can finally sleep again. Thank you!”",
      owner: "Sudha A.",
      role: "PARENT",
      bg: "#2F574D",
    },
  ];

  const handleNextAnim = () => {
    if (increment >= blocks.length - 1) return;

    gsap.to(boxRef.current, {
      x: (increment + 1) * -997,
      duration: 0.3,
    });

    setIncrement((prev) => prev + 1);
  };

  const handlePrevAnim = () => {
    if (increment === 0) return;

    gsap.to(boxRef.current, {
      x: (increment - 1) * -997,
      duration: 0.3,
    });

    setIncrement((prev) => prev - 1);
  };

  return (
    <section
      id="family-testimonial"
      className="min-h-310.5 h-fit w-full py-20 flex flex-col justify-between bg-[#FFFDFA]"
    >
      <div className="w-full flex flex-col gap-5 px-13">
        <div className="border-[#E8E8E8] border p-3 flex items-center gap-1.5 w-fit rounded-4xl">
          <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
          <p className="text-xs font-geist font-medium">TESTIMONIALS</p>
        </div>
        <h2 className="text-[64px] max-w-140 font-quattrocento font-normal leading-18.75 tracking-[-4%] ">
          Families who trusted the process.
        </h2>
        <p className="text-sm text-[#505258] max-w-108 w-full font-geist font-normal leading-5.5">
          A focused framework designed to turn strong applicants into standout
          admits.
        </p>
      </div>

      <div className="w-full h-fit flex flex-col gap-10">
        <div className="self-end flex gap-5 items-center px-13">
          <button
            onClick={() => handlePrevAnim()}
            className="flex size-17 justify-center items-center bg-[#F6F3E7] rounded-full text-[#505258]"
          >
            <GoArrowLeft size={24} />
          </button>
          <button
            onClick={() => handleNextAnim()}
            className="flex size-17 justify-center items-center bg-[#FFAC1C] rounded-full text-white"
          >
            <GoArrowRight size={24} />
          </button>
        </div>

        <div className="w-full no-scrollbar">
          <div ref={boxRef} className="flex gap-5 w-max">
            {blocks.map((data) => (
              <div
                key={data.id}
                className={`max-w-249.25 w-full max-h-144 h-full flex justify-between transition-transform duration-300 ${increment === data.id ? "scale-100" : "scale-100"}`}
              >
                <img
                  src={data.img}
                  alt={`A picture of on of our ${data.role}`}
                  className="max-w-113 w-full object-cover rounded-[40px]"
                />

                <div
                  style={{ background: data.bg }}
                  className="max-w-136.25 w-full min-h-144 rounded-[40px] flex flex-col justify-between p-13 text-white"
                >
                  <p className="font-quattrocento text-[88px] tracking-[-5%] leading-20.5 font-normal">
                    “
                  </p>

                  <h3 className="text-2xl font-quattrocento font-normal leading-8.5 tracking-[-1%]">
                    {data.quote}
                  </h3>

                  <div className="fkex flex-col gap-3">
                    <p className="font-geist font-medium leading-6 tracking-[0%]">
                      {data.owner}
                    </p>
                    <p className="text-xs font-geist font-medium leading-4.5 tracking-[0%]">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Familytestimonial;
