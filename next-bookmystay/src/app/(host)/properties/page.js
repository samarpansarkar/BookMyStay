import Link from "next/link";
import Image from "next/image";
import { Plus, MoreHorizontal, Edit, Trash, BarChart } from "lucide-react";

export default function HostPropertiesPage() {
  return (
    <div className='max-w-6xl mx-auto space-y-8 pb-12'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-extrabold text-slate-900 mb-1'>
            My Properties
          </h1>
          <p className='text-slate-500 font-medium'>
            Manage your listings, pricing, and availability.
          </p>
        </div>
        <Link
          href='/host/properties/new'
          className='px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md shadow-green-600/20'>
          <Plus className='w-5 h-5' /> Add New Property
        </Link>
      </div>

      <div className='bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead className='bg-slate-50 border-b border-slate-200 text-sm xs uppercase font-bold text-slate-500 tracking-wider'>
              <tr>
                <th className='px-6 py-4'>Property</th>
                <th className='px-6 py-4 text-center'>Status</th>
                <th className='px-6 py-4'>Price / Night</th>
                <th className='px-6 py-4'>Bookings (YTD)</th>
                <th className='px-6 py-4 text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {[
                {
                  name: "Luxury Emerald Villa",
                  loc: "South Goa",
                  status: "Active",
                  price: "₹8,500",
                  bookings: 42,
                  img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=200",
                },
                {
                  name: "Cozy Mountain Cabin",
                  loc: "Ooty",
                  status: "Active",
                  price: "₹4,200",
                  bookings: 18,
                  img: "https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&q=80&w=200",
                },
                {
                  name: "Seaside Studio Apartment",
                  loc: "Mumbai",
                  status: "Draft",
                  price: "₹6,000",
                  bookings: 0,
                  img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=200",
                },
              ].map((prop, idx) => (
                <tr
                  key={idx}
                  className='hover:bg-slate-50 transition-colors group'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-4'>
                      <div className='w-16 h-12 rounded-lg overflow-hidden relative shrink-0'>
                        <Image
                          src={prop.img}
                          fill
                          alt={prop.name}
                          className={`object-cover ${prop.status === "Draft" ? "grayscale opacity-60" : ""}`}
                        />
                      </div>
                      <div>
                        <p className='font-bold text-slate-900'>{prop.name}</p>
                        <p className='text-sm text-slate-500 font-medium'>
                          {prop.loc}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-center'>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        prop.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}>
                      {prop.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 font-bold text-slate-700'>
                    {prop.price}
                  </td>
                  <td className='px-6 py-4 font-bold text-slate-700'>
                    {prop.bookings}
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <div className='flex items-center justify-end gap-2'>
                      <button
                        className='p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                        title='Insights'>
                        <BarChart className='w-5 h-5' />
                      </button>
                      <button
                        className='p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors'
                        title='Edit Property'>
                        <Edit className='w-5 h-5' />
                      </button>
                      <button
                        className='p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                        title='Delete'>
                        <Trash className='w-5 h-5' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
