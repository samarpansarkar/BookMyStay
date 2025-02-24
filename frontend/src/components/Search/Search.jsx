const Search = () => {
  return (
    <div className='m-10 w-screen max-w-screen-md '>
      <div className='flex flex-col'>
        <div className='rounded-xl   p-6'>
          <form className=' p-2'>
            <div className='relative mb-10 w-full flex  items-center justify-between rounded-md'>
              <svg
                className='absolute left-2 block h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle cx='11' cy='11' r='8' className=''></circle>
                <line x1='21' y1='21' x2='16.65' y2='16.65' className=''></line>
              </svg>
              <input
                type='name'
                name='search'
                className='h-12 w-full cursor-text rounded-full border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                placeholder='Search by home stay name, type, place, etc'
              />
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {/* <div className='flex flex-col'>
                <label
                  htmlFor='name'
                  className='text-sm font-medium text-stone-600'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Raspberry juice'
                  className='mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                />
              </div> */}

              <div className='flex flex-col'>
                <label
                  htmlFor='manufacturer'
                  className='text-sm font-medium text-stone-600'>
                  Rating
                </label>

                <select
                  id='manufacturer'
                  className='mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'>
                  <option>Above 1 ⭐</option>
                  <option>Above 2 ⭐⭐</option>
                  <option>Above 3 ⭐⭐⭐</option>
                  <option>Above 4 ⭐⭐⭐⭐</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor='date'
                  className='text-sm font-medium text-stone-600'>
                  Check In
                </label>
                <input
                  type='date'
                  id='date'
                  className='mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                />
              </div>
              <div className='flex flex-col'>
                <label
                  htmlFor='date'
                  className='text-sm font-medium text-stone-600'>
                  Check Out
                </label>
                <input
                  type='date'
                  id='date'
                  className='mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                />
              </div>
            </div>

            <div className='mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex'>
              <button className='rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring'>
                Reset
              </button>
              <button className='rounded-lg bg-green-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring'>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
