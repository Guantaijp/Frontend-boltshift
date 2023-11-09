import thumb from '../../assets/Thumbs up.svg'
import PopularCard from './PopularCard'

function PopularReview() {
  return (
    <div className='mx-8 py-6 '>
      <div className="inline-flex ">
<img src={thumb} alt="thumb" className="flex-grow-0 flex-shrink-0 w-12 h-12  object-cover " />
  <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center mt-2 text-black">
    Popular Reviews
  </p>
        </div>
        <div className="flex justify-center items-center ">
        <PopularCard />
        </div>

    </div>
  )
}

export default PopularReview
