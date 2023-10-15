import Image from "next/image";
import image1 from "../../assets/review/1.png";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = () => {
  return (
    <div className="p-5 bg-white dark:bg-darkWhite md:rounded-[15px] md:mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px]">
        <div className="lg:col-span-3 ">
          <div className="flex gap-[15px]">
            <div>
              <Image src={image1} alt="" width={70} />
            </div>
            <div>
              <span className="text-main text-sm font-normal">#C01234</span>
              <h2 className="text-base font-medium text-heading dark:text-darkHeading my-1">
                James Sullivan
              </h2>
              <p className="text-text dark:text-darkText text-sm font-normal">
                Join On 25-04-2022
              </p>
              <p className="text-text dark:text-darkText text-sm font-normal">
                12:42 PM
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 ">
          <div>
            <p className="text-text dark:text-darkText text-sm font-normal">
              Friendly service <br />
              Josh, Lunar and everyone at Just Property in Hastings deserved a
              big Thank You from us for moving us from Jakarta to Medan during
              the lockdown.
            </p>

            <div className="mt-[15px] flex gap-[10px]">
              <Link
                href="#"
                className="text-main border-main py-[7px] px-[10px] border text-xs font-semibold uppercase rounded-[15px] duration-300 hover:text-white hover:bg-main"
              >
                Excellent
              </Link>
              <Link
                href="#"
                className="text-main border-main py-[7px] px-[10px] border text-xs font-semibold uppercase rounded-[15px] duration-300 hover:text-white hover:bg-main"
              >
                Great
              </Link>
              <Link
                href="#"
                className="text-main border-main py-[7px] px-[10px] border text-xs font-semibold uppercase rounded-[15px] duration-300 hover:text-white hover:bg-main"
              >
                Best Service
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 ">
          <div className="flex items-center gap-[10px]">
            <h2 className="text-heading dark:text-darkHeading text-[22px] font-semibold">
              5.0
            </h2>
            <div className="flex items-center gap-[3px]">
              <AiFillStar className="text-[#F2C94C] text-xl" />
              <AiFillStar className="text-[#F2C94C] text-xl" />
              <AiFillStar className="text-[#F2C94C] text-xl" />
              <AiFillStar className="text-[#F2C94C] text-xl" />
              <AiFillStar className="text-[#F2C94C] text-xl" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-[15px]">
            <button className="py-[8px] px-[16px] rounded-[18px] border bg-transparent border-[#EB5757] text-[#EB5757] text-sm font-normal duration-300 hover:bg-[#EB5757] hover:text-white">
              Reject
            </button>
            <button className="py-[8px] px-[16px] rounded-[18px] border bg-[#2ED480] border-[#2ED480] text-white text-sm font-normal duration-300 hover:bg-transparent hover:text-[#2ED480]">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
