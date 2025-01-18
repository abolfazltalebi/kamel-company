import { BiPlay } from 'react-icons/bi'
import coverVideo from '../../assets/images/covervideo.webp'

export default function video() {
  return (
    <section className="container mt-12">
      <div className='relative'>
        <img src={coverVideo} alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className="size-14 text-white bg-orangee rounded-full flex items-center justify-center">
            <BiPlay/>
          </div>
        </div>
      </div>
    </section>
  )
}
