
import { useDispatch } from 'react-redux';
import { searchName } from '../../../redux/features/initialGoods/initialGoodsSlice';

import { useTranslation } from 'react-i18next';
import '../../../utils/list';

const SearchTitle = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      dispatch(searchName(e.target.value));
    }
    if (e.target.value.length < 1) {
      dispatch(searchName(e.target.value))
    }
  };

  return (
    <div className='flex justify-center'>
      <input
        onKeyUp={handleSearch}
        className='bg-gray-100 w-[90%] px-6 py-2 rounded-full mt-2 mb-4'
        placeholder={t('goods.search')}
      />
    </div>
  );
};

export default SearchTitle;
