import React from 'react'

const AddButton = ({ onClick, text, type }) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className='px-6 py-2 rounded-3xl bg-green-100 hover:bg-green-300 duration-200 dark:bg-slate-200 dark:hover:bg-gray-400'
  >
    {text}
  </button>
  )
}

export default AddButton