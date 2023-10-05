import BarChart from "@/components/dashboard/BarChart";
import Charts from "@/components/dashboard/BarChart";
import CustomerGraph from "@/components/dashboard/CustomerGraph";
import LatestSales from "@/components/dashboard/LatestSales";
import PropertyTab from "@/components/dashboard/PropertyTab";
import TopAgent from "@/components/dashboard/TopAgent";
import TotalRevenue from "@/components/dashboard/TotalRevenue";
import VerticalPercentage from "@/components/dashboard/VerticalPercentage";
import { BiUpArrowAlt } from "react-icons/bi";

const DashboardPage = () => {
  const percentage = 66;
  return (
    <>
      <h1 className="text-heading dark:text-darkHeading text-[25px] font-bold">
        Dashboard
      </h1>
      <TotalRevenue />
      {/* chart and progress bar */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-5 mt-5">
        <div className="md:col-span-7 bg-white dark:bg-darkWhite p-5 rounded-xl">
          <div>
            <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
              Total Revenue
            </h6>
            <div className="flex flex-wrap items-center justify-between my-4 gap-[8px]">
              <h1 className="text-heading dark:text-darkHeading text-[28px] font-bold">
                $236,535
              </h1>
              <div className="flex items-center gap-[14px]">
                <span className="bg-main w-5 flex items-center justify-center h-5 rounded-full">
                  <BiUpArrowAlt className=" text-white text-xl" />
                </span>
                <div>
                  <h4 className="text-[15px] font-medium text-main">0.8%</h4>
                  <p className="text-text text-xs font-normal">
                    Than last month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <BarChart />
          </div>
        </div>
        <div className="md:col-span-4 bg-white dark:bg-darkWhite p-5 rounded-xl">
          <h2 className="text-[18px] font-semibold text-heading dark:text-darkHeading">
            Property Referrals
          </h2>
          <VerticalPercentage
            progress={66}
            text={"Social Media"}
            bg="#6C5DD3"
          />
          <VerticalPercentage
            progress={40}
            text={"Marketplaces"}
            bg="#7FBA7A"
          />
          <VerticalPercentage progress={50} text={"Websites"} bg="#FFCE73" />
          <VerticalPercentage progress={80} text={"Digital ads"} bg="#FFA2C0" />
          <VerticalPercentage progress={15} text={"Others"} bg="#F45252" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
        {/* top agent */}
        <div className="md:col-span-4 bg-white dark:bg-darkWhite p-5 rounded-xl">
          <TopAgent />
        </div>
        {/* customer graph*/}
        <div className="md:col-span-3 bg-white dark:bg-darkWhite p-5 rounded-xl">
          <CustomerGraph />
        </div>
        {/* latest sales */}
        <div className="md:col-span-5 bg-white dark:bg-darkWhite p-5 rounded-xl">
          <LatestSales />
        </div>
      </div>

      {/* property card */}
      <div className="mt-[24px] mb-[20px] bg-white dark:bg-darkWhite p-[20px] rounded-[15px]">
        <div className="flex items-center justify-between flex-wrap gap-[20px]">
          <h2 className="text-heading dark:text-darkHeading text-lg font-semibold">
            Property List
          </h2>
          <>
            <PropertyTab />
          </>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
