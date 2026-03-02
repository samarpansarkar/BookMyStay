import Link from "next/link";

export default function UserBookingsPage() {
  return (
    <div className='bg-gray-50 min-h-[calc(100vh-theme(spacing.16))] py-8'>
      <div className='container mx-auto px-4 md:px-8 max-w-5xl'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>My Bookings</h1>

        {/* Tabs */}
        <div className='flex gap-4 border-b border-gray-200 mb-8'>
          <button className='pb-3 border-b-2 border-blue-600 font-medium text-blue-600 px-2'>
            Upcoming
          </button>
          <button className='pb-3 font-medium text-gray-500 hover:text-gray-800 px-2 transition'>
            Past
          </button>
          <button className='pb-3 font-medium text-gray-500 hover:text-gray-800 px-2 transition'>
            Cancelled
          </button>
        </div>

        {/* Logic: Map through actual bookings */}
        <div className='space-y-6'>
          {/* Single Booking Card */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row'>
              <div className='w-full md:w-48 h-40 bg-gray-200 relative'>
                {/* Placeholder */}
                <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-300'></div>
                <div className='absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded'>
                  Confirmed
                </div>
              </div>

              <div className='p-5 flex-1 flex flex-col justify-between'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4'>
                  <div>
                    <p className='text-xs font-bold text-gray-500 uppercase tracking-wide mb-1'>
                      Booking #BMS-1234{item}
                    </p>
                    <h2 className='text-xl font-bold text-gray-900 border-b border-transparent hover:border-blue-600 inline-block cursor-pointer'>
                      <Link href={`/hotels/${item}`}>
                        Luxury Resort & Spa Maldives
                      </Link>
                    </h2>
                    <p className='text-sm text-gray-600 mt-1'>
                      Male Atoll, Maldives
                    </p>
                  </div>
                  <div className='text-left md:text-right w-full md:w-auto p-3 bg-gray-50 rounded border border-gray-100'>
                    <p className='text-xs text-gray-500 uppercase font-bold mb-1'>
                      Total Paid
                    </p>
                    <p className='text-xl font-bold text-green-700'>
                      ${800 + item * 200}
                    </p>
                  </div>
                </div>

                <div className='flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-gray-100'>
                  <div>
                    <p className='text-xs text-gray-500 uppercase font-bold mb-1'>
                      Check-in
                    </p>
                    <p className='font-medium text-gray-900'>Oct 15, 2024</p>
                    <p className='text-xs text-gray-500'>3:00 PM</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-500 uppercase font-bold mb-1'>
                      Check-out
                    </p>
                    <p className='font-medium text-gray-900'>Oct 20, 2024</p>
                    <p className='text-xs text-gray-500'>11:00 AM</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-500 uppercase font-bold mb-1'>
                      Details
                    </p>
                    <p className='font-medium text-gray-900'>
                      2 Guests · 5 Nights
                    </p>
                    <p className='text-xs text-gray-500'>1x Ocean Villa</p>
                  </div>
                  <div className='mt-auto ml-auto flex gap-3 w-full md:w-auto'>
                    <button className='flex-1 md:flex-none px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm font-medium rounded transition shadow-sm'>
                      Download Invoice
                    </button>
                    <button className='flex-1 md:flex-none px-4 py-2 border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 text-sm font-medium rounded transition shadow-sm'>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
