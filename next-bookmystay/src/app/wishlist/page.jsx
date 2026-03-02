import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className='bg-gray-50 min-h-[calc(100vh-theme(spacing.16))] py-8'>
      <div className='container mx-auto px-4 md:px-8 max-w-6xl'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Your Wishlist</h1>
        <p className='text-gray-600 mb-8'>
          Properties you have saved for later.
        </p>

        {/* Logic: Map through actual wishlist items. Display empty state if none. */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer flex flex-col'>
              <div className='h-48 bg-gray-200 relative overflow-hidden'>
                {/* Placeholder Image */}
                <div className='absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-200 group-hover:scale-105 transition-transform duration-500'></div>
                <div className='absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md text-red-500 hover:text-gray-400 transition z-10 flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 fill-current'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                  </svg>
                </div>
              </div>
              <div className='p-4 flex-1 flex flex-col'>
                <div className='flex justify-between items-start mb-1'>
                  <h3 className='text-lg font-bold text-gray-900 line-clamp-1'>
                    Forest Retreat {item}
                  </h3>
                  <div className='flex items-center text-sm font-semibold gap-1 text-gray-700 bg-gray-50 px-1 rounded'>
                    <span>★</span> 4.9
                  </div>
                </div>
                <p className='text-gray-500 text-sm mb-3'>Bali, Indonesia</p>

                <div className='mt-auto pt-4 flex justify-between items-end border-t border-gray-100'>
                  <p className='font-bold text-lg text-gray-900'>
                    ${120 + item * 30}{" "}
                    <span className='text-xs font-normal text-gray-500'>
                      / night
                    </span>
                  </p>
                  <Link
                    href={`/hotels/${item}`}
                    className='text-sm font-bold text-blue-600 hover:text-blue-800 transition'>
                    View Deal
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
