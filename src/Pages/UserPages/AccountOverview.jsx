import React from 'react'

const AccountOverview = () => {
  return (
    <div className='w-full'>
      <h1 className='font-semibold text-lg p-3 '>Account Overview</h1>

      <div className='grid grid-cols-2 gap-3 p-2'>
        <div className='border border-[#8a8b85]'>
          <h2 className='border-b border-[#8a8b85] p-3 font-semibold '>
            ACCOUNT DETAILS
          </h2>
          <div className='flex flex-col items-start gap-1 p-4 h-[150px]'>
            <p>ELIZABETH GODFREY</p>
            <span className='text-[#8a8b85]'>lizzyyeii@gmail.com</span>
          </div>
        </div>

        <div className='border border-[#8a8b85]'>
          <h2 className='border-b border-[#8a8b85] p-3 font-semibold '>
            ADDRESS BOOK
          </h2>
          <div className='flex flex-col items-start gap-1 p-4 h-[150px]'>
            <p>Your default shipping address</p>
            <span className='text-[#8a8b85]'>No default shipping address</span>
          </div>
        </div>

        <div className='border border-[#8a8b85]'>
          <h2 className='border-b border-[#8a8b85] p-3 font-semibold '>
            YESeL STORE CREDIT
          </h2>
          <div className='flex flex-col items-start gap-1 p-4 h-[150px]'>
            <span className='text-[#8a8b85]'>Account is empty $0.00</span>
          </div>
        </div>

        <div className='border border-[#8a8b85]'>
          <h2 className='border-b border-[#8a8b85] p-3 font-semibold '>
            NEWSLETTER PREFERENCES
          </h2>
          <div className='flex flex-col items-start gap-1 p-4 h-[150px]'>
            <p>You are currently not subscribed to any of our newsletter</p>
            <span className='text-[#d6af74]'>EDIT NEWSLETTER PREFERENCES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;