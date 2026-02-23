import { User, Users, Building2, Check, Star } from "lucide-react";

export default function MembershipPage() {
  return (
    <div className='flex min-h-screen bg-slate-50 relative overflow-hidden'>
      {/* Dynamic Background Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-200/50 rounded-full mix-blend-multiply blur-[100px] opacity-70'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full mix-blend-multiply blur-[120px] opacity-70'></div>
      </div>

      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-24 relative z-10'>
        <div className='mb-16 max-w-2xl sm:text-center md:mx-auto'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-green-700 font-semibold text-sm shadow-sm ring-1 ring-green-500/20 mb-6'>
            <Star className='w-4 h-4 fill-green-500 text-green-500' /> Unlock
            Premium Stays
          </div>
          <h2 className='mb-6 font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight'>
            Choose your perfect <br className='hidden sm:block' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400'>
              Membership Plan
            </span>
          </h2>
          <p className='text-lg text-slate-600 max-w-xl mx-auto'>
            Get exclusive discounts, free meals, and lucky coupons with our
            carefully crafted premium subscription tiers.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-1 md:grid-cols-3 items-center'>
          {/* Personal Plan */}
          <div className='relative flex flex-col p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group'>
            <div className='w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300'>
              <User className='w-7 h-7 text-green-600 group-hover:text-white transition-colors' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-2'>Personal</h3>
            <p className='text-slate-500 text-sm mb-6'>
              Perfect for solo travelers.
            </p>

            <div className='mb-8'>
              <span className='text-5xl font-extrabold text-slate-900'>
                ₹50
              </span>
              <span className='text-slate-500 font-medium'>/mo</span>
            </div>

            <ul className='space-y-4 mb-8 flex-grow'>
              {[
                "10% discount in all hotels",
                "Free premium Lunch included",
                "Basic customer support",
              ].map((feature, i) => (
                <li
                  key={i}
                  className='flex items-start gap-3 text-slate-600 text-sm font-medium'>
                  <Check className='w-5 h-5 text-green-500 shrink-0' />
                  {feature}
                </li>
              ))}
            </ul>

            <button className='w-full py-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-green-600 hover:text-white ring-1 ring-slate-200 hover:ring-transparent shadow-sm hover:shadow-md transition-all duration-300'>
              Get Started
            </button>
          </div>

          {/* Team Plan (Most Popular) */}
          <div className='relative flex flex-col p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl hover:-translate-y-2 transition-transform duration-300 transform md:-translate-y-4 glow-effect'>
            {/* Animated Gradient Border */}
            <div className='absolute -inset-[1px] bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-[24px] -z-10 blur-[2px] opacity-70'></div>

            <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-400 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap'>
              Most Popular
            </div>

            <div className='w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 ring-1 ring-white/20'>
              <Users className='w-7 h-7 text-green-400' />
            </div>

            <h3 className='text-2xl font-bold text-white mb-2'>Team</h3>
            <p className='text-slate-400 text-sm mb-6'>
              Best value for families & groups.
            </p>

            <div className='mb-8'>
              <span className='text-5xl font-extrabold text-white'>₹79</span>
              <span className='text-slate-400 font-medium'>/mo</span>
            </div>

            <ul className='space-y-4 mb-8 flex-grow'>
              {[
                "30% discount in all hotels",
                "Free premium Lunch included",
                "2 Lucky Coupons per 5 bookings",
                "Priority 24/7 support",
              ].map((feature, i) => (
                <li
                  key={i}
                  className='flex items-start gap-3 text-slate-300 text-sm font-medium'>
                  <Check className='w-5 h-5 text-green-400 shrink-0' />
                  {feature}
                </li>
              ))}
            </ul>

            <button className='w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:from-green-400 hover:to-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300'>
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className='relative flex flex-col p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group'>
            <div className='w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300'>
              <Building2 className='w-7 h-7 text-green-600 group-hover:text-white transition-colors' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-2'>
              Enterprise
            </h3>
            <p className='text-slate-500 text-sm mb-6'>
              For large corporate bookings.
            </p>

            <div className='mb-8'>
              <span className='text-5xl font-extrabold text-slate-900'>
                ₹189
              </span>
              <span className='text-slate-500 font-medium'>/mo</span>
            </div>

            <ul className='space-y-4 mb-8 flex-grow'>
              {[
                "50% discount in all hotels",
                "Free premium Lunch included",
                "3 Lucky Coupons per 5 bookings",
                "Dedicated account manager",
              ].map((feature, i) => (
                <li
                  key={i}
                  className='flex items-start gap-3 text-slate-600 text-sm font-medium'>
                  <Check className='w-5 h-5 text-green-500 shrink-0' />
                  {feature}
                </li>
              ))}
            </ul>

            <button className='w-full py-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-green-600 hover:text-white ring-1 ring-slate-200 hover:ring-transparent shadow-sm hover:shadow-md transition-all duration-300'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
