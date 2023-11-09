import clipboard from '../../assets/Clipboard.svg'
import FeatureCard from './FeatureCard'
import FeatureCard2 from './FeatureCard2'

function FeaturedProduct() {
  return (
    <div
        className="mx-4">
        <div className="flex px-4">
           <img src={clipboard} alt="Featured Product" />
           <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center mt-2 text-black">
           Featured Products
           </p>
        </div>
        <div
            style={{
                width: 'fit-content',
                maxWidth: '1248px',
            }}
            className="px-4 justify-between my-8 flex gap-3 xl:flex lg:flex md:flex-col sm:flex-col xs:flex-col" >
            <div
                className="">
                <FeatureCard />
            </div>
            <div className="">
               <FeatureCard2  />
        </div>
        </div>

    </div>
  )
}

export default FeaturedProduct
