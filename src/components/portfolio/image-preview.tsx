import { ImageOff } from 'lucide-react';
import Image from 'next/image';

interface IImagePreview {
  src?: string;
  title: string;
}
const ImagePreview = ({ src, title }: IImagePreview) => {
  return (
    <div className="relative h-48 w-full rounded-md bg-dark-bg/60 xl:h-52">
      {src ? (
        <Image
          alt={`preview-portfolio-${title}`}
          src={src as string}
          fill
          sizes="(max-width: 96px) 100vw, (max-width: 96px) 50vw, 33vw"
          quality={80}
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <ImageOff className="h-10 w-10 text-dark-text-secondary" />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
