import Image from "next/image";
import profileCover from "../../../assets/profile-cover.png";
import { AiFillCamera } from "react-icons/ai";
import profile from "../../../assets/allAgent/david-smith.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const ProfilePage = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold md:text-[26px] md:font-bold text-heading dark:text-darkHeading md:px-[0px] px-[10px]">
        My Profile
      </h2>
      <div className="my-5 bg-white dark:bg-darkWhite lg:p-5 rounded-[15px]">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4  ">
            <div className=" w-full h-[160px] lg:h-[320px] relative">
              <Image
                src={profileCover}
                alt="profile cover"
                fill
                className="object-cover rounded-xl"
              />
              {/* change photo */}
              <div className="absolute top-[18px] lg:top-auto  lg:bottom-[18px] left-5   block">
                <div className="bg-white dark:bg-darkWhite rounded-lg flex items-center gap-[10px] py-3 px-4">
                  <AiFillCamera />
                  <label
                    htmlFor="dropzoneFile"
                    className="text-sm font-normal "
                  >
                    Change Photo
                  </label>
                  <input id="dropzoneFile" type="file" className="hidden" />
                </div>
              </div>

              {/* profile Image */}
              <div className="absolute lg:left-auto left:bottom-auto lg:top-10 lg:right-[-34px] left-5 bottom-[-34px] w-[78px] h-[78px]  ">
                <Image
                  src={profile}
                  alt=""
                  fill
                  className=" object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 p-[18px] lg:p-0">
            <div className="flex justify-between ">
              <div>
                <h2 className="text-[22px] text-heading dark:text-darkHeading font-medium">
                  Mr. Alvert Flore
                </h2>
                <p className="text-text dark:text-darkText text-base font-normal mt-[6px]">
                  Admin
                </p>
              </div>
              <BiDotsHorizontalRounded className="text-heading dark:text-darkHeading text-xl" />
            </div>

            <div className="lg:w-[544px] w-full mt-[30px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
