import { Github, Instagram, Linkedin, MailIcon, MapPin } from "lucide-react";
import Badge from "../utility/badge";
import ProfileImage from "../header/profile-image";
import HeaderTitle from "../header/header-title";
import SocialData from "../header/social-data";
import Description from "../header/description";

export default function HeaderSection() {
  return (
    <div className="bg-hero w-full h-max lg:h-80 xl:h-[450px] flex items-center">
      <div className="screen-size py-10 h-full flex flex-col lg:flex-row items-center border-b border-dark-border">
        <div className="flex flex-col w-full lg:w-5/12">
          <div className="flex flex-row items-center w-full">
            <div className="w-2/12 lg:w-3/12">
              <ProfileImage />
            </div>
            <div className="w-10/12 lg:w-9/12 ps-5 md:ps-3 lg:ps-0 xl:ps-0 flex flex-col">
              <HeaderTitle />
            </div>
          </div>

          <SocialData />
        </div>

        <div className="w-1/12 h-full hidden xl:block">
          <div className="w-1 bg-dark-label h-full rotate-12 m-auto"></div>
        </div>

        <div className="w-full lg:w-6/12 flex lg:justify-end mt-4 md:mt-6 lg:mt-0 ms-auto">
          <Description />
        </div>
      </div>
    </div>
  );
}
