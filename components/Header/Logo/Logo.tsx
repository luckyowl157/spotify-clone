import Link from 'next/link'
import Image from 'next/image'
import WhiteLogo from '@/public/Logos/Primary_Logo_White_CMYK.svg'

export default function Logo() {
  return (
    <div>
      <Link href='/'>
        <Image
          src={WhiteLogo.src}
          alt='Spotify Logo'
          width={32}
          height={32}
        />
      </Link>
    </div>
  )
};
