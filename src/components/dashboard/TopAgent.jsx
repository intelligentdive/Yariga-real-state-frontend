import Link from "next/link";
import { BiDotsVerticalRounded } from "react-icons/bi";
import agent1 from "../../assets/agent/1.png";
import agent2 from "../../assets/agent/2.png";
import agent3 from "../../assets/agent/3.png";
import agent4 from "../../assets/agent/4.png";
import Image from "next/image";

const TopAgent = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-heading dark:text-darkHeading">
          Top Agent
        </h2>
        <Link
          href="#"
          className="py-[10px] shadow px-[15px] bg-[#f7f7f7] dark:bg-darkBg text-text text-sm font-semibold rounded-md cursor-pointer duration-300 hover:bg-main hover:text-white dark:hover:bg-main"
        >
          view all
        </Link>
      </div>

      {/* agent list  */}
      <div className="mt-[20px]">
        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={agent1} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Benny Chagur
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                Top Agent
              </span>
            </div>
          </div>
          <BiDotsVerticalRounded className="text-text text-xl cursor-pointer" />
        </div>

        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={agent2} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Chynita Heree
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                Top Agent
              </span>
            </div>
          </div>
          <BiDotsVerticalRounded className="text-text text-xl cursor-pointer" />
        </div>

        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={agent3} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                David Yers
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                Top Agent
              </span>
            </div>
          </div>
          <BiDotsVerticalRounded className="text-text text-xl cursor-pointer" />
        </div>

        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={agent4} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Hayder Jahid
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                Top Agent
              </span>
            </div>
          </div>
          <BiDotsVerticalRounded className="text-text text-xl cursor-pointer" />
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[10px]">
            <Image src={agent1} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Benny Chagur
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                Top Agent
              </span>
            </div>
          </div>
          <BiDotsVerticalRounded className="text-text text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopAgent;
