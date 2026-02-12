'use client'
import { CardGrid } from '@/components/GridCards'
import { Title } from '@/components/Title'
import { useSession } from 'next-auth/react'

export default function MadeFor() {
  const { data: session } = useSession()
  return (
    <>
      <Title
        subtitle='Made For'
        title={`${session?.user?.name}`}
      />
      {/* <CardGrid items={data.items} /> */}
    </>
  )
};
