import React, { useState } from 'react'
import { useGetCategoryQuery } from '../../../redux/goodsApi'
import Spinner from '../../../ui/Spinner'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../../../redux/features/initialGoods/initialGoodsSlice'

const SelectCategory = () => {
  const dispatch = useDispatch()
  const { data = [], isLoading } = useGetCategoryQuery()
  const [categories, setCategories] = useState('')

  const handleChange = (e) => {
    dispatch(changeCategory(e.target.value))
    setCategories(e.target.value)
  }

  if (isLoading) return <Spinner />

  return (
    <div className='flex items-center overflow-hidden px-6'>
      <h1 className='m-0 ml-2 uppercase text-[12px] sm:text-[15px] text-gray-700'>Каталог</h1>
      <select
        name='category'
        onChange={handleChange}
        className='px-4 py-2 bg-slate-100 sm:ml-10 w-fit pr-6' // rounded-l-full
        value={categories}
      >
        {data?.map((item) => {
          return (
            <option key={uuidv4()} value={item.name}>
              {item.visibleName}
            </option>
          )
        })}
      </select>
      {/* <h1 className='m-0 ml-6 uppercase text-[12px] sm:text-[15px] text-gray-400'>
        {categories.length > 0 ? categories : 'All goods'}
      </h1> */}
    </div>
  )
}

export default SelectCategory
