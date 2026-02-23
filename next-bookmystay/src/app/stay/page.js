"use client";

import { useState } from "react";
import Link from "next/link";
import StayCard from "@/components/StayCard";
import { Search } from "lucide-react";

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

        <div className='max-w-3xl mx-auto bg-white rounded-2xl p-2 flex items-center shadow-lg relative z-10'>
          <input
            type='text'
            placeholder='Search by city, type, or address...'
            className='w-full px-4 py-3 outline-none text-slate-700'
          />
          <button className='bg-green-600 hover:bg-green-700 text-white p-3 px-6 rounded-xl flex items-center gap-2 transition-colors font-medium'>
            <Search className='w-5 h-5' /> Search
          </button>
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
