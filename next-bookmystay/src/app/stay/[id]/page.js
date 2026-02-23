export default function StayDetailPage({ params }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50'>
      <div className='text-3xl font-bold text-slate-400'>
        Stay Detail Page for ID: {params?.id || "coming soon..."}
      </div>
    </div>
  );
}
