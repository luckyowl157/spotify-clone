interface TitleProps {
  title: string,
  subtitle?: string
}

export default function Title({title, subtitle}: TitleProps) {
  return (
    <div className='flex flex-col'>
      {subtitle && <p className='text-xs text-spotify-lightGray'>{subtitle}</p>}
      {title && <h1 className='text-2xl text-white font-bold'>{title}</h1>}
    </div>
  )
};
