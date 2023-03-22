import { Modal } from 'antd'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MainBasketItem from '../../../components/BasketItem/MainBasketItem'
import { useConfirmDiliveryBasketMutation, useGetSingleUserQuery } from '../../../redux/goodsApi'
import Spinner from '../../Spinner'
import { useSelector } from 'react-redux'
import { successConfirm } from '../../../utils/list'

const ConfirmDilivery = ({ result }) => {
  const user = useSelector((state) => state.users.lkUser)
  const [removeBasketItem] = useConfirmDiliveryBasketMutation()
  let { data = [], isLoading } = useGetSingleUserQuery(user.id)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = async () => {
    setIsModalOpen(false)
    successConfirm()
    let date = new Date()
    let userHistory = JSON.parse(JSON.stringify(data.history))
    userHistory[date] = { ...data.basket.item }
    await removeBasketItem({
      idUser: user.id,
      item: [],
      generalSum: 0,
      history: userHistory,
    }).unwrap()
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <button
        onClick={showModal}
        className='border-2 dark:text-white px-6 py-1 mb-4 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:border-gray-400 duration-200'
      >
        Оформить заказ
      </button>
      <Modal
        title='Подтвердите информацию о заказе'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={'Назад'}
        okText={'Оформить заказ'}
      >
        {result.basket.item?.map((item) => {
          const { id, title, price, img, col } = item
          let resultSum = col * price
          return (
            <div className='flex items-center mb-4 justify-between' key={uuidv4()}>
              <MainBasketItem id={id} title={title} price={price} img={img} col={col} />
              <div>
                <h2>{col} шт</h2>
                <h2>Всего: {resultSum} ₽</h2>
              </div>
            </div>
          )
        })}
        <h2 className='mt-10 '>Итого: {result.GeneralsumInBasket}</h2>
      </Modal>
    </>
  )
}

export default ConfirmDilivery
