import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-transparent border-2 border-dark-label-bg relative mt-2">
      <Image
        alt="imam-sulthoni"
        src="/static/imam-informal.jpeg"
        fill
        sizes="(max-width: 96px) 100vw, (max-width: 96px) 50vw, 33vw"
        quality={80}
        style={{ objectFit: "cover" }}
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileImage;
