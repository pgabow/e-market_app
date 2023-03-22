import Spinner from '../../ui/Spinner'
import MoreGoodsBtn from '../../ui/Button/MoreGoodsBtn/MoreGoodsBtn'
import OneGood from './OneGood'
import { useGetGoodsQuery, useSearchGoodsQuery } from '../../redux/goodsApi'
import { useSelector } from 'react-redux'
import SelectCategory from './SelectCategory'
import SearchTitle from './SearchTitle'

const Goods = () => {
  const limit = useSelector((state) => state.initialGoods.limit)
  const searchName = useSelector((state) => state.initialGoods.searchName)
  const categoryGoods = useSelector((state) => state.initialGoods.category)

  const body = {
    limit: limit,
    category: categoryGoods,
    search: searchName,
  }

  console.log(body.category)

  const { data: goods = [], isLoading } = useGetGoodsQuery(body)

  if (isLoading) return <Spinner />

  return (
    <>
      <SearchTitle />
      <SelectCategory />
      <OneGood data={goods} />
      <div className='text-center'>
        <MoreGoodsBtn />
      </div>
    </>
  )
}

export default Goods
