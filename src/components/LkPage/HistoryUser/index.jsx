import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import React from 'react'
import MainBasketItem from '../../BasketItem/MainBasketItem'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const { Panel } = Collapse

const HistoryUser = ({ data }) => {
  const { history } = data
  const arrHistory = Object.entries(history)

  if (arrHistory.length == 0)
    return (
      <div className='text-center text-[25px] dark:text-white'>
        Истории заказов пока нет.{' '}
        <Link to='/goods' className='text-blue-600'>
          Перейти к товарам
        </Link>
      </div>
    )

  return (
    <div className=''>
      {arrHistory.map((item) => {
        return (
          <Collapse
            key={uuidv4()}
            bordered={true}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className='site-collapse-custom-collapse'
          >
            <Panel header={item[0]} key='1' className='site-collapse-custom-panel'>
              {Object.entries(item[1]).map((elem) => {
                const { id, title, price, img, col } = elem[1]
                let resultSum = col * price
                return (
                  <div className='flex items-center mb-4 justify-between' key={uuidv4()}>
                    <MainBasketItem id={id} title={title} price={price} img={img} col={col} />
                    <div className='min-w-[200px]'>
                      <h2>{col} шт</h2>
                      <h2>Всего: {resultSum} ₽</h2>
                    </div>
                  </div>
                )
              })}
            </Panel>
          </Collapse>
        )
      })}
    </div>
  )
}

export default HistoryUser
