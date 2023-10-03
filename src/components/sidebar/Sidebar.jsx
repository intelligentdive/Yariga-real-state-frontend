import Link from "next/link";
import SidebarMenuItems from "./SidebarMenuItems";

const Sidebar = () => {
  return (
    <div className="min-w-[250px] bg-white dark:bg-darkWhite border-r h-screen border-[#f4f4f4] dark:border-darkBg hidden lg:block py-[25px] px-[16px]">
      <SidebarMenuItems />
    </div>
  );
};

export default Sidebar;
