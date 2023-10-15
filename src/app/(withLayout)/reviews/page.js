import ReviewCard from "@/components/review/ReviewCard";
import ReviewTab from "@/components/review/ReviewTab";

const ReviewsPage = () => {
  return (
    <div className="md:px-[10px] px-0">
      <h2 className="text-lg font-semibold md:text-[26px] md:font-bold text-heading dark:text-darkHeading md:px-[0px] px-[10px]">
        Review List
      </h2>
      <div className="my-5 ">
        <ReviewTab />
      </div>
      <div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewsPage;
