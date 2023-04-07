import Image from 'next/image';

//A user's profile image, loaded from an external URL
export default function ProfileImage({
  imageUrl,
  widthPx = 100,
  heightPx = 100
}: ProfileImageProps) {
  return <Image
    alt='User profile picture'
    height={heightPx}
    src={imageUrl}
    width={widthPx}
  />;
}

type ProfileImageProps = {
  heightPx?: number;
  imageUrl: string;
  widthPx?: number;
};
