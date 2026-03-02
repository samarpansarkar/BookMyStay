import Link from "next/link";

export default function SearchPage() {
  return (
    <div className='bg-gray-50 min-h-screen py-8'>
      <div className='container mx-auto px-4 md:px-8'>
        {/* Top Search Bar (Compact) */}
        <div className='bg-white rounded-lg p-3 shadow-sm mb-6 border border-gray-200 flex flex-col md:flex-row gap-3'>
          {/* Logic: Sync this with the main hero search bar context/state */}
          <input
            type='text'
            placeholder='Destination'
            className='w-full md:flex-1 p-2 border border-gray-300 rounded bg-gray-50'
            defaultValue='Maldives'
          />
          <input
            type='date'
            className='w-full md:w-auto p-2 border border-gray-300 rounded bg-gray-50'
          />
          <input
            type='date'
            className='w-full md:w-auto p-2 border border-gray-300 rounded bg-gray-50'
          />
          <select className='w-full md:w-auto p-2 border border-gray-300 rounded bg-gray-50'>
            <option>2 Guests</option>
          </select>
          <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium w-full md:w-auto whitespace-nowrap'>
            Update
          </button>
        </div>

        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Filters Sidebar */}
          <aside className='w-full lg:w-1/4'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-5 sticky top-24'>
              <div className='flex justify-between items-center mb-4 pb-4 border-b'>
                <h2 className='font-bold text-lg'>Filters</h2>
                <button className='text-sm text-blue-600 hover:underline'>
                  Clear all
                </button>
              </div>

              {/* Logic: Implement working filter state management */}
              <div className='mb-6'>
                <h3 className='font-semibold mb-3'>Price Range</h3>
                <input
                  type='range'
                  className='w-full accent-blue-600'
                  min='0'
                  max='1000'
                />
                <div className='flex justify-between text-sm text-gray-500 mt-2'>
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>

              <div className='mb-6'>
                <h3 className='font-semibold mb-3'>Star Rating</h3>
                <div className='space-y-2 text-sm text-gray-700'>
                  {["5 Stars", "4 Stars", "3 Stars", "Unrated"].map(
                    (rating) => (
                      <label
                        key={rating}
                        className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='checkbox'
                          className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                        />
                        {rating}
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className='font-semibold mb-3'>Popular Amenities</h3>
                <div className='space-y-2 text-sm text-gray-700'>
                  {["Free WiFi", "Pool", "Spa", "Gym", "Parking"].map(
                    (amenity) => (
                      <label
                        key={amenity}
                        className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='checkbox'
                          className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                        />
                        {amenity}
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Results List */}
          <main className='w-full lg:w-3/4'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600'>
                24 properties found in Maldives
              </h1>

              {/* Sort & Map Toggle */}
              <div className='flex gap-4'>
                <select className='border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white'>
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
                <button className='hidden md:flex items-center gap-2 border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white hover:bg-gray-50 font-medium'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'></path>
                  </svg>
                  Show Map
                </button>
              </div>
            </div>

            <div className='space-y-4'>
              {/* Logic: Map through filtered results */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className='bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all hover:border-blue-200 group'>
                  <div className='w-full md:w-1/3 bg-gray-200 h-48 md:h-auto relative overflow-hidden'>
                    {/* Placeholder Image */}
                    <div className='absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-700'></div>
                  </div>
                  <div className='p-5 flex-1 flex flex-col justify-between'>
                    <div>
                      <div className='flex justify-between items-start mb-1'>
                        <h3 className='text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors'>
                          Ocean View Villa {item}
                        </h3>
                        <div className='flex flex-col items-end'>
                          <div className='flex items-center gap-1 bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-sm font-bold'>
                            4.8 ★
                          </div>
                          <span className='text-xs text-gray-500 mt-1'>
                            124 reviews
                          </span>
                        </div>
                      </div>
                      <p className='text-sm text-gray-500 mb-3 flex items-center gap-1'>
                        <svg
                          className='w-3 h-3'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                        </svg>
                        0.5 miles from beach
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {["Free Breakfast", "Pool", "Air Conditioning"].map(
                          (am) => (
                            <span
                              key={am}
                              className='text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200'>
                              {am}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className='flex justify-between items-end border-t border-gray-100 pt-4 mt-auto'>
                      <div>
                        <p className='text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded mb-1 inline-block'>
                          Free Cancellation
                        </p>
                      </div>
                      <div className='text-right'>
                        <p className='text-xs text-gray-500 line-through mb-0.5'>
                          ${300 + item * 20}
                        </p>
                        <p className='text-2xl font-bold text-gray-900'>
                          ${250 + item * 20}
                        </p>
                        <p className='text-xs text-gray-500 mb-2'>
                          + taxes and fees
                        </p>
                        <Link
                          href={`/hotel/${item}`}
                          className='bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition inline-block text-center w-full'>
                          See availability
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className='mt-8 flex justify-center pb-8'>
              <div className='flex gap-1 border border-gray-200 rounded-md overflow-hidden shadow-sm bg-white'>
                <button
                  className='px-4 py-2 hover:bg-gray-50 text-gray-400'
                  disabled>
                  Prev
                </button>
                <button className='px-4 py-2 bg-blue-50 text-blue-600 font-medium border-x border-gray-200'>
                  1
                </button>
                <button className='px-4 py-2 hover:bg-gray-50 text-gray-600 border-r border-gray-200'>
                  2
                </button>
                <button className='px-4 py-2 hover:bg-gray-50 text-gray-600 border-r border-gray-200'>
                  3
                </button>
                <button className='px-4 py-2 hover:bg-gray-50 text-gray-600'>
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
