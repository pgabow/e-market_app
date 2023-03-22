
import { useDispatch } from 'react-redux';
import { addGoods } from '../../../redux/features/initialGoods/initialGoodsSlice';

import { useTranslation } from 'react-i18next';
import '../../../utils/list';

const MoreGoodsBtn = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addGoods());
  };
  const { t } = useTranslation();

  return (
    <button onClick={onClick} className='dark:text-white border-2 px-6 py-1 mb-4 rounded-3xl hover:bg-slate-200 duration-200'>
      {t('button.showMore')}
    </button>
  );
};

export default MoreGoodsBtn;
