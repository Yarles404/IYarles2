import Image from 'next/image'

function HomePage() {
  return (
    <div className='card'>
      <div className='columns-2'>
        <div className='h-full'>
          <h1 className='text-6xl font-bold object-left'>Charles Yang</h1>
        </div>
        <img src='/images/filler.png' alt='filler image' className='w-full' />
      </div>
    </div>
  )
}

export default HomePage