import { HiLocationMarker } from "react-icons/hi";

const Card = ({ property }) => {
  const { image, price, location, name } = property;
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg  dark:bg-darkWhite">
      <div className="w-[329px] h-[186px]">
        <img
          className="object-cover w-full h-full rounded-[10px]"
          src={image}
          alt="avatar"
        />
      </div>

      <div className="flex justify-between gap-[7px] mt-[10px]">
        <div>
          <h2 className="text-base font-semibold text-heading dark:text-darkHeading">
            {name}
          </h2>
          <p className="flex gap-[6px] items-center text-text dark:text-darkText font-normal mt-[3px]">
            <HiLocationMarker className="text-heading dark:text-darkHeading" />{" "}
            {location}
          </p>
        </div>
        <div>
          <span className="bg-[#DADEFA] px-[9px] py-[7px] rounded-[4px] text-xs text-main font-semibold block">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
