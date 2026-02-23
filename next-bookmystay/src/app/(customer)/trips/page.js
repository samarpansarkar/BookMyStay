import Image from "next/image";
import { MapPin, CalendarDays, ExternalLink } from "lucide-react";

export default function TripsPage() {
  return (
    <div className='max-w-5xl mx-auto space-y-8'>
      <h1 className='text-3xl font-extrabold text-slate-900'>My Trips</h1>

      <div className='space-y-6'>
        {/* Upcoming Trip */}
        <div className='bg-white rounded-3xl p-6 shadow-sm border border-green-200 flex flex-col sm:flex-row gap-6 items-center relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -z-10'></div>

          <div className='w-full sm:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden shrink-0'>
            <Image
              src='https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Upcoming Trip'
              className='object-cover'
            />
          </div>
          <div className='flex-1 w-full'>
            <div className='flex items-center justify-between mb-2'>
              <span className='inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider'>
                Upcoming
              </span>
              <span className='text-sm font-bold text-slate-400'>
                #BK-84729
              </span>
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-2'>
              Luxury Emerald Villa
            </h3>

            <div className='space-y-2 mb-6'>
              <div className='flex items-center gap-3 text-slate-600 font-medium text-sm'>
                <MapPin className='w-4 h-4 text-green-600' /> South Goa, India
              </div>
              <div className='flex items-center gap-3 text-slate-600 font-medium text-sm'>
                <CalendarDays className='w-4 h-4 text-green-600' /> Oct 12, 2024
                - Oct 17, 2024 (5 nights)
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <button className='px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2'>
                View Receipt <ExternalLink className='w-4 h-4' />
              </button>
              <button className='px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors'>
                Manage Booking
              </button>
            </div>
          </div>
        </div>

        {/* Past Trip */}
        <div className='bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 items-center opacity-75 hover:opacity-100 transition-opacity'>
          <div className='w-full sm:w-1/4 aspect-[4/3] relative rounded-2xl overflow-hidden shrink-0'>
            <Image
              src='https://images.unsplash.com/photo-1588665727181-700bdf19db8c?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Past Trip'
              className='object-cover grayscale hover:grayscale-0 transition-all'
            />
          </div>
          <div className='flex-1 w-full'>
            <div className='flex items-center justify-between mb-2'>
              <span className='inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider'>
                Completed
              </span>
              <span className='text-sm font-bold text-slate-400'>
                #BK-11024
              </span>
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>
              Cozy Mountain Cabin
            </h3>

            <div className='flex items-center gap-4 text-slate-500 font-medium text-sm'>
              <span className='flex items-center gap-1.5'>
                <MapPin className='w-4 h-4' /> Ooty, Tamil Nadu
              </span>
              <span className='flex items-center gap-1.5'>
                <CalendarDays className='w-4 h-4' /> Dec 20, 2023 - Dec 28, 2023
              </span>
            </div>
          </div>
          <div className='shrink-0 w-full sm:w-auto'>
            <button className='w-full sm:w-auto px-5 py-2.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors'>
              Book Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
