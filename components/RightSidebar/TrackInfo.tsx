import Image from 'next/image'
import Link from 'next/link'
import {useNowPlaying} from '@/hooks/useNowPlaying'
import { CirclePlus, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TrackInfo() {

  const { data, isLoading, error } = useNowPlaying()
  return (
    <div className='flex flex-col gap-4'>
      {data?.item?.album.images &&
        <div>
          <Image
            src={data.item.album.images[0].url}
            alt={data.item.album.name}
            title={data.item.album.name}
            width={388}
            height={388}
            className='rounded-md'
          />
        </div>
      }
      {data?.item?.name &&
        <div className='flex  flex-row gap-4  justify-between w-full'>
          <div className='flex flex-col min-w-0'>
            {data.item.name &&
              <Link href={`/album/${data.item.album.id}`} className='block'>
                <h2 className='text-white font-bold text-2xl truncate' title={data.item.name}>{data.item.name}</h2>
              </Link>
            }

            {data.item.artists &&
              <div className='flex gap-2 truncate '>
                {data.item.artists.map((artist, index) => (
                <span className='text-white/50 whitespace-nowrap' key={artist.id}><Link className='text-sm transition hover:text-white hover:underline underline-offset-1' href={`/artist/${artist.id}`}>{artist.name}</Link>{index < data.item.artists.length - 1 && ', '}</span>
              ))}
              </div>
            }
          </div>

          <div className='flex flex-row '>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='link' className='cursor-pointer'>
                  <Share className='size-6 text-white' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='bg-spotify-gray [&_svg]:invisible'>
                <p className='text-sm'>Copy Link to Song</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='link' className='cursor-pointer'>
                  <CirclePlus className='size-6 text-white' />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='bg-spotify-gray [&_svg]:invisible'>
                <p className='text-sm'>Add to Liked Songs</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      }
    </div>
  )
};
