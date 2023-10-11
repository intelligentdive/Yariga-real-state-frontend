import { BiBed } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const PropertyCard = ({ property }) => {
  const { id, image, name, price, location, beds, size } = property;
  console.log(price, name);
  return (
    <div className="flex w-full overflow-hidden bg-white rounded-lg  dark:bg-darkWhite">
      <div
        className="w-1/2 bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="w-2/3 px-[10px]">
        <p className="bg-[#DADEFA] px-[10px] py-[7px] rounded-[5px] text-main text-xs font-semibold inline-block">
          ${price}
        </p>
        <h2 className="text-heading dark:text-darkHeading text-base font-semibold mt-3">
          {name}
        </h2>
        <p className="flex items-center gap-[5px] text-text dark:text-darkText text-sm font-normal mt-[6px]">
          <CiLocationOn /> <span>{location}</span>
        </p>
        <div className="flex items-center mt-[14px]">
          <div className="w-[83px] flex items-center gap-[5px]">
            <BiBed className="text-text dark:text-darkText" />
            <span className="text-heading dark:text-darkHeading text-xs font-semibold">
              {beds}
            </span>
          </div>
          <div className="w-[83px] flex items-center gap-[5px]">
            <BsPlusLg className="text-text dark:text-darkText" />
            <span className="text-heading dark:text-darkHeading text-xs font-semibold">
              {size}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
