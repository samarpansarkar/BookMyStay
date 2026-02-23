"use client";

import { useState } from "react";
import Link from "next/link";
import StayCard from "@/components/StayCard";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function StayPage() {
  const [loading, setLoading] = useState(false);
  const stay = Array.from({ length: 15 }, (_, i) => ({ id: i + 1 }));

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-start bg-slate-50 pb-20'>
      <div className='w-full bg-green-100 py-12 px-4 shadow-sm relative overflow-hidden'>
        {/* Soft background blobs */}
        <div className='absolute inset-0 z-0 opacity-40'>
          <div className='absolute top-0 right-10 w-64 h-64 bg-green-300 rounded-full blur-[80px]'></div>
          <div className='absolute bottom-0 left-10 w-64 h-64 bg-teal-300 rounded-full blur-[80px]'></div>
        </div>

        <div className='max-w-4xl mx-auto relative z-10 text-center mb-8'>
          <h1 className='text-4xl font-black text-slate-800 mb-4'>
            Find Your Perfect Stay
          </h1>
          <p className='text-slate-600 max-w-lg mx-auto'>
            Explore hundreds of beautiful homes and apartments crafted for your
            comfort and budget.
          </p>
        </div>

        <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-300/50 p-2 sm:p-2 sm:pl-8 flex flex-col md:flex-row items-center gap-2 md:gap-0 relative z-10'>
          <div className='flex-1 w-full flex items-center xl:gap-4 px-4 py-2 md:border-r border-slate-100'>
            <MapPin className='w-5 h-5 text-green-500 hidden xl:block' />
            <div className='w-full text-left'>
              <p className='text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 mt-1 md:mt-0'>
                Location
              </p>
              <input
                type='text'
                placeholder='Where are you going?'
                className='w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent text-sm focus:ring-0 p-0 border-0'
              />
            </div>
          </div>

          <div className='flex-1 w-full flex items-center xl:gap-4 px-4 py-2 md:border-r border-slate-100'>
            <Calendar className='w-5 h-5 text-green-500 hidden xl:block' />
            <div className='w-full text-left'>
              <p className='text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 mt-1 md:mt-0'>
                Dates
              </p>
              <input
                type='text'
                placeholder='Add dates'
                className='w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent text-sm focus:ring-0 p-0 border-0'
              />
            </div>
          </div>

          <div className='flex-1 w-full flex items-center xl:gap-4 px-4 py-2 md:border-r border-slate-100'>
            <Users className='w-5 h-5 text-green-500 hidden xl:block' />
            <div className='w-full text-left'>
              <p className='text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 mt-1 md:mt-0'>
                Guests
              </p>
              <input
                type='text'
                placeholder='Add guests'
                className='w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent text-sm focus:ring-0 p-0 border-0'
              />
            </div>
          </div>

          <div className='w-full md:w-auto p-1.5 flex-shrink-0'>
            <button className='w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl p-3 sm:px-8 flex items-center justify-center gap-2 transition-all shadow-md shadow-green-600/20 active:scale-95'>
              <Search className='w-5 h-5' />
              <span className='font-semibold'>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-bold text-slate-800'>
            Available Stays{" "}
            <span className='text-sm font-medium text-slate-500 bg-slate-200 px-3 py-1 rounded-full ml-2'>
              15 results
            </span>
          </h2>
          <select className='bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-green-500/20'>
            <option>Most popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Highest Rated</option>
          </select>
        </div>

        {stay.length < 1 ? (
          <div className='text-center text-2xl text-slate-400 mt-20 py-20 bg-white rounded-3xl border border-dashed border-slate-300'>
            <Search className='w-16 h-16 mx-auto mb-4 text-slate-300' />
            Sorry, no properties found matching your criteria.
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'>
            {stay.map((item) => (
              <Link
                href={`/stay/${item.id}`}
                key={item.id}
                className='block group'>
                <StayCard stay={item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
