const SkeltonLoading = ({ count }) => {
  // Create an array with the specified count
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
    >
      <div className="animate-pulse flex flex-col space-4">
        <div className="rounded bg-gray-400 h-[70px] w-[125px]"></div>
        <div className="flex-1 space-y-6 py-1 mt-3">
          <div className="h-2 bg-gray-400 rounded w-full"></div>
        </div>
      </div>
    </div>
  ));

  return <>{skeletonItems}</>;
};

export default SkeltonLoading;
