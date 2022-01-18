import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { BsShieldFillCheck } from "react-icons/bs";
const ServiceCard = ({ title, icon, subtitle, color }) => (
  <div className='flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='mt-2 text-white text-lg'>{title}</h1>
      <p className='mt-2 text-white md:w-9/12 text-sm'>{subtitle}</p>
    </div>
  </div>
);
const Services = () => {
  return (
    <div className='flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services'>
      <div className='flex flex-col mf:flex-row justify-between items-center md:p-20 py-12 px-4'>
        <div className='flex-1 flex-col justify-start items-start'>
          <p className='text-white text-gradient text-3xl sm:text-5xl py-2'>
            Services that we <br /> continue to Improve
          </p>
        </div>
        <div className='flex-1 flex-col justify-start items-center'>
          <ServiceCard
            color='bg-[#2952E3]'
            title='Security Guaranteed'
            subtitle='Security is guaranteed we always maintain privacy and the quality of our products'
            icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
          />
          <ServiceCard
            color='bg-[#8945F8]'
            title='Best Exchange Rates'
            subtitle='Security is guaranteed we always maintain privacy and the quality of our products'
            icon={<BiSearchAlt fontSize={21} className='text-white' />}
          />
          <ServiceCard
            color='bg-[#f84550]'
            title='Fastest Transactions'
            subtitle='Security is guaranteed we always maintain privacy and the quality of our products'
            icon={<RiHeart2Fill fontSize={21} className='text-white' />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
