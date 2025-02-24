import { Link } from "react-router-dom";
import heroImage from "../assets/HeroImg2.jpg";

const HeroSection = () => {
  return (
    <div className='relative mx-auto my-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20'>
      <div className='mx-auto max-w-xl lg:max-w-screen-xl'>
        <div className='mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left'>
          <div className='mb-6 max-w-xl'>
            <div>
              <p className='bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900'>
                This is BookMy Stay
              </p>
            </div>
            <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug'>
              <span className='inline-block text-green-500'>India's</span> #1
              online private <br /> home stay booking...
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Hi, Welcome to book my stay. We have 1.5M active user.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start'>
            <Link
              to='/stay'
              className='inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto'>
              {" "}
              Book Home Stay{" "}
            </Link>
            <Link
              to='/'
              className='inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-green-500 px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto'>
              Contact With Us
            </Link>
          </div>

          <div className='mt-6 flex justify-center -space-x-4 lg:justify-start'>
            <img
              className='h-12 w-12 rounded-full ring ring-white'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
            <img
              className='h-12 w-12 rounded-full ring ring-white'
              src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
            <img
              className='h-12 w-12 rounded-full ring ring-white'
              src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
            />
            <div className=''>
              <span className='pl-8 font-semibold'>Customer Reviews</span>
              <div className='flex w-auto items-center justify-center space-x-1 pl-8'>
                <svg
                  className='h-auto w-5 fill-current text-yellow-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'>
                  <path d='M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z' />
                </svg>
                <span className='text-sm font-medium text-slate-400'>
                  {" "}
                  4.2 •{" "}
                  <Link to='#' className='text-sm font-normal underline'>
                    329K reviews
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start'>
          <img src={heroImage} alt='hero image' className='rounded-l-full' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
