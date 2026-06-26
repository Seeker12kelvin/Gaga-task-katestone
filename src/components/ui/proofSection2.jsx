import { CiPlay1 } from "react-icons/ci";
import proofSection2Pic1 from "../../assets/images/proofSection2Pic1.png";

const ProofSection2 = () => {
  return (
    <section
      id="proof2"
      className="scroll-mt-32 bg-[#F6F3E7] min-h-310.5 h-fit w-full px-13 py-20 flex flex-col justify-between"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="border-[#FFAC1C] border p-3 flex items-center gap-1.5 w-fit rounded-4xl">
          <div className="rounded-[9999px] bg-[#FFAC1C] size-1.5"></div>
          <p className="text-xs font-geist font-medium">
            REAL STUDENT PROFILES
          </p>
        </div>
        <h2 className="max-[416px]:text-4xl max-[486px]:text-[44px] max-[557px]:text-[54px] text-[64px] max-w-201 w-full font-quattrocento font-normal max-[416px]:leading-12 max-[486px]:leading-15 leading-18.75 tracking-[-4%] ">
          Hear Ava's story of how she became a marketing expert at 16
        </h2>
      </div>

      <div
        style={{ backgroundImage: `url(${proofSection2Pic1})` }}
        className="relative w-full h-190 rounded-[40px] bg-cover bg-no-repeat flex items-end"
      >
        <div className="bg-[#0000004D] h-full w-full rounded-[40px] flex items-end py-11 px-11">
          <div className="flex items-center w-full justify-between">
            <div className="flex size-17 justify-center items-center bg-[#21140140] backdrop-blur-xs rounded-full border-[0.5px] border-[#FFFFFF33] text-white">
              <CiPlay1 size={24} />
            </div>

            <div className="text-white bg-[#21140140] backdrop-blur-[50px] rounded-[40px] p-6 border-[0.5px] border-[#FFFFFF33] w-fit">
              <p className="max-w-110.25 w-full text-sm text-white font-geist leading-5.5 tracking-[0%]">
                When Ava came to us, she had a lot of ground to cover to become
                a competitive business school candidate. But she is a great
                example of someone who showed up, made the most of our program,
                and benefited from the results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection2;
