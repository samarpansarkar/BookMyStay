import Search from "../components/Search/Search";

const ApartmentsPage = () => {
  return (
    <div className='relative mx-auto my-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20'>
      <div className='mx-auto max-w-xl lg:max-w-screen-xl flex flex-col item-center justify-center'>
        <Search />
        <h1>ApartmentsPage</h1>
      </div>
    </div>
  );
};

export default ApartmentsPage;
