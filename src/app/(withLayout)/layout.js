import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-screen pt-[28px] pl-[25px]">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
