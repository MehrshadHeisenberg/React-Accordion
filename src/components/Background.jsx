import BackgroundMobile from "@/svg/BackgroundMobile";
import BackgroundDesktop from "@/svg/BackgroundDesktop";

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <BackgroundDesktop className="hidden lg:block" />
      <BackgroundMobile className="block lg:hidden" />
    </div>
  );
}

export default Background;
