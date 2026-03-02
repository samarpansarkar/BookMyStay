import Link from "next/link";

export default function HotelDetailsPage({ params }) {
  // Logic: Extract params.id to fetch hotel details
  const { id } = params;

  return (
    <div className='bg-gray-50 min-h-screen pb-12'>
      {/* Navigation Breadcrumbs */}
      <div className='bg-white border-b py-3'>
        <div className='container mx-auto px-4 md:px-8 text-sm text-gray-500'>
          <Link href='/' className='hover:text-blue-600'>
            Home
          </Link>
          <span className='mx-2'>&gt;</span>
          <Link href='/search' className='hover:text-blue-600'>
            Hotels
          </Link>
          <span className='mx-2'>&gt;</span>
          <span className='text-gray-900 font-medium'>
            Ocean View Villa {id}
          </span>
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-8 mt-6'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-1'>
              Ocean View Villa {id}
            </h1>
            <div className='flex items-center gap-2 text-sm text-gray-600 mb-2'>
              <span className='bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold'>
                4.8
              </span>
              <span className='font-semibold text-gray-800'>Excellent</span>
              <span>· 124 reviews</span>
              <span>·</span>
              <span className='flex items-center gap-1'>
                <svg
                  className='w-4 h-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                </svg>
                Maldives, Beachfront
              </span>
            </div>
          </div>

          <div className='flex gap-3'>
            <button className='flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition shadow-sm font-medium text-gray-700'>
              <svg
                className='w-5 h-5 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path>
              </svg>
              Save
            </button>
            <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-md font-medium'>
              Reserve
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden'>
          <div className='md:col-span-2 md:row-span-2 h-64 md:h-[400px] bg-gray-300 relative'>
            {/* Logic: Replace with real image */}
            <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200'></div>
          </div>
          <div className='hidden md:block h-32 md:h-[196px] bg-gray-300 relative'>
            <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200'></div>
          </div>
          <div className='hidden md:block h-32 md:h-[196px] bg-gray-300 relative'>
            <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200'></div>
            <div className='absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-black/40 transition'>
              + 12 Photos
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-2/3'>
            {/* Description */}
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6'>
              <h2 className='text-2xl font-bold mb-4'>About this property</h2>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Experience ultimate luxury at our Ocean View Villa. Located
                right on the pristine white sands of the Maldives, this stunning
                property offers breathtaking panoramic views of the turquoise
                Indian Ocean. Enjoy exceptional service, world-class amenities,
                and the perfect escape from reality.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                Our villa features spacious living areas, a private infinity
                pool, direct beach access, and personalized butler service
                ensuring a flawless stay for you and your guests.
              </p>
            </div>

            {/* Amenities */}
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6'>
              <h2 className='text-2xl font-bold mb-6'>Popular Amenities</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8'>
                {[
                  "Free High-Speed WiFi",
                  "Private Pool",
                  "Air Conditioning",
                  "Flat-screen TV",
                  "Beachfront",
                  "Restaurant",
                  "Spa",
                  "Bar",
                  "Room Service",
                ].map((amenity) => (
                  <div
                    key={amenity}
                    className='flex items-center gap-3 text-gray-700'>
                    <div className='w-6 h-6 bg-blue-50 text-blue-600 rounded flex items-center justify-center'>
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'></path>
                      </svg>
                    </div>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Location */}
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6'>
              <h2 className='text-2xl font-bold mb-4'>Location</h2>
              <p className='text-gray-500 mb-4'>Male Atoll, Maldives</p>
              <div className='w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300'>
                {/* Logic: Integrate Mapbox or Google Maps here */}
                <span className='text-gray-500 font-medium bg-white px-4 py-2 rounded shadow-sm'>
                  Interactive Map Placeholder
                </span>
              </div>
            </div>

            {/* Reviews */}
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>Guest Reviews</h2>
                <div className='text-right'>
                  <div className='text-3xl font-bold text-blue-600'>
                    4.8<span className='text-xl text-gray-400'>/5</span>
                  </div>
                  <div className='text-sm text-gray-500'>
                    Based on 124 reviews
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                {/* Single Review */}
                <div className='border-b border-gray-100 pb-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold'>
                        JD
                      </div>
                      <div>
                        <p className='font-bold'>John Doe</p>
                        <p className='text-xs text-gray-500'>
                          United States · October 2024
                        </p>
                      </div>
                    </div>
                    <div className='bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm font-bold'>
                      5.0
                    </div>
                  </div>
                  <p className='text-gray-700 mt-3 text-sm italic'>
                    "Absolutely incredible stay! The views were mesmerizing, the
                    staff was extremely attentive, and the food was out of this
                    world. Highly recommend!"
                  </p>
                </div>
              </div>
              <button className='mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition'>
                Read all 124 reviews
              </button>
            </div>
          </div>

          {/* Availability & Booking Box */}
          <div className='w-full lg:w-1/3'>
            <div className='sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-gray-200 lg:-mt-16 relative z-10'>
              <div className='flex items-end gap-2 mb-6 pb-6 border-b border-gray-100'>
                <span className='text-3xl font-bold text-gray-900'>$299</span>
                <span className='text-gray-500 mb-1'>/ night</span>
              </div>

              {/* Logic: Date selection state */}
              <div className='space-y-4 mb-6'>
                <div className='grid grid-cols-2 gap-3 border border-gray-300 rounded-lg p-3'>
                  <div className='border-r border-gray-200'>
                    <label className='block text-xs font-bold text-gray-700 uppercase mb-1'>
                      Check-in
                    </label>
                    <input
                      type='date'
                      className='w-full outline-none text-gray-700 bg-transparent text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-bold text-gray-700 uppercase mb-1'>
                      Check-out
                    </label>
                    <input
                      type='date'
                      className='w-full outline-none text-gray-700 bg-transparent text-sm'
                    />
                  </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-3'>
                  <label className='block text-xs font-bold text-gray-700 uppercase mb-1'>
                    Guests
                  </label>
                  <select className='w-full outline-none text-gray-700 bg-transparent text-sm'>
                    <option>2 Adults, 0 Children</option>
                    <option>2 Adults, 1 Child</option>
                  </select>
                </div>
              </div>

              {/* Room Types */}
              <div className='mb-6'>
                <h3 className='font-bold text-sm mb-3 text-gray-700'>
                  Available Rooms
                </h3>
                <div className='space-y-3'>
                  {/* Room Card */}
                  <div className='border border-blue-500 bg-blue-50 rounded-lg p-3 cursor-pointer'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='font-bold text-blue-900 text-sm'>
                          Deluxe Ocean Villa
                        </p>
                        <p className='text-xs text-blue-700 mt-1'>
                          1 King Bed · Sea View
                        </p>
                      </div>
                      <div className='w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white'>
                        ✓
                      </div>
                    </div>
                  </div>
                  {/* Room Card */}
                  <div className='border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-gray-300 transition'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='font-bold text-gray-700 text-sm'>
                          Premium Water Villa
                        </p>
                        <p className='text-xs text-gray-500 mt-1'>
                          1 King Bed · Pool Access
                        </p>
                      </div>
                      <div className='text-sm font-bold text-gray-900'>
                        +$150<span className='text-xs font-normal'>/nt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className='space-y-2 mb-6 text-sm text-gray-600'>
                <div className='flex justify-between'>
                  <span>$299 x 5 nights</span>
                  <span>$1,495</span>
                </div>
                <div className='flex justify-between'>
                  <span>Cleaning fee</span>
                  <span>$50</span>
                </div>
                <div className='flex justify-between'>
                  <span>Taxes & fees</span>
                  <span>$185</span>
                </div>
              </div>

              <div className='flex justify-between items-center mb-6 pt-4 border-t border-gray-200 font-bold text-lg text-gray-900'>
                <span>Total</span>
                <span>$1,730</span>
              </div>

              {/* Logic: Handle checkout transition */}
              <Link
                href={`/booking/${id}`}
                className='w-full bg-blue-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg block text-center'>
                Continue to Book
              </Link>
              <p className='text-center text-xs text-gray-500 mt-4'>
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
