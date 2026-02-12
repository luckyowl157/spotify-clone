'use client'
import { useTrackFetch } from '@/hooks/Content/TopTracksFetch'
import Image from 'next/image'

export default function TopTracks() {
  const { data, isLoading, error } = useTrackFetch()
  if (isLoading) return <div>...Loading</div>
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data?.items.length > 0 &&
        data.items.map((item) => (
          <div
            key={item.track.id}
            className='rounded-md bg-white/10 flex gap-4 items-center pr-4 cursor-pointer'
          >
            <Image
              src={item.track.album.images[2].url}
              width={item.track.album.images[2].width}
              height={item.track.album.images[2].height}
              alt={item.track.name || item.track.album.name}
              className='rounded-tl-md rounded-bl-md'
            />
            <div>
              <span className='text-white font-bold text-sm inline-flex'>{item.track.name}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
};
