import Image from "next/image";
import { LoginBtn } from '@/components/LoginBtn/LoginBtn';
import { SidebarList } from '@/components/LeftSidebar';
import { RightSidebar } from '@/components/RightSidebar';
import {ContentWrapper, TopTracks, MadeFor, TopMixes, FeaturedPlaylist} from '@/components/MainContent'


export default function Home() {
  return (
    <ContentWrapper className='space-y-6'>
      <TopTracks />
      <MadeFor />
      <TopMixes />
      <FeaturedPlaylist />
    </ContentWrapper>
		// <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

		// </div>
		// <main className='main min-h-screen w-full bg-black sm:items-start'>
		// 	<SidebarList />
		// 	<div>Main Content</div>
		// 	<RightSidebar />
		// 	<LoginBtn />
    // </main>
    // <div>
    //   <h1 className='text-5xl text-spotify-green'>Main COntent</h1>
    // </div>
    // <div>
    //   {/* <SidebarList /> */}
		// 	<LoginBtn />
    // </div>
	);
}
