import ReviewCard from "@/components/review/ReviewCard";
import ReviewTab from "@/components/review/ReviewTab";

const ReviewsPage = () => {
  return (
    <div className="px-[10px] md:px-0">
      <h2 className="text-lg font-semibold md:text-[26px] md:font-bold text-heading dark:text-darkHeading">
        Review List
      </h2>
      <div className="my-5 ">
        <ReviewTab />
      </div>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewsPage;
