import { Logo } from '.'
import {UserProfile} from './Actions/User'
export default function Header() {
  return (
    <div className='grid-in-global-nav flex justify-between items-center p-2'>
      <Logo />
      <h1 className='text-white'>Main Header</h1>
      <UserProfile />
    </div>
  )
};
