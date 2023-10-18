import Image from "next/image";
import agentBanner from "../../assets/agnet-banner.png";
import profile from "../../assets/allAgent/Karen-Eilla.png";
const AddAgentProfile = () => {
  return (
    <div>
      {" "}
      {/* image */}
      <div className="w-full h-[250px] relative">
        <Image
          src={agentBanner}
          alt=""
          fill
          className="object-cover rounded-[15px]"
        />
      </div>
      <div className="px-[17px] flex gap-4 justify-between">
        <div className="relative w-[100px] h-[100px] top-[-50px] ">
          <Image
            src={profile}
            alt=""
            fill
            className="rounded-full object-cover border-4"
          />
        </div>
        <div className="mt-[15px]">
          <div className="flex gap-3 items-center">
            <button className="border border-[#e4e4e4] dark:border-[#272B30] rounded-[8px] px-[15px] py-[9px] text-heading dark:text-darkHeading text-sm font-bold hover:bg-[#272b30] bg-transparent duration-300">
              Cancel
            </button>
            <button className="py-[9px] px-[15px] rounded-[8px] bg-main hover:bg-indigo-600 text-white duration-300 text-sm font-bold">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAgentProfile;
