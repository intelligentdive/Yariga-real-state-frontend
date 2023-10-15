import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const ProfileInput = () => {
  return (
    <div className="lg:w-full xl:max-w-[544px] w-full mt-[30px]">
      <div className="">
        <p className="text-text dark:text-darkText text-xs font-normal mb-1">
          Address
        </p>

        <p className="flex gap-[10px] items-center p-[10px] border rounded-md dark:border-[#272B30] border-[#e4e4e4] text-heading dark:text-darkHeading text-sm font-normal">
          <MdLocationOn className="text-heading dark:text-darkHeading" />
          4517 Washington Ave. Manchaster, Kentucky 39495
        </p>
      </div>
      <div className="mt-5 grid md:grid-cols-2 gap-[22px]">
        {/* phone number */}
        <div className="">
          <p className="text-text dark:text-darkText text-xs font-normal mb-1">
            Phone Number
          </p>

          <p className="flex gap-[10px] items-center p-[10px] border rounded-md dark:border-[#272B30] border-[#e4e4e4] text-heading dark:text-darkHeading text-sm font-normal">
            <BsFillTelephoneFill className="text-heading dark:text-darkHeading" />
            +07415142455
          </p>
        </div>
        {/* email   */}
        <div className="">
          <p className="text-text dark:text-darkText text-xs font-normal mb-1">
            Email
          </p>

          <p className="flex gap-[10px] items-center p-[10px] border rounded-md dark:border-[#272B30] border-[#e4e4e4] text-heading dark:text-darkHeading text-sm font-normal">
            <BsFillEnvelopeFill className="text-heading dark:text-darkHeading" />
            noyon@intelligentdive.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInput;
