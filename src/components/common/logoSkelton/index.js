const LogoSkelton = ({ count }) => {
  // Create an array with the specified count
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <div key={index} className="rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col space-4">
        <div className="rounded bg-gray-400 h-[70px] w-[125px]"></div>
      </div>
    </div>
  ));

  return <>{skeletonItems}</>;
};

export default LogoSkelton;
