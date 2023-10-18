import AllAgent from "@/components/agent/AllAgent";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

const AgentPage = async () => {
  const res = await fetch("http://localhost:5000/all-agent");
  const agents = await res.json();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-heading dark:text-darkHeading md:text-[25px] text-[18px] font-bold">
          Agent List
        </h1>
        <Link href="/agent/add-agent">
          <button className="flex items-center gap-[5px] py-[13px] px-5 bg-main  duration-300 hover:bg-indigo-700 text-white rounded-[10px] text-sm font-medium">
            <AiOutlinePlus className="text-white" /> Add Agent
          </button>
        </Link>
      </div>

      <div className="mt-[20px]">
        {agents?.map((agent) => (
          <AllAgent key={agent?.id} agent={agent}></AllAgent>
        ))}
      </div>
    </div>
  );
};

export default AgentPage;
