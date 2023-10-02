import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="min-w-[300px] bg-white border-r">
      <div className="flex flex-col gap-6 px-5 py-7">
        <Link href="/">Dashboard</Link>
        <Link href="/property">Property</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/profile">My Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
