import React from 'react'
import { cn } from '@/lib/utils'

interface ContentProp {
  children: React.ReactNode
  className?: string
}
export default function ContentWrapper({children, className}: ContentProp) {
  return (
    <div className={cn(className, 'bg-spotify-dark rounded-md')}>{children}</div>
  )
};
