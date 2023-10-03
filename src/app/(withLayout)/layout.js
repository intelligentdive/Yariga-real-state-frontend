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
          <div className="w-screen pt-[28px] pl-[25px]">{children}</div>
        </div>
      </ThemeToggleProvider>
    </>
  );
};

export default DashboardLayout;
