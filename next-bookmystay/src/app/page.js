import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-gray-50 flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))]'>
      {/* Hero Section */}
      <section className='w-full bg-blue-600 text-white py-20 px-4 md:px-8 text-center hero-pattern text-shadow-md'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md'>
          Find Your Perfect Stay
        </h1>
        <p className='text-lg md:text-xl font-medium mb-8 text-blue-100 max-w-2xl mx-auto drop-shadow'>
          From cozy cottages to luxury resorts, discover and book accommodations
          around the globe.
        </p>

        {/* Search Bar Placeholder */}
        <div className='max-w-4xl mx-auto bg-white rounded-lg p-2 md:p-4 shadow-lg flex flex-col md:flex-row items-center gap-2 md:gap-4 ring-4 ring-blue-500/30'>
          {/* Logic: Implement fully functional search input, date picker, guests selector here */}
          <input
            type='text'
            placeholder='Where are you going?'
            className='w-full md:w-1/3 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800'
          />
          <div className='flex w-full md:w-1/3 gap-2'>
            <input
              type='date'
              className='w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500'
            />
            <input
              type='date'
              className='w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500'
            />
          </div>

          <select className='w-full md:w-[15%] p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600 bg-white'>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>

          <Link
            href='/search'
            className='w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition flex-shrink-0 text-center shadow-md hover:shadow-lg translate-y-0 hover:-translate-y-0.5 active:translate-y-0 transition-transform'>
            Search
          </Link>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className='container mx-auto px-4 md:px-8 py-16 w-full'>
        <div className='flex justify-between items-end mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              Featured Destinations
            </h2>
            <p className='text-gray-600'>
              Top rated properties our guests love
            </p>
          </div>
          <Link
            href='/search'
            className='text-blue-600 font-semibold hover:text-blue-800 transition hidden md:block'>
            View All →
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Logic: Map through actual featured hotels fetched from API */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer'>
              <div className='h-48 bg-gray-200 relative overflow-hidden'>
                {/* Placeholder Image */}
                <div className='absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-200 group-hover:scale-105 transition-transform duration-500'></div>
                <div className='absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm text-gray-400 hover:text-red-500 transition'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
                  </svg>
                </div>
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-start mb-1'>
                  <h3 className='text-lg font-bold text-gray-900 line-clamp-1'>
                    Luxury Resort & Spa {item}
                  </h3>
                  <div className='flex items-center text-sm font-semibold gap-1 text-gray-700 bg-gray-50 px-1 rounded'>
                    <span>★</span> 4.{8 + (item % 2)}
                  </div>
                </div>
                <p className='text-gray-500 text-sm mb-3'>Maldives</p>
                <div className='flex justify-between items-end'>
                  <p className='font-bold text-lg text-gray-900'>
                    ${150 + item * 50}{" "}
                    <span className='text-sm font-normal text-gray-500'>
                      / night
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-8 text-center md:hidden'>
          <Link
            href='/search'
            className='text-blue-600 font-semibold hover:text-blue-800 transition block py-2 border border-blue-200 rounded-lg'>
            Search All Properties
          </Link>
        </div>
      </section>

      {/* Minimal Call to Action */}
      <section className='w-full bg-blue-50 py-16 px-4 text-center border-t border-blue-100'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          List your property on BookMyStay
        </h2>
        <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
          Join thousands of hosts and earn money by renting out your space to
          travelers from all over the world.
        </p>
        <button className='bg-white text-blue-600 border border-blue-200 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition shadow-sm'>
          Become a Host
        </button>
      </section>
    </div>
  );
}
