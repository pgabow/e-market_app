import { useTranslation } from 'react-i18next';
import '../../../utils/i18next'

const User = ({ name, password, role}) => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col mb-4 border-b-2 last:border-b-0'>
      <h1>{t("home.userLogin")}: <span className='text-gray-400 text-[18px]'>{name}</span></h1>
      <h1>{t("home.userPassword")}: <span className='text-gray-400 text-[18px]'>{password}</span></h1>
      <h1>{t("home.userType")}: <span className='text-gray-400 text-[18px]'>{role}</span></h1>
    </div>
  );
};

export default User;
