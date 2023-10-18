import CircularProgressBar from "../CircularProgressbar";

const AgentStatus = () => {
  return (
    <div className="mt-5">
      <h2 className="text-lg font-medium text-heading dark:text-darkHeading">
        Agent Status
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {/* 1st status */}
        <div className="pt-4 px-[30px] pb-5 bg-white dark:bg-darkWhite rounded-[15px] shadow-2xl text-center border dark:border-[#272B30] border-[#E4E4E4] duration-300 hover:scale-105 hover:shadow-none">
          <p className="text-text dark:text-darkText text-base font-normal mb-[5px]">
            Total Listing
          </p>
          <h2 className="text-[25px] font-bold text-heading dark:text-darkHeading">
            1050
          </h2>
          <div className="flex justify-center mt-5">
            <CircularProgressBar
              value={36}
              pathColor={`#FE6D8E`}
              strokeWidth={12}
            />
          </div>
        </div>
        {/* 2nd properties sold */}
        <div className="pt-4 px-[30px] pb-5 bg-white dark:bg-darkWhite rounded-[15px] shadow-2xl text-center border dark:border-[#272B30] border-[#E4E4E4] duration-300 hover:scale-105 hover:shadow-none">
          <p className="text-text dark:text-darkText text-base font-normal mb-[5px] capitalize">
            properties sold
          </p>
          <h2 className="text-[25px] font-bold text-heading dark:text-darkHeading">
            650
          </h2>
          <div className="flex justify-center mt-5">
            <CircularProgressBar
              value={60}
              pathColor={`#2ED480`}
              strokeWidth={12}
            />
          </div>
        </div>
        {/* 3rd properties rent */}
        <div className="pt-4 px-[30px] pb-5 bg-white dark:bg-darkWhite rounded-[15px] shadow-2xl text-center border dark:border-[#272B30] border-[#E4E4E4] duration-300 hover:scale-105 hover:shadow-none">
          <p className="text-text dark:text-darkText text-base font-normal mb-[5px] capitalize">
            properties rent
          </p>
          <h2 className="text-[25px] font-bold text-heading dark:text-darkHeading">
            400
          </h2>
          <div className="flex justify-center mt-5">
            <CircularProgressBar
              value={56}
              pathColor={`#2F80ED`}
              strokeWidth={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentStatus;
