import Image from "next/image";
import banner from "../../assets/agent-details-banner.png";
import profile from "../../assets/allAgent/Karen-Eilla.png";
import AgentInputInformation from "./AgentInputInformation";

const AgentProfile = () => {
  return (
    <>
      <div className="w-full h-[140px] relative">
        <Image
          src={banner}
          alt=""
          fill
          className="object-cover rounded-[15px]"
        />
      </div>
      <div className="px-[17px] flex gap-4">
        <div className="relative w-[100px] h-[100px] top-[-50px]">
          <Image
            src={profile}
            alt=""
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-[10px]">
          <h2 className="text-heading dark:text-darkHeading text-base font-semibold">
            Hussain Ahmed
          </h2>
          <p className="text-text dark:text-darkText text-sm font-normal mt-[6px]">
            Agent
          </p>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
