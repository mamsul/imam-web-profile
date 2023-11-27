import Description from '../header/description';
import HeaderTitle from '../header/header-title';
import ProfileImage from '../header/profile-image';
import SocialData from '../header/social-data';

export default function HeaderSection() {
  return (
    <div className="flex h-max w-full items-center bg-hero lg:h-80 xl:h-[450px]">
      <div className="screen-size flex h-full flex-col items-center border-b border-dark-border py-10 lg:flex-row">
        <div className="flex w-full flex-col lg:w-5/12">
          <div className="flex w-full flex-row items-center">
            <div className="w-2/12 lg:w-3/12">
              <ProfileImage />
            </div>
            <div className="flex w-10/12 flex-col ps-5 md:ps-3 lg:w-9/12 lg:ps-0 xl:ps-0">
              <HeaderTitle />
            </div>
          </div>

          <SocialData />
        </div>

        <div className="hidden h-full w-1/12 xl:block">
          <div className="m-auto h-full w-1 rotate-12 bg-dark-label"></div>
        </div>

        <div className="ms-auto mt-4 flex w-full md:mt-6 lg:mt-0 lg:w-6/12 lg:justify-end">
          <Description />
        </div>
      </div>
    </div>
  );
}
