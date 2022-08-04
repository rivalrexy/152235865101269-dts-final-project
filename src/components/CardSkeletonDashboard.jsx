import Skeleton from "react-loading-skeleton";

const CardSkeletonDashboard = () => {
  return (
    <>
      <div className="flex">
        <Skeleton count={1} height={200} width={400} />
        <div className="w-full">
          <Skeleton count={3} width={1200} />
        </div>
      </div>
      <div className="flex">
        <Skeleton count={1} height={200} width={400} />
        <div className="w-full">
          <Skeleton count={3} width={1200} />
        </div>
      </div>
      <div className="flex">
        <Skeleton count={1} height={200} width={400} />
        <div className="w-full">
          <Skeleton count={3} width={1200} />
        </div>
      </div>
      <div className="flex">
        <Skeleton count={1} height={200} width={400} />
        <div className="w-full">
          <Skeleton count={3} width={1200} />
        </div>
      </div>
    </>
    // </div>
  );
};

export default CardSkeletonDashboard;
