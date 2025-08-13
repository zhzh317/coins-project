import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  href: string;
  imgSrc: string;
  imgTitle: string;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  href,
  imgSrc,
  imgTitle,
  className,
}) => {
  return (
    <div className={cn('flex justify-center', className)}>
      <Link href={href} target="_blank" rel="noopener noreferrer" className="w-full">
        <Image
          src={imgSrc}
          alt={imgTitle}
          title={imgTitle}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full max-w-full"
          unoptimized
        />
      </Link>
    </div>
  );
};

export default AdBanner;
