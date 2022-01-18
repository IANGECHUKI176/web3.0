import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <div className='w-full flex flex-col items-center justify-between sm:flex-row my-4'>
        <div className='flex flex-[0.5] items-center justify-center'>
          <img src={logo} alt='logo' className='w-32' />
        </div>
        <div className='flex flex-col sm:flex-row flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center my-2 cursor-pointer'>
            Market
          </p>
          <p className='text-white text-base text-center my-2 cursor-pointer'>
            Exchange
          </p>
          <p className='text-white text-base text-center my-2 cursor-pointer '>
            BlockChain
          </p>
          <p className='text-white text-base text-center my-2 cursor-pointer'>
            Wallet
          </p>
        </div>
      </div>
      <div className='flex justify-center item-center flex-col'>
        <p className='text-white text-sm text-center '>Come join us</p>
        <p className='text-white text-sm text-center '>
          Info@kryptomastery.com
        </p>
      </div>
      <div className='bg-gray-400 w-full h-[0.25px] sm:w-[90%]' />
      <div className='w-full  sm:w-[90%] flex justify-between items-center mt-3'>
        <p className='text-white text-sm text-center '>@kryptomastery2022</p>
        <p className='text-white text-sm text-center '>
          All rights reserved <span>&#169;</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
