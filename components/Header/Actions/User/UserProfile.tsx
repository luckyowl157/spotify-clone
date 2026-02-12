import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image'
import { LoginBtn } from '@/components/LoginBtn/LoginBtn'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import {ExternalLink} from 'lucide-react'

import { useSession } from 'next-auth/react'
import dropDownData from './DropdownData'

export default function UserProfile() {
  const { data: session } = useSession()

  return (
    <div>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger className='size-12 bg-spotify-gray rounded-full flex items-center justify-center p-2 cursor-pointer' asChild>
            <DropdownMenuTrigger asChild>
              <Button>
                {session?.user?.image &&
                  <Image
                    src={session?.user?.image}
                    alt={session?.user?.name ? session?.user?.name : 'Profile picture'}
                    width={32}
                    height={32}
                    className='rounded-full object-cover h-full'
                  />
                }
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>

          <TooltipContent side='bottom' className='[&_svg]:invisible bg-spotify-gray '>
            <p className='text-sm'>{session?.user?.name}</p>
          </TooltipContent>

          <DropdownMenuContent align="end" className='w-[328px] rounded-[4px]'>
            {dropDownData.map((item) => (
              <DropdownMenuItem key={item.title} className='py-2 pl-3 pr-2 hover:bg-white/20! hover:text-white! rounded-xs flex justify-between items-center'>
                <span className='text-sm leading-5 '>{item.title}</span>
                {item.external && <ExternalLink className='text-white size-4' />}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className='bg-white/20 my-4' />
            <DropdownMenuItem className='py-2 pl-3 pr-2 hover:bg-white/20! hover:text-white! rounded-xs flex justify-between items-center'>
              <LoginBtn />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </div>
  )
};
