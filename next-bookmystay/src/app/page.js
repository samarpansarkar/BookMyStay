import Link from "next/link";
import Image from "next/image";
import heroImage from "../assets/HeroImg2.jpg";
import {
  Search,
  MapPin,
  Calendar,
  Star,
  Shield,
  Clock,
  Heart,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-50 font-sans selection:bg-green-100 selection:text-green-900'>
      {/* Hero Section */}
      <section className='relative px-4 pt-20 pb-32 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50/50 to-slate-50 overflow-hidden'>
        {/* Decorative background blobs - Soft static blurred circles */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-60 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-200 rounded-full mix-blend-multiply blur-[80px] opacity-70'></div>
          <div className='absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-emerald-200 rounded-full mix-blend-multiply blur-[80px] opacity-70 delay-700'></div>
          <div className='absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-teal-100 rounded-full mix-blend-multiply blur-[100px] opacity-70 delay-1000'></div>
        </div>

        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20'>
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10 pt-8'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-green-700 font-semibold text-sm w-fit shadow-sm ring-1 ring-green-500/20 hover:ring-green-500/40 transition-all cursor-default'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500'></span>
              </span>
              India's #1 Home Stay Platform
            </div>

            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1]'>
              Find your{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500'>
                perfect
              </span>{" "}
              stay anywhere.
            </h1>

            <p className='text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed'>
              Discover unique homes, authentic experiences, and unforgettable
              stays. Join 1.5M+ active users exploring the world with
              BookMyStay.
            </p>

            <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
              <Link
                href='/stay'
                className='inline-flex items-center justify-center h-14 px-8 rounded-full bg-green-600 text-white font-medium text-lg hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/20 hover:-translate-y-0.5 transition-all duration-300'>
                Explore Stays
              </Link>
              <Link
                href='/'
                className='inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-slate-700 font-medium text-lg hover:bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all duration-300'>
                Contact Sales
              </Link>
            </div>

            <div className='pt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 border-t border-slate-200/60 w-full max-w-md'>
              <div className='flex -space-x-3'>
                <Image
                  width={48}
                  height={48}
                  alt='User 1'
                  className='w-12 h-12 rounded-full ring-4 ring-slate-50 shadow-sm object-cover'
                  src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                />
                <Image
                  width={48}
                  height={48}
                  alt='User 2'
                  className='w-12 h-12 rounded-full ring-4 ring-slate-50 shadow-sm object-cover'
                  src='https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                />
                <Image
                  width={48}
                  height={48}
                  alt='User 3'
                  className='w-12 h-12 rounded-full ring-4 ring-slate-50 shadow-sm object-cover'
                  src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
                />
              </div>
              <div className='flex flex-col items-center lg:items-start text-left'>
                <div className='flex items-center gap-1 text-amber-400 mb-1'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className='w-4 h-4 fill-current' />
                  ))}
                </div>
                <p className='text-sm font-medium text-slate-500'>
                  <span className='text-slate-800 font-bold'>4.9/5</span> from{" "}
                  <Link
                    href='#'
                    className='underline decoration-slate-300 hover:text-slate-800 transition-colors'>
                    329K reviews
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 relative z-10 max-w-2xl lg:max-w-none mx-auto'>
            <div className='relative rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5 bg-white'>
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none'></div>
              <Image
                src={heroImage}
                alt='Beautiful home stay'
                className='w-full h-[500px] sm:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105'
                priority
              />
              <div className='absolute top-6 right-6 z-20'>
                <div className='bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2'>
                  <CheckCircle2 className='w-5 h-5 text-green-600' />
                  <span className='text-sm font-semibold text-slate-800'>
                    Available Today
                  </span>
                </div>
              </div>
              <div className='absolute bottom-8 left-8 right-8 z-20'>
                <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 bg-white/20 rounded-xl'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg drop-shadow-md'>
                        Kerala Backwaters
                      </h3>
                      <p className='text-white/90 text-sm font-medium'>
                        ₹4,500 / night
                      </p>
                    </div>
                  </div>
                  <button className='w-full sm:w-auto px-6 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-lg'>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search Bar overlay */}
      <section className='max-w-6xl mx-auto px-4 sm:px-6 relative -mt-20 sm:-mt-16 z-30'>
        <div className='bg-white rounded-2xl shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 p-2 sm:p-2 sm:pl-8 flex flex-col md:flex-row items-center gap-2 md:gap-0'>
          <div className='flex-1 w-full flex items-center xl:gap-4 px-4 py-3 md:border-r border-slate-100'>
            <MapPin className='w-5 h-5 text-green-500 hidden xl:block' />
            <div className='w-full'>
              <p className='text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5'>
                Location
              </p>
              <input
                type='text'
                placeholder='Where are you going?'
                className='w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent text-sm sm:text-base focus:ring-0 p-0 border-0'
              />
            </div>
          </div>

          <div className='flex-1 w-full flex items-center xl:gap-4 px-4 py-3 md:border-r border-slate-100'>
            <Calendar className='w-5 h-5 text-green-500 hidden xl:block' />
            <div className='w-full'>
              <p className='text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5'>
                Check in - Check out
              </p>
              <input
                type='text'
                placeholder='Add dates'
                className='w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent text-sm sm:text-base focus:ring-0 p-0 border-0'
              />
            </div>
          </div>

          <div className='flex-1 w-full flex items-center xl:gap-4 px-4 py-3 md:border-r border-slate-100'>
            <Users className='w-5 h-5 text-green-500 hidden xl:block' />
            <div className='w-full'>
              <p className='text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5'>
                Guests
              </p>
              <input
                type='text'
                placeholder='Add guests'
                className='w-full outline-none text-slate-800 font-medium placeholder-slate-300 bg-transparent text-sm sm:text-base focus:ring-0 p-0 border-0'
              />
            </div>
          </div>

          <div className='w-full md:w-auto p-1.5 flex-shrink-0'>
            <button className='w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl p-4 sm:px-8 flex items-center justify-center gap-2 transition-all shadow-md shadow-green-600/20 active:scale-95'>
              <Search className='w-5 h-5' />
              <span className='font-semibold'>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight'>
            Why book with BookMyStay?
          </h2>
          <p className='text-lg text-slate-600'>
            We offer an unmatched experience for our customers, ensuring a
            seamless, secure, and memorable stay every time.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            {
              icon: Shield,
              title: "Secure Booking",
              desc: "Your payments and personal information are protected by bank-level, end-to-end security.",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              desc: "Our dedicated support team is always available around the clock to help you with any queries.",
            },
            {
              icon: Heart,
              title: "Verified Stays",
              desc: "Every single property is manually verified by our team to maintain exceptional quality and comfort.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className='p-8 rounded-3xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group'>
              <div className='w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300'>
                <feature.icon className='w-7 h-7' />
              </div>
              <h3 className='text-xl font-bold text-slate-800 mb-3'>
                {feature.title}
              </h3>
              <p className='text-slate-600 leading-relaxed'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className='bg-slate-900 text-slate-400 py-12 border-t border-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} BookMyStay. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <Link href='#' className='hover:text-white transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-white transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
