import { useTranslation } from 'react-i18next';
import '../../../utils/i18next'

const Description = () => {
  const { t } = useTranslation()

  return (
    <p className='text-[18px] dark:text-white'>
      {t("home.des1")}
      <br />{t("home.des2")}
      <br />{t("home.des3")}
      <br />{t("home.des4")}
      <br />{t("home.des5")}
      <br />{t("home.des6")}
      <br />{t("home.des7")}
      <br />{t("home.des8")}
      <br />{t("home.des9")}
      <br />{t("home.des10")}
    </p>
  );
};

export default Description;
