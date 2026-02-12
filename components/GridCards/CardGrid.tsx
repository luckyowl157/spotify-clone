import Link from  'next/link'
import Image from 'next/image'

interface Props {
  items: Array<{
    images: Array<{
      url: string,
    }>,
    name: string,
    id: string,
    description?: string,
  }>
}

export default function CardGrid({items}: Props) {
  return (
    <div>
      <div>
        <Image
          src={items.images[0].url}
          alt={items.name}
          width={170}
          height={170}
        />
      </div>
      <div>
        <div><span>owner name</span></div>
        <div><span>List bands</span></div>
      </div>
    </div>
  )
};
