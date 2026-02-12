import {useNowPlaying} from '@/hooks/useNowPlaying'
import { TrackInfo, ArtistInfo } from '.'
import Link from 'next/link'

export default function RightSidebar() {
  const { data, isLoading, error } = useNowPlaying()

	return (
    <div className="grid-in-right-sidebar w-[420px] px-4 bg-spotify-dark rounded-md pt-4 flex flex-col gap-4">
      {data?.item?.album.name &&
        <Link href={`/${data?.item?.album.type}/${data.item.album.id}`}>
          <h1 className='font-bold text-base text-white'>{data.item.album.name}</h1>
        </Link>
      }
      <TrackInfo />
      <ArtistInfo />
    </div>
	)
};
