import { RiTeamFill } from "react-icons/ri";
import { FaPersonSkiing } from "react-icons/fa6";
import { SiEnterprisedb } from "react-icons/si";
const PricingPage = () => {
  return (
    <div className='relative w-screen h-screen bg-green-200'>
      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
          <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-emerald-600/30 sm:block lg:-ml-28 lg:-mt-10 lg:w-32'>
                <defs>
                  <pattern
                    id='2c67e949-4a23-49f7-bf27-ca140852cf21'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'>
                    <circle cx='1' cy='1' r='.7'></circle>
                  </pattern>
                </defs>
                <rect
                  fill='url(#2c67e949-4a23-49f7-bf27-ca140852cf21)'
                  width='52'
                  height='24'></rect>
              </svg>
              <span className='leading-10'>BookMyStay Pricing!!</span>
            </span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Buy subscription to unlock many{" "}
            <span className='text-2xl font-bold'>premium</span> options:
          </p>
        </div>

        <div className='mx-auto grid max-w-screen-md gap-4 px-5 sm:grid-cols-1 sm:px-20 md:grid-cols-3'>
          <div className='flex flex-col items-center rounded-lg border bg-white px-4 py-4 shadow md:items-start'>
            <div className='block h-12 w-12'>
              <FaPersonSkiing size={50} color='green' />
            </div>
            <p className='mt-3 text-lg font-medium'>Personal</p>
            <p className='text-sm'>1. 10% discount in hotel.</p>
            <p className='text-sm'>2. Free premium Lunch.</p>
            <p className='text-sm'>2. No Lucky Coupon.</p>
            <p className='mt-2'>
              <span className='text-3xl font-bold'>₹50</span>
              <span className='text-sm'>/mo</span>
            </p>
            <button className='mx-auto mt-4 block h-12 items-center justify-center rounded-full bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-emerald-500 focus:ring'>
              Get Started
            </button>
          </div>
          <div className='flex flex-col items-center rounded-lg border bg-white px-4 py-4 shadow md:items-start'>
            <div className='block h-12 w-12'>
              <RiTeamFill size={50} color='green' />
            </div>
            <p className='mt-3 text-lg font-medium'>Team</p>
            <p className='text-sm'>1. 30% discount in hotel.</p>
            <p className='text-sm'>2. Free premium Lunch.</p>
            <p className='text-sm'>2. 2 Lucky Coupons in 5 booking.</p>
            <p className='mt-2'>
              <span className='text-3xl font-bold'>₹79</span>
              <span className='text-sm'>/mo</span>
            </p>
            <button className='mx-auto mt-4 block h-12 items-center justify-center rounded-full bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-emerald-500 focus:ring'>
              Get Started
            </button>
          </div>
          <div className='flex flex-col items-center rounded-lg border bg-white px-4 py-4 shadow md:items-start'>
            <div className='block h-12 w-12'>
              <SiEnterprisedb size={50} color='green' />
            </div>
            <p className='mt-3 text-lg font-medium'>Enterprise</p>
            <p className='text-sm'>1. 50% discount in hotel.</p>
            <p className='text-sm'>2. Free premium Lunch.</p>
            <p className='text-sm'>2. 3 Lucky Coupons in 5 booking.</p>
            <p className='mt-2'>
              <span className='text-3xl font-bold'>₹189</span>
              <span className='text-sm'>/mo</span>
            </p>
            <button className='mx-auto mt-4 block h-12 items-center justify-center rounded-full bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-emerald-500 focus:ring'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
