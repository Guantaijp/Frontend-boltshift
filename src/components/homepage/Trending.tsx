import chart from '../../assets/Chart increasing.svg'
import TrendingCard from '../TrendingCard'

function Trending() {
  return (
    <div className='mx-8 my-6'>
      <div className="flex mb-2">
        <img src={chart} alt="Trending Products" />
        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
  Trending Products
</p>        
</div>
        <TrendingCard />
    </div>
  )
}

export default Trending
