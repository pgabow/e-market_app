import { useTranslation } from 'react-i18next';

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
      <select onChange={changeLanguage} className='ml-4 rounded-full px-1 h-[30px]'>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
      </select>
  );
};

export default SwitchLanguage;
