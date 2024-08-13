
import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className=' pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black flex justify-center rounded-md'>
            <input className='my-4 ml-4 mr-2 p-4 w-[72%]' placeholder='What do you want to watch today?' type="text"/>
            <button className='m-4 px-4 py-3 w-[18%] bg-red-700 rounded-lg text-lg'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar