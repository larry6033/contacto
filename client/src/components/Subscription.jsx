function Subscription(){
    return(
        <div>
            <h1 className='flex justify-center flex-wrap text-[green] text-[2em] font-bold ' >Subscription Plan</h1>
        <div className='container mx-[auto] flex justify-around my-[5em] flex-wrap '>
          <div className=' flex flex-col items-center w-[20%] shadow-lg p-[3em]'>
            <h2 className='text-[green] text-[1.5em]'>Free plan</h2>
            <p>Get up to 50 contacts</p>
            <p></p>
            <button className='text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl mt-[9em]'>Subscribe</button>
          </div>
          <div className=' flex flex-col items-center w-[20%] shadow-lg p-[3em]'>
            <h2 className='text-[green] text-[1.5em]'>Friendly</h2>
            <h3 className='font-bold'>ksh 500 per month</h3>
            <p>get up to 150 contacts</p>
            <p>get 100min for two months</p>
            <button className='text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl mt-[6em]'>Subscribe</button>

          </div>
          <div className=' flex flex-col items-center w-[20%] shadow-lg p-[3em] '>
            <h2 className='text-[green] text-[1.5em]'>Advanced plan</h2>
            <h3 className='font-bold' >ksh 1000 per month</h3>
            <p>get unliminet contacts</p>
            <p>get 200min for two months</p>
            <button className='text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl mt-[6em]'>Subscribe</button>

          </div>
        </div>
      </div>
    )
}
export default Subscription;