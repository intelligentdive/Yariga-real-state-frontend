import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="h-screen w-screen pt-[28px] pl-[25px]">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
