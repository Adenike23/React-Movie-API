import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='footer_main bg-slate-900 text-indigo-900 font-extrabold flex justify-center items-center py-10 border-t-indigo-900 border-t-4'>
        <div>
            <p>Built by <span className='text-blue-500 hover:text-blue-200'><a href="https://adeofe.netlify.app" target='_blank'>Adenike</a></span></p>
            <p>Copyright&copy; {date}</p>
        </div>
    </div>
  )
}

export default Footer