import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import ThemeToggleProvider from "@/lib/ThemeToggleProvider";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <ThemeToggleProvider>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="w-screen  py-[28px] md:px-[25px] ">{children}</div>
        </div>
      </ThemeToggleProvider>
    </>
  );
};

export default DashboardLayout;
