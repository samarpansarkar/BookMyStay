import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import StayCard from "../components/StayCard";

const StayPage = () => {
  const [loading, setLoading] = useState(false);
  const stay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-green-700 text-4xl mt-[200px]' />
    );
  }

  if (stay.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center bg-green-100 rounded-t-4xl mt-5'>
      <Search />
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-14'>
          {stay.map((stay) => {
            return (
              <Link to={`/property/${stay.id}`} key={stay.id}>
                <StayCard stay={stay} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StayPage;
