import { Github, Instagram, Linkedin, MailIcon, MapPin } from 'lucide-react';
import Badge from '../utility/badge';

const SocialData = () => {
  return (
    <div className="mt-4 flex w-full flex-col items-start md:mt-6 xl:mt-14">
      <div className="flex flex-wrap gap-2 md:gap-3 xl:gap-7">
        <span className="inline-flex items-center gap-1.5 text-xs text-dark-text-secondary md:text-sm">
          <MapPin className="h-3 w-3 md:h-4 md:w-4" />
          Indramayu, Jawa Barat
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-dark-text-secondary md:text-sm">
          <MailIcon className="h-3 w-3 md:h-4 md:w-4" />
          imamsulthoni.amd@gmail.com
        </span>
      </div>

      <div className="mt-4 flex w-full flex-row gap-2 overflow-auto md:gap-4 lg:mt-6">
        <a href="https://www.linkedin.com/in/imam-sulthoni" target="_blank">
          <Badge
            variant="social"
            className="inline-flex items-center gap-1.5 border-blue-400 bg-blue-50">
            <Linkedin className="h-3 w-3 text-blue-500 md:h-4 md:w-4" />
            <span className="text-xs font-medium text-blue-500 md:text-sm">
              Linkedin
            </span>
          </Badge>
        </a>
        <a href="https://github.com/mamsul" target="_blank">
          <Badge
            variant="social"
            className="items-cente inline-flex gap-1.5 border-gray-600 bg-gray-50">
            <Github className="h-3 w-3 text-gray-600 md:h-4 md:w-4" />
            <span className="text-xs font-medium text-gray-600 md:text-sm">
              Github
            </span>
          </Badge>
        </a>
        <a href="https://www.instagram.com/imamsulthon.i" target="_blank">
          <Badge
            variant="social"
            className="inline-flex items-center gap-1.5 border-red-400 bg-red-50">
            <Instagram className="h-3 w-3 text-red-400 md:h-4 md:w-4" />
            <span className="text-xs font-medium text-red-400 md:text-sm">
              Instagram
            </span>
          </Badge>
        </a>
      </div>
    </div>
  );
};

export default SocialData;
