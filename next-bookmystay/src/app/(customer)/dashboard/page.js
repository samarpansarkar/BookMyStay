import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CustomerDashboardPage() {
  return (
    <div className='max-w-5xl mx-auto space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-extrabold text-slate-900'>
          Welcome back, John!
        </h1>
        <Link
          href='/stay'
          className='px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors'>
          Book a Stay
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200'>
          <p className='text-sm font-medium text-slate-500 uppercase tracking-widest mb-1'>
            Upcoming Trips
          </p>
          <p className='text-3xl font-black text-slate-900'>2</p>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200'>
          <p className='text-sm font-medium text-slate-500 uppercase tracking-widest mb-1'>
            Past Bookings
          </p>
          <p className='text-3xl font-black text-slate-900'>14</p>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200'>
          <p className='text-sm font-medium text-slate-500 uppercase tracking-widest mb-1'>
            Saved Homes
          </p>
          <p className='text-3xl font-black text-slate-900'>5</p>
        </div>
      </div>

      <div>
        <h2 className='text-xl font-bold text-slate-800 mb-4'>
          Your Next Adventure
        </h2>
        <div className='bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 items-center'>
          <div className='w-full sm:w-1/3 aspect-video relative rounded-2xl overflow-hidden shrink-0'>
            <Image
              src='https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Upcoming Trip'
              className='object-cover'
            />
          </div>
          <div className='flex-1 w-full'>
            <div className='inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider'>
              In 14 Days
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-2'>
              Luxury Emerald Villa
            </h3>
            <div className='flex items-center gap-4 text-slate-600 mb-6 font-medium text-sm'>
              <span className='flex items-center gap-1.5'>
                <MapPin className='w-4 h-4' /> South Goa, India
              </span>
              <span className='flex items-center gap-1.5'>
                <CalendarDays className='w-4 h-4' /> Oct 12 - Oct 17
              </span>
            </div>
            <div className='flex gap-4'>
              <button className='px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors'>
                View Details
              </button>
              <button className='px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors'>
                Contact Host
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold text-slate-800'>Recent Searches</h2>
          <button className='text-sm font-semibold text-green-600 hover:text-green-700'>
            View all
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[
            {
              loc: "Manali, Himachal",
              range: "Any week",
              px: "https://images.unsplash.com/photo-1623194849319-ebd04085b1de?auto=format&fit=crop&q=60&w=400",
            },
            {
              loc: "New Delhi, India",
              range: "Nov 1 - Nov 5",
              px: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=60&w=400",
            },
            {
              loc: "Ooty, Tamil Nadu",
              range: "Dec 20 - Dec 28",
              px: "https://images.unsplash.com/photo-1588665727181-700bdf19db8c?auto=format&fit=crop&q=60&w=400",
            },
            {
              loc: "Udaipur, Rajasthan",
              range: "Any week",
              px: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=60&w=400",
            },
          ].map((search, idx) => (
            <div
              key={idx}
              className='bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer group'>
              <div className='w-12 h-12 rounded-xl overflow-hidden shrink-0 relative'>
                <Image
                  src={search.px}
                  fill
                  alt='Location'
                  className='object-cover group-hover:scale-110 transition-transform'
                />
              </div>
              <div>
                <p className='font-bold text-slate-800 text-sm truncate w-[120px]'>
                  {search.loc}
                </p>
                <p className='text-xs font-medium text-slate-500'>
                  {search.range}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
