import React, { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { shortenAddress } from "../utils/shortenAdress";
import dummyData from "../utils/dummyData";
import useFetch from "../hooks/fetchGif";
const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl=useFetch({ keyword });

  return (
    <div className='bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-2'>
        <div className=' w-full mb-2 p-2'>
          <a
            href={`https://https://ropsten.etherscan.io/address/${addressFrom}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-white text-base'>
              From:{shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://https://ropsten.etherscan.io/address/${addressTo}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-white text-base'>
              To:{shortenAddress(addressTo)}
            </p>
          </a>
          <p className='text-white text-base '>Amount:{amount} ETH</p>
          {message && (
            <>
              <br /> <p className='text-white text-base'> Message: {message}</p>
            </>
          )}
        </div>
        <div>
         <img
            src={gifUrl || url}
            alt='gif'
            className='rounded-md w-full h-64 2xl:h-96 shadow-lg object-cover'
          />
        
          <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
            <p className='text-[#37c7da] font-bold text-sm'>{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const {currentAccount,transactions} = useContext(TransactionsContext);

  return (
    <div className='flex w-full justify-center items-center gradient-bg-transactions 2xl:px-20'>
      <div className='flex flex-col md:p-12 p-12 px-4'>
        {currentAccount ? (
          <h1 className='text-white text-3xl text-center my-5'>
            Latest Transactions
          </h1>
        ) : (
          <h1 className='text-white text-3xl text-center my-5'>
            Connect to your account to see the latest transactions
          </h1>
        )}
        <div className='flex flex-wrap justify-center items-center mt-10'>
          {transactions?.reverse().map((transacton, index) => (
            <TransactionCard key={index} {...transacton} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
