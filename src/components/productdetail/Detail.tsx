import Footer from "../Footer"
import Navbar from "../Navbar"
import Description from "./Description"
import Display from "./Display"
import RelatedProduct from "./RelatedProduct"
import Review from "./Review"
import Similar from "./Similar"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getProductAsyc} from '../../store/reducers/products.reducer.ts'



function Detail() {

  document.title = "Product Detail | Shop";
  const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state:any) => state.products.products);

    const fetchData = async () => {
      const response = await dispatch(getProductAsyc() as any);
    }

    useEffect(() => {
      fetchData();
    }, []);

    const selectedProduct = products.find((product:any) => product.id === Number(id));

document.title = "Product Detail | Shop";


  return (

    <>
      <Navbar />
      <div className="mx-8 max-w-[1248px] justify-center " >
        <div className="flex  flex-wrap justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 py-2 ">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#D0D5DD"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
              Catalog
            </p>
          </div>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#D0D5DD"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
              Men’s Fashion
            </p>
          </div>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#D0D5DD"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
              Watches
            </p>
          </div>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#D0D5DD"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative pr-4">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d0039]">
              {selectedProduct.attributes.name}
            </p>
          </div>
        </div>

        <Display product={selectedProduct} />
        <Description />
        <Review />
        <RelatedProduct />
        <Similar />

      </div>
      <Footer />
    </>
  )
}

export default Detail
