import Image from "next/image";
import logo from "../assets/logo.png";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-white px-[20px] py-[15px]">
      <div className="flex items-center gap-[25px]">
        <div className="hidden lg:flex items-center gap-3 w-[225px]">
          <Image src={logo} alt="logo" width={35} />
          <h2 className="text-[25px] font-bold text-heading">Yariga</h2>
        </div>
        <div>
          <div className="hidden lg:flex items-center gap-2 w-[405px] p-[10px] rounded-lg bg-[#f4f4f4]">
            <BiSearch className="text-text" />
            <input
              type="text"
              placeholder="Search property, Customer etc"
              className="bg-none w-full outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
