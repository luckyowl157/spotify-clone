import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {X} from  'lucide-react'

interface SwitchersProps {
  current: 'all' | 'playlists' | 'artists' | 'albums';
  onSwitch: (tab: 'all' | 'playlists' | 'artists' | 'albums') => void;
}


export default function Switchers({ current, onSwitch }: SwitchersProps) {
  const baseButton =
  'px-3 py-1 h-8 cursor-pointer transition-all rounded-full font-spotify';

const inactive =
  'bg-white/24 text-white hover:bg-white/35';

const active =
  'bg-white text-black shadow-sm';

  const renderButton = (
    value: SwitchersProps['current'],
    label: React.ReactNode,
    extra?: string
  ) => {
    const isActive = current === value;

    return (
      <Button
        key={value}
        onClick={() => onSwitch(value)}
        className={cn(
          baseButton,
          isActive ? active : inactive,
          extra
        )}
      >
        {label}
      </Button>
    );
  };


  return (
    <div className='flex gap-2 px-2'>
      {current !== 'all' &&
        renderButton('all', <X />, 'w-8 px-0')}
      {renderButton('playlists', 'Playlists')}
      {renderButton('artists', 'Artists')}
      {renderButton('albums', 'Albums')}
    </div>
  );
}
