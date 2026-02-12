'use client'

// import { Navigation } from '@/features/header'
import {Header} from '@/components/Header'
// import { BottomNav } from '@/features/bottom-navigation'
import { SidebarList } from '@/components/LeftSidebar'
import { RightSidebar } from '@/components/RightSidebar'
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <div className={`h-full min-h-screen w-full bg-black app-grid p-5`}>
      {!isLoginPage && <Header />}
      {!isLoginPage && <Suspense fallback={<div>Fetching...</div>}><SidebarList /></Suspense>}
      {/* <div className="h-full overflow-auto">{children}</div> */}
      <main className="grid-in-main-view h-full overflow-auto">{children}</main>
      {!isLoginPage && <RightSidebar />}
      {!isLoginPage && <div className='grid-in-now-playing-bar'><h1 className='text-white text-4xl'>Bottom navigation player</h1></div>}
      {/* {!isLoginPage && <Aside />} */}
      {/* {!isLoginPage && <BottomNav />} */}
    </div>
  )
}
