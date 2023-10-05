import { BiDotsVerticalRounded } from "react-icons/bi";
import CustomerChart from "./CustomerChart";

const CustomerGraph = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-heading dark:text-darkHeading">
          Customer
        </h2>
        <BiDotsVerticalRounded className="text-text dark:text-darkText text-xl cursor-pointer" />
      </div>
      {/* graph part */}
      <div className="mt-5">
        {/* 1st graph */}
        <div className="mt-3 border-b py-7">
          <h3 className="text-text dark:text-darkText text-xs font-medium mb-4">
            Total Customers
          </h3>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-heading dark:text-darkHeading text-[26px] font-semibold">
                507k
              </h1>
              <h6 className="text-xs text-[#2ED480] font-semibold">21.77%</h6>
            </div>
            <div>
              <CustomerChart />
            </div>
          </div>
        </div>
        {/* 2nd graph */}
        <div className="mt-3 py-7">
          <h3 className="text-text dark:text-darkText text-xs font-medium mb-4">
            New customer this month
          </h3>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-heading dark:text-darkHeading text-[26px] font-semibold">
                12k
              </h1>
              <h6 className="text-xs text-[#2ED480] font-semibold">21.77%</h6>
            </div>
            <div>
              <CustomerChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGraph;
