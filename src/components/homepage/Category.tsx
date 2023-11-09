
import bag from "../../assets/Shopping bags.svg"
import CategoryCard from "./CategoryCard"

function Category() {
  return (
    <div className="mx-4 my-12">
    <div className="flex  px-4">
        <img src={bag} alt="Category" />
        <p className="font-semibold mt-2 mx-1"></p>
        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center mt-2 text-black">
   Popular Categories
  </p>
      </div>
      <CategoryCard />
    </div>
  )
}

export default Category
