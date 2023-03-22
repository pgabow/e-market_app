import AddButton from '../../../ui/Button/AddButton/AddButton'
import { successChangeGoods } from '../../../utils/list'
import { useChangeSingleGoodsMutation, useGetSingleGoodsQuery } from '../../../redux/goodsApi'
import Spinner from '../../../ui/Spinner'
import InputText from '../../../ui/Input/InputText'

const FormEdidGoods = ({ id }) => {
  const { data: goods = [] } = useGetSingleGoodsQuery(id)
  const [changeGoods, isLoading] = useChangeSingleGoodsMutation()

  const handleSubmit = async (e) => {
    successChangeGoods()
    e.preventDefault()
    e.stopPropagation()
    let title = e.target.title.value == '' ? goods.title : e.target.title.value
    let description =
      e.target.description.value == '' ? goods.description : e.target.description.value
    let price = e.target.price.value == '' ? goods.price : Number(e.target.price.value)
    await changeGoods({
      idGoods: goods.id,
      newTitle: title,
      newPrice: price,
      newDescription: description,
    }).unwrap()
    e.target.title.value = ''
    e.target.description.value = ''
    e.target.price.value = ''
  }

  if (!isLoading) return <Spinner />

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full border-2 p-6'>
      <h1 className='m-0 mb-2 cursor-default'>
        ID: <span className='text-gray-400'>{goods.id}</span>
      </h1>
      <InputText labelName={'TITLE'} type={'text'} name={'title'} placeholder={goods.title} />
      <InputText labelName={'PRICE'} type={'text'} name={'price'} placeholder={goods.price} />
      <InputText
        labelName={'DESCRIPTION'}
        type={'text'}
        name={'description'}
        placeholder={goods.description}
      />
      <h1 className='mb-2 cursor-default'>
        CATEGORY: <span className='uppercase text-gray-400'>{goods.category}</span>
      </h1>
      <AddButton text={'Изменить'} />
    </form>
  )
}

export default FormEdidGoods
