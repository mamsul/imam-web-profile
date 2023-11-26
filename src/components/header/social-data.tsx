import { Github, Instagram, Linkedin, MailIcon, MapPin } from "lucide-react";
import React from "react";
import Badge from "../utility/badge";

const SocialData = () => {
  return (
    <div className="mt-4 md:mt-6 xl:mt-14 w-full flex flex-col items-start">
      <div className="flex flex-wrap gap-2 md:gap-3 xl:gap-7">
        <span className="inline-flex gap-1.5 items-center text-dark-text-secondary text-xs md:text-sm">
          <MapPin className="h-3 md:h-4 w-3 md:w-4" />
          Indramayu, Jawa Barat
        </span>
        <span className="inline-flex gap-1.5 items-center text-dark-text-secondary text-xs md:text-sm">
          <MailIcon className="h-3 w-3 md:h-4 md:w-4" />
          imamsulthoni.amd@gmail.com
        </span>
      </div>

      <div className="w-full flex flex-row overflow-auto gap-2 md:gap-4 mt-4 lg:mt-6">
        <a href="https://www.linkedin.com/in/imam-sulthoni" target="_blank">
          <Badge className="bg-blue-50 border-blue-400 inline-flex gap-1.5 items-center">
            <Linkedin className="w-3 h-3 md:h-4 md:w-4 text-blue-500" />
            <span className="text-xs md:text-sm text-blue-500 font-medium">
              Linkedin
            </span>
          </Badge>
        </a>
        <a href="https://github.com/mamsul" target="_blank">
          <Badge className="bg-gray-50 border-gray-600 inline-flex gap-1.5 items-cente">
            <Github className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
            <span className="text-xs md:text-sm text-gray-600 font-medium">
              Github
            </span>
          </Badge>
        </a>
        <a href="https://www.instagram.com/imamsulthon.i" target="_blank">
          <Badge className="bg-red-50 border-red-400 inline-flex gap-1.5 items-center">
            <Instagram className="h-3 w-3 md:h-4 md:w-4 text-red-400" />
            <span className="text-xs md:text-sm text-red-400 font-medium">
              Instagram
            </span>
          </Badge>
        </a>
      </div>
    </div>
  );
};

export default SocialData;
