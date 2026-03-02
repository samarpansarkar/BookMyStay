import Link from "next/link";

export default function BookingCheckoutPage({ params }) {
  const { id } = params;

  return (
    <div className='bg-gray-50 min-h-[calc(100vh-theme(spacing.16))] py-8'>
      <div className='container mx-auto px-4 md:px-8 max-w-5xl'>
        <div className='mb-8'>
          <Link
            href={`/hotel/${id}`}
            className='text-blue-600 hover:underline flex items-center gap-1 font-medium text-sm'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'></path>
            </svg>
            Back to hotel
          </Link>
          <h1 className='text-3xl font-bold text-gray-900 mt-4'>
            Confirm and pay
          </h1>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Column: Flow */}
          <div className='w-full lg:w-2/3 space-y-6'>
            {/* Trip details */}
            <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
              <div className='flex justify-between items-center mb-6 border-b border-gray-100 pb-4'>
                <h2 className='text-2xl font-bold'>Your trip</h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='font-bold text-gray-900'>Dates</h3>
                  <p className='text-gray-600 mt-1'>Oct 15 - Oct 20, 2024</p>
                </div>
                <div className='text-right md:text-left'>
                  <button className='text-sm font-bold underline text-gray-900 hover:text-blue-600'>
                    Edit
                  </button>
                </div>

                <div>
                  <h3 className='font-bold text-gray-900'>Guests</h3>
                  <p className='text-gray-600 mt-1'>2 guests</p>
                </div>
                <div className='text-right md:text-left'>
                  <button className='text-sm font-bold underline text-gray-900 hover:text-blue-600'>
                    Edit
                  </button>
                </div>
              </div>
            </section>

            {/* Guest details form */}
            <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
              <h2 className='text-2xl font-bold mb-6'>Guest info</h2>

              {/* Logic: Auto-fill if user profile exists */}
              <form className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                      defaultValue='John'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                      defaultValue='Doe'
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none block bg-gray-50 text-gray-500'
                    defaultValue='john.doe@example.com'
                    disabled
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Booking confirmation will be sent here.
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Phone number
                  </label>
                  <input
                    type='tel'
                    className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                  />
                </div>
              </form>
            </section>

            {/* Payment section */}
            <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>Pay with</h2>
                <div className='flex gap-2'>
                  {/* Logic: Add payment icons */}
                  <div className='w-10 h-6 bg-gray-200 rounded border border-gray-300'></div>
                  <div className='w-10 h-6 bg-gray-200 rounded border border-gray-300'></div>
                </div>
              </div>

              {/* Logic: Integrate Stripe/Razorpay elements here */}
              <div className='border border-gray-300 rounded-lg p-4 bg-gray-50 text-center text-gray-500 min-h-[150px] flex items-center justify-center'>
                <p>
                  Secure Payment Gateway Integration (Stripe / Razorpay)
                  Placeholder
                </p>
              </div>

              <hr className='my-6 border-gray-200' />

              <p className='text-xs text-gray-500 mb-6 leading-relaxed'>
                By selecting the button below, I agree to the{" "}
                <a href='#' className='underline font-medium'>
                  House Rules
                </a>
                ,{" "}
                <a href='#' className='underline font-medium'>
                  Cancellation Policy
                </a>
                , and BookMyStay's{" "}
                <a href='#' className='underline font-medium'>
                  Terms of Service
                </a>
                .
              </p>

              <button className='w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg'>
                Confirm and Pay
              </button>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className='w-full lg:w-1/3'>
            <div className='sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-gray-200'>
              <div className='flex gap-4 pb-6 border-b border-gray-100 mb-6'>
                <div className='w-24 h-24 bg-gray-200 rounded-lg shrink-0'>
                  <div className='w-full h-full bg-gradient-to-tr from-gray-400 to-gray-200 rounded-lg'></div>
                </div>
                <div>
                  <p className='text-xs text-gray-500 uppercase font-bold tracking-wide'>
                    Hotel
                  </p>
                  <h3 className='font-bold text-gray-900 leading-snug'>
                    Luxury Resort & Spa Maldives
                  </h3>
                  <p className='text-sm text-gray-600 mt-1 flex items-center gap-1'>
                    <span className='font-bold text-gray-900'>4.8</span> ★ ·
                    (124 reviews)
                  </p>
                </div>
              </div>

              <h3 className='text-xl font-bold mb-4'>Price details</h3>

              <div className='space-y-3 mb-6 text-gray-600'>
                <div className='flex justify-between'>
                  <span>$299 x 5 nights</span>
                  <span>$1,495</span>
                </div>
                <div className='flex justify-between'>
                  <span>Cleaning fee</span>
                  <span>$50</span>
                </div>
                <div className='flex justify-between'>
                  <span className='underline cursor-pointer'>
                    Taxes and fees
                  </span>
                  <span>$185</span>
                </div>

                {/* Logic: Discount/Coupon handling */}
                <div className='pt-4 mt-4 border-t border-gray-100 flex gap-2'>
                  <input
                    type='text'
                    placeholder='Coupon code'
                    className='flex-1 p-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500'
                  />
                  <button className='bg-gray-100 text-gray-700 px-4 py-2 rounded font-medium hover:bg-gray-200 text-sm'>
                    Apply
                  </button>
                </div>
              </div>

              <div className='flex justify-between items-center pt-4 border-t border-gray-200 text-xl font-extrabold text-gray-900'>
                <span>Total (USD)</span>
                <span>$1,730</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
