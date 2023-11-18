import AddAgentDetails from "@/components/agent/AddAgentDetails";
import AddAgentProfile from "@/components/agent/AddAgentProfile";

const AddAgentPage = () => {
  return (
    <div className="px-[15px] py-[18px] md:px-0 md:py-0">
      <h1 className="text-heading dark:text-darkHeading md:text-[25px] text-[18px] font-bold">
        Add New Agent
      </h1>
      <div className="mt-5 ">
        <AddAgentProfile />
      </div>

      <div className="">
        <AddAgentDetails />
      </div>
    </div>
  );
};

export default AddAgentPage;
