import Link from "next/link";
import AgentProprtyCard from "./AgentProprtyCard";

const AgentPropertyContent = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-heading dark:text-darkHeading text-lg font-semibold">
          Active Listing
        </h2>
        <Link
          href="#"
          className="py-[8px] px-[10px] border border-[#e4e4e4] dark:border-[#272B30] text-text dark:text-darkText text-sm font-medium rounded-md duration-300 bg-transparent hover:bg-main hover:text-white dark:hover:text-[#ffff]"
        >
          View All
        </Link>
        <></>
      </div>
      <AgentProprtyCard />
    </div>
  );
};

export default AgentPropertyContent;
