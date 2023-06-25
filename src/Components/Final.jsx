import React, {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/CircleLoader";
import github from '../Assets/github.png'


function Final() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
     setLoading(false)
    }, 15000)
  },[])

  return (
    <div className='flex flex-col h-[100%] w-[100%] items-center justify-center'>
      {
         loading ?
         <ClipLoader
         color={"#8257E5"}
         loading={loading}
         size={70}
         aria-label="Loading Spinner"
         data-testid="loader"
       />

         :
         <>
         <p className='flex w-[100%] justify-center items-center text-center font-roboto_bold text-3xl pb-12'>
            Thank you for subscribing
        </p>

        <a href="https://github.com/tanmayagrwl/Paperpilot" target="_blank" >
        <button className="bg-[#FFFDD0] hover:bg-[#AC97DB] text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-64 shadow-xl shadow-[#AC97DB]">
                <img src={github} alt="github logo"  class="inline-block mr-2 h-5 w-5" />
                <span className="inline-block">Contribute on GitHub</span>
            </button></a>
        <span className='text-xs px-10 pt-7'>
        <span className='text-red-700'>*</span>Are you interested in contributing to an open source project or reviewing its code? Click on the link above to access the codebase.
        </span>
        </>
      }
        


    </div>
  )
}

export default Final