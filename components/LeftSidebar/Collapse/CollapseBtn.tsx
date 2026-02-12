import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'
import { useCollapseSidebar } from '@/store/SidebarStore/collapseBtn'
import CollapseIcon from '@/public/svg/Collapse'

export default function CollapseBtn() {
  const { setIsOpen, isOpen } = useCollapseSidebar()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
         <Button
          variant='custom'
          className='flex gap-2 cursor-pointer group transition-all text-white justify-center'
          onClick={setIsOpen}
        >
          <CollapseIcon />
          {/* <Library className='size-4 opacity-0 transition-all hidden group-hover:inline-flex group-hover:opacity-100' /> */}
          {!isOpen && <h2 className='text-base font-bold'>Your Library</h2>}
        </Button>
      </TooltipTrigger>
      <TooltipContent className='[&_svg]:invisible'>
        <p>Collapse Your Library</p>
      </TooltipContent>
    </Tooltip>
  )
};
