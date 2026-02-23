"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Check,
  Wifi,
  Car,
  Coffee,
  Wind,
  Tv,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import { use } from "react";

export default function StayDetailPage({ params }) {
  const resolvedParams = use(params);

  return (
    <div className='min-h-screen bg-slate-50 pb-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Navigation & Header */}
        <Link
          href='/stay'
          className='inline-flex items-center text-sm font-semibold text-slate-500 hover:text-green-600 mb-6 transition-colors'>
          <ChevronLeft className='w-4 h-4 mr-1' /> Back to Search
        </Link>

        <div className='flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8'>
          <div>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2'>
              Luxury Emerald Villa
            </h1>
            <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600'>
              <span className='flex items-center text-slate-900 font-bold'>
                <Star className='w-4 h-4 mr-1 fill-amber-400 text-amber-400' />{" "}
                4.96{" "}
                <span className='text-slate-500 font-normal underline ml-1 cursor-pointer hover:text-slate-800'>
                  128 reviews
                </span>
              </span>
              <span className='flex items-center'>
                <MapPin className='w-4 h-4 mr-1' /> South Goa, India
              </span>
              <span className='flex items-center text-green-600 bg-green-100 px-2 py-0.5 rounded-full'>
                <ShieldCheck className='w-4 h-4 mr-1' /> Superhost
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <button className='px-4 py-2 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-100 transition-colors'>
              Share
            </button>
            <button className='px-4 py-2 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-100 transition-colors'>
              Save
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className='grid grid-cols-4 grid-rows-2 gap-2 sm:gap-4 rounded-3xl overflow-hidden h-[400px] sm:h-[500px] mb-12'>
          <div className='col-span-4 md:col-span-2 row-span-2 relative cursor-pointer group'>
            <Image
              src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600'
              fill
              alt='Main living area'
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='col-span-2 md:col-span-1 row-span-1 relative cursor-pointer group hidden md:block'>
            <Image
              src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Bedroom'
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='col-span-2 md:col-span-1 row-span-1 relative cursor-pointer group hidden md:block'>
            <Image
              src='https://images.unsplash.com/photo-1600607687931-57d28da590b1?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Kitchen'
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='col-span-2 md:col-span-1 row-span-1 relative cursor-pointer group hidden md:block'>
            <Image
              src='https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Bathroom'
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='col-span-2 md:col-span-1 row-span-1 relative cursor-pointer group hidden md:block'>
            <Image
              src='https://images.unsplash.com/photo-1545042746-ec9e5a59ea1b?auto=format&fit=crop&q=80&w=800'
              fill
              alt='Patio'
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
            <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <span className='text-white font-semibold flex items-center gap-2'>
                <Image
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Cpath d='M8 12h8'/%3E%3Cpath d='M12 8v8'/%3E%3C/svg%3E"
                  alt='Images'
                  width={20}
                  height={20}
                />{" "}
                View all photos
              </span>
            </div>
          </div>
        </div>

        {/* Content & Booking Sidebar */}
        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Main Content */}
          <div className='w-full lg:w-2/3'>
            <div className='flex items-center justify-between pb-6 border-b border-slate-200'>
              <div>
                <h2 className='text-2xl font-bold text-slate-800 mb-1'>
                  Entire villa hosted by Samarpan
                </h2>
                <p className='text-slate-600 font-medium'>
                  6 guests · 3 bedrooms · 4 beds · 3 baths
                </p>
              </div>
              <Image
                src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
                width={56}
                height={56}
                alt='Host profile'
                className='rounded-full ring-2 ring-emerald-500'
              />
            </div>

            <div className='py-8 border-b border-slate-200 text-slate-600 leading-relaxed space-y-4'>
              <p>
                Discover the perfect blend of luxury and tranquility at our
                Emerald Villa. Designed with modern architecture while retaining
                a warm, inviting atmosphere, this space offers an unforgettable
                escape.
              </p>
              <p>
                Enjoy your morning coffee on the spacious sun deck looking over
                the lush green valleys. The villa comes fully equipped with a
                modern kitchen, high-speed Wi-Fi, and a private infinity pool to
                make your stay truly magical.
              </p>
              <button className='text-green-600 font-semibold underline underline-offset-4 hover:text-green-700'>
                Show more
              </button>
            </div>

            <div className='py-8 border-b border-slate-200'>
              <h3 className='text-xl font-bold text-slate-800 mb-6'>
                What this place offers
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { icon: Wifi, label: "Fast Wi-Fi" },
                  { icon: Car, label: "Free parking on premises" },
                  { icon: Wind, label: "Air conditioning" },
                  { icon: Tv, label: "65-inch 4K TV" },
                  { icon: Coffee, label: "Kitchen with coffee maker" },
                  { icon: Check, label: "Self check-in" },
                ].map((amenity, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 text-slate-700 font-medium'>
                    <amenity.icon className='w-6 h-6 text-slate-400' />
                    {amenity.label}
                  </div>
                ))}
              </div>
              <button className='mt-8 px-6 py-3 border-2 border-slate-900 rounded-xl font-bold text-slate-900 hover:bg-slate-50 transition-colors'>
                Show all 32 amenities
              </button>
            </div>
          </div>

          {/* Sticky Booking/Pricing Card */}
          <div className='w-full lg:w-1/3'>
            <div className='sticky top-8 bg-white p-6 rounded-3xl shadow-2xl shadow-slate-200/50 ring-1 ring-slate-200'>
              <div className='flex items-end gap-1 mb-6'>
                <span className='text-3xl font-extrabold text-slate-900'>
                  ₹8,500
                </span>
                <span className='text-slate-500 font-medium pb-1'>/ night</span>
              </div>

              <div className='rounded-xl border border-slate-300 overflow-hidden mb-4'>
                <div className='flex border-b border-slate-300'>
                  <div className='flex-1 p-3 border-r border-slate-300'>
                    <label className='block text-[10px] font-extrabold uppercase text-slate-500'>
                      Check-in
                    </label>
                    <input
                      type='text'
                      placeholder='Add date'
                      className='w-full text-sm font-semibold outline-none text-slate-800 placeholder-slate-400 mt-1'
                    />
                  </div>
                  <div className='flex-1 p-3'>
                    <label className='block text-[10px] font-extrabold uppercase text-slate-500'>
                      Checkout
                    </label>
                    <input
                      type='text'
                      placeholder='Add date'
                      className='w-full text-sm font-semibold outline-none text-slate-800 placeholder-slate-400 mt-1'
                    />
                  </div>
                </div>
                <div className='p-3'>
                  <label className='block text-[10px] font-extrabold uppercase text-slate-500'>
                    Guests
                  </label>
                  <select className='w-full text-sm font-semibold outline-none text-slate-800 mt-1 bg-transparent cursor-pointer'>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
              </div>

              <button className='w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:from-green-400 hover:to-emerald-500 shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] mb-6'>
                Reserve Now
              </button>

              <div className='text-center text-slate-500 text-sm font-medium mb-6'>
                You won't be charged yet
              </div>

              <div className='space-y-3 pb-6 border-b border-slate-200'>
                <div className='flex justify-between text-slate-600'>
                  <span className='underline decoration-slate-300 cursor-pointer'>
                    ₹8,500 x 5 nights
                  </span>
                  <span>₹42,500</span>
                </div>
                <div className='flex justify-between text-slate-600'>
                  <span className='underline decoration-slate-300 cursor-pointer'>
                    Cleaning fee
                  </span>
                  <span>₹2,000</span>
                </div>
                <div className='flex justify-between text-slate-600'>
                  <span className='underline decoration-slate-300 cursor-pointer'>
                    Platform service fee
                  </span>
                  <span>₹1,500</span>
                </div>
              </div>

              <div className='flex justify-between items-center pt-6 text-lg font-extrabold text-slate-900'>
                <span>Total before taxes</span>
                <span>₹46,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
