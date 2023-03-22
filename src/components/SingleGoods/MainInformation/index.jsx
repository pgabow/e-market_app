import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AddGoodsBtn from '../../../ui/Button/AddGoodsBtn/AddGoodsBtn';
import { useSelector } from 'react-redux';

const MainInformation = ({ title, description, price, id, data }) => {
  const auth = useSelector((state) => state.users.auth);

  return (
    <div className='px-8 py-6 flex flex-col justify-center'>
      <h2 className='text-[40px] text-center dark:text-white'>{title}</h2>
      <h2 className='dark:text-white'>{description}</h2>
      <div className=''>
        <h2 className='text-[30px] dark:text-white'>{price} ₽</h2>
        <AddGoodsBtn text={'Добавить в корзину'} id={id} goods={data} />
        {auth ? (
          <Link to={`/goods/${id}/edit`} state={{ id: id }} className='flex items-center mt-10'>
            <MdModeEdit />
            Редактировать товар
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MainInformation;
