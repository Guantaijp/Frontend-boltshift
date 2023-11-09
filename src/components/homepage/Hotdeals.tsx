
import fire from '../../assets/Fire.svg'
import HotedealCard from './HotedealCard'

function Hotdeals() {
  return (
    <div className='mx-4 my-12'>
      <div className="flex px-4">
        <img src={fire} alt="Hot Deals" />
        <p className="font-semibold mt-2 mx-1"></p>
        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center mt-2 text-black">
          Hot Deals Today
        </p>
    </div>
    <HotedealCard />
    </div>

  )
}

export default Hotdeals
