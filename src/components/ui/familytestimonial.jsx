import gsap from "gsap";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import familyTestimonialPic1 from "../../assets/images/familyTestimonialPic1.png";
import familyTestimonialPic2 from "../../assets/images/familyTestimonialPic2.png";

const Familytestimonial = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      img: familyTestimonialPic1,
      quote:
        "Dear Kate — I just wanted to send a sincere thank you from the bottom of my heart for helping me get into Stanford.",
      owner: "Tannen H.",
      role: "STUDENT",
      bg: "#FB6B1D",
    },
    {
      id: 2,
      img: familyTestimonialPic2,
      quote:
        "You helped my daughter get into Harvard. She's feeling so much more confident and grounded. I can finally sleep again. Thank you!",
      owner: "Sudha A.",
      role: "PARENT",
      bg: "#2F574D",
    },
  ];

  const slideTo = (index) => {
    gsap.to(sliderRef.current, {
      xPercent: -(index * 100),
      duration: 0.5,
      ease: "power3.out",
    });

    setCurrent(index);
  };

  const nextSlide = () => {
    if (current < testimonials.length - 1) {
      slideTo(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      slideTo(current - 1);
    }
  };

  return (
    <section
      id="family-testimonial"
      className="bg-[#FFFDFA] py-20 lg:py-32 scroll-mt-32 overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="inline-flex items-center gap-2 border border-[#E8E8E8] rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-[#FFAC1C]" />
          <span className="text-xs font-geist font-medium">TESTIMONIALS</span>
        </div>

        <h2 className="mt-6 max-w-3xl text-5xl md:text-6xl font-quattrocento leading-tight">
          Families who trusted the process.
        </h2>

        <p className="mt-5 max-w-xl text-[#505258] font-geist">
          A focused framework designed to turn strong applicants into standout
          admits.
        </p>
      </div>

      {/* Buttons */}
      <div className="max-w-7xl mx-auto flex justify-end gap-4 px-5 lg:px-12 mt-12 mb-10">
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="w-16 h-16 rounded-full bg-[#F6F3E7] flex items-center justify-center disabled:opacity-40 transition"
        >
          <GoArrowLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          disabled={current === testimonials.length - 1}
          className="w-16 h-16 rounded-full bg-[#FFAC1C] text-white flex items-center justify-center disabled:opacity-40 transition"
        >
          <GoArrowRight size={24} />
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div ref={sliderRef} className="flex">
          {testimonials.map((item) => (
            <div key={item.id} className="min-w-full px-5 lg:px-12">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.owner}
                  className="w-full lg:w-[42%] h-[350px] md:h-[450px] lg:h-[580px] rounded-[40px] object-cover"
                />

                {/* Text Card */}
                <div
                  style={{ backgroundColor: item.bg }}
                  className="flex-1 rounded-[40px] p-8 lg:p-12 text-white flex flex-col justify-between"
                >
                  <span className="text-6xl lg:text-[88px] leading-none font-quattrocento">
                    “
                  </span>

                  <h3 className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-quattrocento my-8">
                    {item.quote}
                  </h3>

                  <div>
                    <p className="font-geist font-semibold">{item.owner}</p>

                    <p className="text-sm mt-2 tracking-wider">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Familytestimonial;
