import Link from "next/link";

export default function ManageHotelPage({ params }) {
  // Logic: Extract params.id to determine if editing existing or adding 'new'
  const { id } = params;
  const isNew = id === "new";

  return (
    <div className='p-6 md:p-10 max-w-5xl mx-auto'>
      <div className='mb-6'>
        <Link
          href='/owner/hotels'
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
          Back to My Properties
        </Link>
      </div>

      <div className='flex justify-between items-center mb-8 pb-4 border-b border-gray-200'>
        <h1 className='text-3xl font-bold text-gray-900'>
          {isNew ? "Create New Listing" : `Manage Property #${id}`}
        </h1>
        <div className='flex gap-3'>
          <button className='px-4 py-2 border border-gray-300 rounded font-medium text-gray-700 bg-white hover:bg-gray-50'>
            Save Draft
          </button>
          <button className='px-4 py-2 bg-blue-600 rounded font-medium text-white hover:bg-blue-700'>
            Submit Listing
          </button>
        </div>
      </div>

      {/* Logic: Complex form state handling here using React Hook Form */}
      <div className='space-y-8'>
        {/* Basic Info Section */}
        <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
          <h2 className='text-xl font-bold mb-4'>Basic Information</h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Property Name
              </label>
              <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                placeholder='e.g. Luxury Ocean Villa'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Description
              </label>
              <textarea
                rows='4'
                className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                placeholder='Describe your property...'></textarea>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Property Type
                </label>
                <select className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'>
                  <option>Hotel</option>
                  <option>Resort</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
          <h2 className='text-xl font-bold mb-4'>Location</h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Street Address
              </label>
              <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
              />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='col-span-2'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  City
                </label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  State
                </label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Zip Code
                </label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                />
              </div>
            </div>
            {/* Logic: Map pin drag implementation */}
            <div className='h-48 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-500 border-dashed'>
              Interactive Map Picker Placeholder
            </div>
          </div>
        </section>

        {/* Rooms & Pricing (simplified for UI) */}
        <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold'>Rooms & Pricing</h2>
            <button className='text-sm font-medium text-blue-600 hover:text-blue-800'>
              + Add Room Type
            </button>
          </div>

          <div className='border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Room Name
                </label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                  defaultValue='Deluxe King'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Base Price / Night ($)
                </label>
                <input
                  type='number'
                  className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                  defaultValue='150'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Capacity
                </label>
                <input
                  type='number'
                  className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none'
                  defaultValue='2'
                />
              </div>
            </div>
            {/* Logic: Dynamic Amenities selection array */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Room Amenities
              </label>
              <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-500'
                placeholder='e.g. WiFi, Sea View, Balcony'
              />
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
          <h2 className='text-xl font-bold mb-4'>Property Photos</h2>
          {/* Logic: Integration with AWS S3 / Cloudflare Drag and Drop uploads */}
          <div className='border-2 border-dashed border-gray-300 rounded-lg p-10 text-center hover:bg-gray-50 cursor-pointer transition'>
            <svg
              className='mx-auto h-12 w-12 text-gray-400 mb-3'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
            </svg>
            <p className='text-gray-600 font-medium'>
              Click to upload or drag and drop
            </p>
            <p className='text-xs text-gray-500 mt-1'>
              SVG, PNG, JPG or GIF (max. 5MB)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
