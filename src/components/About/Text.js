function Text() {
  return (
    <div className="flex flex-col items-center text-center gap-8 xl:gap-4">
      <h2 className="capitalize text-textColor font-bold text-4xl xl:block hidden tracking-wider">
        big companies are here
      </h2>
      <h2 className="capitalize text-textColor font-bold text-5xl xl:hidden block tracking-normal">
        big companies
        <br /> are here
      </h2>
      <p className="text-secondText xl:block hidden tracking-wide">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </p>
      <p className="text-secondText xl:hidden block font-semibold tracking-wide">
        Problems trying to resolve
        <br /> the conflict between the two major
        <br /> realms of Classical physics:
        <br /> Newtonian mechanics
      </p>
    </div>
  );
}

export default Text;
