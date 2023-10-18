import { BiSolidCheckCircle } from "react-icons/bi";
import AgentAboutDetails from "./AgentAboutDetails";
import AgentStatus from "./AgentStatus";

const AgentDetailsContent = () => {
  return (
    <div className="bg-white dark:bg-darkWhite p-5 rounded-[15px]">
      <div className="border-b dark:border-[#272B30] border-[#E4E4E4]">
        <h2 className="text-lg font-semibold text-heading dark:text-darkHeading mb-4">
          Agent Details
        </h2>
      </div>
      {/* agent details content */}
      <>
        <AgentAboutDetails />
      </>

      {/* Agent status form */}
      <AgentStatus />
    </div>
  );
};

export default AgentDetailsContent;
