import React from 'react';
import Tshirt from '../../assets/T-shirt.svg';
import dress from '../../assets/Dress.svg';
import watch from '../../assets/Watch.svg';
import fork from '../../assets/Fork and knife with plate.svg';
import soccer from '../../assets/Soccer ball.svg';
import books from '../../assets/Books.svg';
import home from '../../assets/Shallow pan of food.svg';
import health from '../../assets/Stethoscope.svg';
import mobile from '../../assets/Mobile phone.svg';
import laptop from '../../assets/Laptop.svg';
import desktop from '../../assets/Desktop computer.svg';
import headphone from '../../assets/Headphone.svg';
import jewery from '../../assets/Ring.svg';
import plus from '../../assets/2795_PlusSign_1024px_01_02 1.svg';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  color: string;
  style:{
    backgroundColor: string;
  }

}

const CategoryCard: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Men Clothes',
      image: Tshirt,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 2,
      name: 'Women Clothes',
      image: dress,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 3,
      name: 'Watches',
      image: watch,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 4,
      name: 'Home Appliances',
      image: fork,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }

    },
    {
      id: 5,
      name: 'Sports',
      image: soccer,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 6,
      name: 'Books',
      image: books,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 7,
      name: 'Home & Living',
      image: home,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 8,
      name: 'Health ',
      image: health,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 9,
      name: 'Mobile',
      image: mobile,
        color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 10,
      name: 'Laptop',
      image: laptop,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 11,
      name: 'Desktop',
      image: desktop,
        color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 12,
      name: 'Headphone',
      image: headphone,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 13,
      name: 'Jewelry',
      image: jewery,
      color: 'white',
      style: {
        backgroundColor: 'white',
      }
    },
    {
      id: 14,
      name: 'All Categories',
      image: plus,
      color: 'white',
      style: {
        backgroundColor: 'rgba(234, 234, 234, 1)'
      },

    },
  ];

  return (
<>

  <div className="px-4 gap-4 justify-center items-center grid 2xl:grid-cols-7 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 sm:gap-3 xs:grid-cols-2 xs:gap-2 2xs:grid-cols-1  my-8">
  
  {categories.map((category) => (
   <Link to='/catalog'>
  <div
      className="min-w-[135px] max-w-[160px] min-h-[48px] hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl ">
    <div
        key={category.id}
        style={{
          backgroundColor: category.style.backgroundColor,

        }}
        className=" myComponent h-[128px] max-h-[128px] flex flex-col justify-center items-center  rounded-xl ">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <img
          src={category.image}
          alt="Tshirt"
          className="flex-grow-0 flex-shrink-0"
        />
      </div>
      <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-black">
          {category.name}
        </p>
      </div>
    </div>
  
    </div>
    </Link>
  ))}

</div>

</>
  );
};
export default CategoryCard;

