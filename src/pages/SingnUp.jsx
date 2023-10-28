import React from 'react'
import {FaAddressBook, FaAddressCard, FaArrowRight, FaEnvelope, FaExclamation, FaGoogle, FaLock, FaVoicemail} from 'react-icons/fa'

export default function SingnUp() {
  return (
    <div className=' p-3 sm: max-w-4xl mx-auto'>
        <div className=''>
            <span>
            <FaAddressCard size={40}  className=' mx-auto text-blue-700 '  />
            </span>
            <p className=' text-center text-2xl font-semibold'>Create Account!</p>
        </div>
        <div>
            <form className=' flex flex-col gap-4 p-5'>
                <div className=' flex items-center'>
                    <input
                    type='text'
                    placeholder='Name'
                    id='name' 
                    required
                    className=' p-3  border-b-2 w-full outline-none'/>
                    <span><FaAddressBook className=' opacity-25' /></span>
                </div>
                <div className=' flex items-center'>
                    <input
                    type='email'
                    placeholder='E-mail'
                    id='email'
                    required
                    className=' p-3  border-b-2 w-full outline-none'/>
                    <span><FaEnvelope className=' opacity-25' /></span>
                </div>
                 <div className=' flex items-center'>
                    <input
                    type='text'
                    placeholder='password'
                    id='password'
                    required
                    className=' p-3  border-b-2 w-full outline-none'/>
                    <span><FaLock className=' opacity-25' /></span>
                </div>
                <div className=' flex items-center border-b-2'>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'
                    className=' w-14 h-14'/>
                    <input
                    type='file'
                    accept='image/*'
                    className=' p-3  w-full'/>
                    <button
                    className=' bg-green-800 text-white p-2 rounded-lg hover:opacity-95 uppercase'
                    >Uploade...
                    </button>
                </div>
                
                <div>
                    <button className=' flex  items-center gap-1 bg-blue-800 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                        Create
                        <FaArrowRight/>
                    </button>
                </div>

                <div className=' flex flex-col gap-3'>
                    <p className=' text-sm text-center font-semibold'>Or create account using Google!</p>
                    <span className=''>
                        <FaGoogle size={25} className=' mx-auto '/>
                    </span>
                </div>
            </form>
            
            
        </div>
    </div>
  )
}
