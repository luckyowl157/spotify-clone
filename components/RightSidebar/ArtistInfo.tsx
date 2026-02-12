import Image from 'next/image'
import Link from 'next/link'
import { useNowPlaying } from '@/hooks/useNowPlaying'
import { useArtist } from '@/hooks/useArtistId'
import {CommaOnNumbers} from '@/lib/commaOnNumbers'
export default function ArtistInfo() {
  const { data: nowPlaying, isLoading: nowPlayingLoading } = useNowPlaying()

  const artistId = nowPlaying?.item?.artists?.[0]?.id
  const { data: artist, isLoading: artistLoading } = useArtist(artistId)

  if (nowPlayingLoading || artistLoading) {
    return <div className="text-sm text-neutral-400">Loading artist…</div>
  }

  if (!artist) return null

  return (
    <div className="flex flex-col gap-4  bg-spotify-gray rounded-md">
      {/* Artist image */}
      {artist.images?.[0] && (
        <Image
          src={artist.images[0].url}
          alt={artist.name}
          width={388}
          height={258}
          className='rounded-t-md h-[258px] object-cover '
        />
      )}

      {/* Artist info */}
      <div className="flex flex-col px-4 pb-4">
        {artist.name &&
          <Link href={`/artist/${artist.id}`}>
            <span className="font-bold text-base text-white">{artist.name}</span>
          </Link>
        }


        <span className="text-base text-white/80">
          {CommaOnNumbers(artist.followers.total)} followers
        </span>

        {artist.genres?.length > 0 && (
          <span className="text-base text-neutral-400 text-ellipsis  overflow-hidden">
            {artist.genres.slice(0, 3).join(', ')}
          </span>
        )}
      </div>
    </div>
  )
};
