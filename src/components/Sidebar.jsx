import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="min-w-[250px] bg-white border-r border-[#f4f4f4]">
      <div className="flex flex-col gap-6 px-5 py-7">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/property">Property</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/profile">My Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
