import React from 'react'
import bracets from '../../assets/populartags/bracets.svg';
import earing from '../../assets/populartags/earing.svg';
import electronics from '../../assets/populartags/electronic.svg';
import hoodie from '../../assets/populartags/hoodies.svg';
import keyboard from '../../assets/populartags/keyboard.svg';
import lampshade from '../../assets/populartags/lampshade.svg';
import mackbook from '../../assets/populartags/mackbook.svg';
import phone from '../../assets/populartags/phones.svg';
import tablets from '../../assets/populartags/tablets.svg';
import watch from '../../assets/populartags/watches.svg';
import waterbotte from '../../assets/populartags/waterbottler.svg';
import tshirt from '../../assets/populartags/tshirts.svg';
interface PopularTagProps {
  id : number;
    item : string;
    image : string;
}

const popularTag: PopularTagProps[] = [
    {
        id: 1,
        item: "Electronic",
        image: electronics,
    },
    {
        id: 2,
        item: "Phone",
        image: phone,
    },
    {
        id: 3,
        item: "Tablets",
        image: tablets,
    },
    {
        id: 4,
        item: "T-shirt",
        image: tshirt,
    },
    {
        id: 5,
        item: "Hoodie",
        image: hoodie,
    },
    {
        id: 6,
        item: "Watch",
        image: watch,
        
    },
    {
        id: 7,
        item: "Mackbook",
        image: mackbook,
    },
    {
        id: 8,
        item: "Eearing",
        image: earing,
    },
    {
        id: 9,
        item: bracets,
        image: keyboard,
    },
    {
        id: 10,
        item: "Watch",
        image: watch,
    },
    {
        id: 11,
        item: "Lampshade",
        image: lampshade,
    },
    {
        id: 12,
        item: "Waterbottle",
        image: waterbotte,
    }


]

const PopularTag: React.FC = () => {
  return (
    <div>
      <div className='flex flex-wrap  '>
        {popularTag.map((item) => (
          <div key={item.id} >
              <img src={item.image} alt={item.item} className='mr-2 my-1'  />

          </div>
        ))}
        </div>
      
    </div>
  )
}

export default PopularTag
