import heroImage from "../assets/HeroImg1.jpg";

import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
const StayCard = (stay) => {
  return (
    <div className='mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl rounded-tl-[50px] rounded-br-[50px] border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg'>
      <img
        className='mb-8 rounded-tl-[50px] h-[180px]'
        src={stay?.image ? stay.image : heroImage}
        alt=''
      />
      <div className='px-4 flex flex-col justify-start'>
        <div className='mb-4 flex gap-x-2 px-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
            {stay?.type ? stay.type : "House"}
          </div>
          <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
            {stay?.city ? stay.city : "Goa"}
          </div>
        </div>
        <div className='text-lg font-semibold max-w-[260px]'>
          {stay?.address ? stay.address : "7240C Argyle St. Lawndale, CA 90260"}
        </div>
        <div className='flex gap-x-4 my-4'>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiBed />
            </div>
            <div className='text-base'>
              {stay?.bedrooms ? stay.bedrooms : 6}
            </div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiBath />
            </div>
            <div className='text-base'>
              {stay?.bathrooms ? stay.bathrooms : 5}
            </div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full'>
              <BiArea />
            </div>
            <div className='text-base'>
              {stay?.surface ? stay.surface : "6"} sq ft.
            </div>
          </div>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px] rounded-full '>
              <FaStarHalfAlt />
            </div>
            <div className='text-base'>
              {stay?.surface ? stay.surface : "6"}
            </div>
          </div>
        </div>
        <div className='text-lg font-semibold text-green-600 mb-4'>
          ₹ {stay?.price ? stay.price : 6000}
        </div>
      </div>
    </div>
  );
};

export default StayCard;
