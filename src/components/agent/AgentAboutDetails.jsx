import { BiSolidCheckCircle } from "react-icons/bi";

const AgentAboutDetails = () => {
  return (
    <div className="pt-5 pb-5 border-b dark:border-[#272B30] border-[#E4E4E4]">
      <p className="text-base font-medium text-text dark:text-darkText">
        Talent customers tend to earn a basic salary in the range of £15,000 to
        £35,000 per annum. However, talented customers also earn a commission
        for finding their clients work. Typically, agents receive around 10% of
        what the client is paid.
      </p>
      {/* agent information */}
      <div className="mt-[30px]">
        {/* 1st Agency */}
        <div className="grid grid-cols-8 gap-[30px] items-center mb-[10px]">
          <div className="col-span-3 text-text dark:text-darkText text-sm font-normal ">
            <div className="flex items-center justify-between">
              <div className="flex items-center  gap-[15px]">
                <BiSolidCheckCircle className="text-main text-2xl hidden md:block" />
                <p className="text-sm font-medium text-heading dark:text-darkHeading">
                  Agency
                </p>
              </div>
              <span>:</span>
            </div>
          </div>
          <p className="col-span-5 text-text dark:text-darkText text-sm font-medium ">
            All American Real Estate
          </p>
        </div>

        {/* 2nd Agent License */}
        <div className="grid grid-cols-8 gap-[30px] items-center mb-[10px]">
          <div className="col-span-3 text-text dark:text-darkText text-sm font-normal ">
            <div className="flex items-center justify-between">
              <div className="flex items-center  gap-[15px]">
                <BiSolidCheckCircle className="text-main text-2xl hidden md:block " />
                <p className="text-sm font-medium text-heading dark:text-darkHeading">
                  Agent License
                </p>
              </div>
              <span>:</span>
            </div>
          </div>
          <p className="col-span-5 text-text dark:text-darkText text-sm font-medium ">
            3124 9764 9700 234
          </p>
        </div>

        {/* 3rd Tax number */}
        <div className="grid grid-cols-8 gap-[30px] items-center mb-[10px]">
          <div className="col-span-3 text-text dark:text-darkText text-sm font-normal ">
            <div className="flex items-center justify-between">
              <div className="flex items-center  gap-[15px]">
                <BiSolidCheckCircle className="text-main text-2xl hidden md:block" />
                <p className="text-sm font-medium text-heading dark:text-darkHeading">
                  Tax Number
                </p>
              </div>
              <span>:</span>
            </div>
          </div>
          <p className="col-span-5 text-text dark:text-darkText text-sm font-medium ">
            TX 87D0 678H PQ45
          </p>
        </div>

        {/* 4rth Service area */}
        <div className="grid grid-cols-8 gap-[30px] items-center mb-[10px]">
          <div className="col-span-3 text-text dark:text-darkText text-sm font-normal ">
            <div className="flex items-center justify-between">
              <div className="flex items-center  gap-[15px]">
                <BiSolidCheckCircle className="text-main text-2xl hidden md:block" />
                <p className="text-sm font-medium text-heading dark:text-darkHeading">
                  Service area
                </p>
              </div>
              <span>:</span>
            </div>
          </div>
          <p className="col-span-5 text-text dark:text-darkText text-sm font-medium ">
            Chicago, Los Angeles, New York, Miami beach
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentAboutDetails;
