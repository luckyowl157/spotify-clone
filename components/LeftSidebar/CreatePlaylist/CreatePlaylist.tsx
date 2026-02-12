import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Plus } from 'lucide-react'

export default function CreatePlaylist() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className='bg-spotify-gray rounded-full size-[35px]'>
          <Plus />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='[&_svg]:invisible'>
        <p>Create Playlist</p>
      </TooltipContent>
    </Tooltip>
  )
};
