import CircularProgressBar from "@/components/CircularProgressbar";
import TotalRevenue from "@/components/dashboard/TotalRevenue";

const DashboardPage = () => {
  const percentage = 66;
  return (
    <>
      <h1 className="text-heading dark:text-darkHeading text-[25px] font-bold">
        Dashboard
      </h1>
      <TotalRevenue />
    </>
  );
};

export default DashboardPage;
