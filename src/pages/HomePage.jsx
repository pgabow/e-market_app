import StackList from '../components/HomePage/StackList';
import ListUsers from '../components/HomePage/ListUsers';
import Description from '../components/HomePage/Description';

import { useTranslation } from 'react-i18next';
import '../utils/i18next.js';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='p-6 dark:bg-gray-900'>
      <h2 className='text-[35px] font-[500] lg:text-[50px] lg:font-[700] text-center dark:text-white'>
        {t('home.title')}
      </h2>
      <Description />
      <ListUsers />
      {/* <StackList /> */}
    </div>
  );
};

export default HomePage;
