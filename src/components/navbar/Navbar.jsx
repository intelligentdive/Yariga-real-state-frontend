import Image from "next/image";
import logo from "../../assets/logo.png";
import { BiBell, BiMenuAltLeft, BiSearch } from "react-icons/bi";
import profile from "../../assets/Profile.png";
import ProfileToggleContent from "./ProfileToggleContent";

const Navbar = () => {
  return (
    <div className="bg-white px-[20px] py-[15px] ">
      <div className="lg:flex lg:items-center lg:gap-[50px]">
        {/* logo hidden in mobile device*/}
        <div className="hidden lg:flex items-center gap-3 w-[250px]">
          <Image src={logo} alt="logo" width={35} />
          <h2 className="text-[25px] font-bold text-heading">Yariga</h2>
        </div>

        <div className="flex justify-between items-center w-full">
          {/* show for mobile device */}
          <div className="flex items-center gap-[20px] lg:hidden">
            {/* menubar */}
            <div>
              <BiMenuAltLeft className="text-heading text-2xl font-bold" />
            </div>
            {/* TODO:search bar toggle for mobile device  */}
            <div>
              <BiSearch className="text-text" />
            </div>
          </div>

          {/* search field  hidden in mobile device*/}
          <div className="hidden lg:flex items-center gap-2 w-[405px] p-[10px] rounded-lg bg-[#f4f4f4]">
            <BiSearch className="text-text" />
            <input
              type="text"
              placeholder="Search property, Customer etc"
              className="bg-none w-full outline-none"
            />
          </div>

          <div className="flex items-center gap-5">
            {/* notification */}
            <div className="relative">
              <BiBell className="text-text text-xl" />
              <span className="w-2 h-2 rounded-full bg-[#EB5757] absolute top-[2px] left-[11px]"></span>
            </div>
            {/* profile */}
            <div className="lg:flex lg:items-center lg:gap-[10px]">
              <div className="cursor-pointer">
                <Image src={profile} alt="" width={40} />
              </div>
              <div className="w-[170px] h-[40px] hidden lg:block">
                <h2 className="text-heading text-sm font-semibold">
                  Hawkins Maru
                </h2>
                <p className="text-text text-sm font-normal">Company Manager</p>
              </div>
            </div>
            {/* profile toggle content when user click the profile the it show */}
            <div>
              <ProfileToggleContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;