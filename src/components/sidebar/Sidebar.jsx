import Link from "next/link";
import SidebarMenuItems from "./SidebarMenuItems";

const Sidebar = () => {
  return (
    <div className="min-w-[250px] bg-white border-r border-[#f4f4f4] hidden lg:block pt-[25px]">
      <SidebarMenuItems />
    </div>
  );
};

export default Sidebar;
