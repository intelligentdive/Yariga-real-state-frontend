import Image from "next/image";

import AgentProfile from "@/components/agent/AgentProfile";
import AgentInputInformation from "@/components/agent/AgentInputInformation";
import AgentDetailsContent from "@/components/agent/AgentDetailsContent";

const AgentDetailsPage = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold md:text-[26px] md:font-bold text-heading dark:text-darkHeading md:px-[0px] px-[10px]">
        Agent Details
      </h2>

      {/* main content */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-[30px] mt-5 px-[20px] md:px-0">
        <div className="md:col-span-3 bg-white dark:bg-darkWhite rounded-[15px]">
          <>
            <AgentProfile />
          </>
          <>
            <AgentInputInformation />
          </>
        </div>
        <div className="md:col-span-5 ">
          {/* Agent details */}
          <AgentDetailsContent />
        </div>
      </div>
    </div>
  );
};

export default AgentDetailsPage;
