import Loader from "./Loader";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import Tilt from "react-vanilla-tilt";
import { TransactionsContext } from "../context/TransactionsContext";
import { useContext } from "react";
import {shortenAddress} from '../utils/shortenAdress'
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-500 text-sm font-light text-white";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    value={value}
    type={type}
    step='0.0001'
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full border-none outline-none bg-transparent rounded-sm p-2 text-white text-sm white-glassmorphism '
  />
);
const Welcome = () => {
  
  const { connectWallet, currentAccount, formData, handleChange ,sendTransaction,isLoading,setFormData} =useContext(TransactionsContext);
const handleSubmit = (e) => {
  const { addressTo, amount, keyword, message } = formData;
  e.preventDefault();
  setFormData({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  if (!addressTo || !amount || !keyword || !message) return;
  sendTransaction();
};
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 '>
        <div className=' flex flex-1 justify-start flex-col mf:mr-20'>
          <h1 className='text-3xl sm:text-5xl text-gradient py-1'>
            Send Crypto <br /> across the World
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
            Explore the crypto world.Buy an sell crypto currencies easily with
            krypto
          </p>
          {!currentAccount && (
            <button
              type='button'
              className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
              onClick={connectWallet}
            >
              <p className='text-white font-semibold text-base'>Connect</p>
            </button>
          )}

          <div className='grid sm:grid-cols-3 grid-cols-2'>
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={` ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web3.0</div>
            <div className={` ${commonStyles}`}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>BlockChain</div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start mt-10 mf:mt-0 w-full'>
          <div className='eth-card white-glassmorphism w-full md:w-72 h-40 p-3 my-5 flex-col items-start justify-end'>
            <div className='flex flex-col justify-between h-full w-full'>
              <div className='flex justify-between items-start'>
                <div className='flex items-center justify-center border-2 border-white rounded-full w-10 h-10'>
                  <SiEthereum fontSize={21} color='#000' />
                </div>
                <BsInfoCircle className='' color='#fff' fontSize={17} />
              </div>
              <div>
                <p className='text-white font-light text-sm '>
                  {shortenAddress(currentAccount)}
                </p>
                <p className='text-white font-semibold text-lg'>Ethereum</p>
              </div>
            </div>
          </div>
          <div className='p-5 w-full sm:w-96 flex flex-col justify-start items-center blue-glassmorphism'>
            <Input
              placeholder='Address to '
              name='addressTo'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Amount(ETH)'
              name='amount'
              type='number'
              handleChange={handleChange}
            />
            <Input
              placeholder='KeyWord(Gif)'
              name='keyword'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Enter message '
              name='message'
              type='text'
              handleChange={handleChange}
            />
            <div className='bg-gray-500 w-full h-[1px] my-2'></div>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type='button'
                onClick={handleSubmit}
                className='text-white mt-2 border-[1px] border-[#3d4f7c] rounded-full cursor-pointer p-2 w-full'
              >
                send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
