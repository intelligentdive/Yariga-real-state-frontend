import CircularProgressBar from "../CircularProgressbar";

const TotalRevenue = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] mt-[20px]">
      {/* Properties for sale */}
      <div className="bg-white dark:bg-darkWhite py-[24px] px-[22px] rounded-2xl">
        <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
          <div className="flex flex-col gap-[5px] w-[136px]">
            <p className="text-text text-sm font-medium ">
              Properties for Sale
            </p>
            <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
              684
            </h1>
          </div>
          <div className=" ">
            <CircularProgressBar value={76} pathColor={`#475BE8`} />
          </div>
        </div>
      </div>

      {/* Properties for rent */}
      <div className="bg-white dark:bg-darkWhite py-[24px] px-[22px] rounded-2xl">
        <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
          <div className="flex flex-col gap-[5px] w-[136px]">
            <p className="text-text text-sm font-medium ">
              Properties for Rent
            </p>
            <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
              546
            </h1>
          </div>
          <div>
            <CircularProgressBar value={56} pathColor={`#FD8539`} />
          </div>
        </div>
      </div>

      {/* Total Customer */}
      <div className="bg-white dark:bg-darkWhite py-[24px] px-[22px] rounded-2xl">
        <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
          <div className="flex flex-col gap-[5px] w-[136px]">
            <p className="text-text text-sm font-medium ">Total Customer</p>
            <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
              5,732
            </h1>
          </div>
          <div>
            <CircularProgressBar value={36} pathColor={`#2ED480`} />
          </div>
        </div>
      </div>

      {/* Total City */}
      <div className="bg-white dark:bg-darkWhite py-[24px] px-[22px] rounded-2xl">
        <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
          <div className="flex flex-col gap-[5px] w-[136px]">
            <p className="text-text text-sm font-medium ">Total City</p>
            <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
              90
            </h1>
          </div>
          <div>
            <CircularProgressBar value={76} pathColor={`#FE6D8E`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
