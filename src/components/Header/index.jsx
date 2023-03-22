import LogUser from './LogUser';
import NavLinks from './NavLinks';
import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';

const Header = () => {
  return (
    <header className='bg-gray-800 '>
      <div className='h-[80px] flex justify-between items-center max-w-[1280px] mx-auto px-10'>
        <div className='text-white text-[20px] cursor-default hidden md:block'>E-market</div>
        <NavLinks />
        <div className='flex items-center'>
          <SwitchTheme />
          <LogUser />
          <SwitchLanguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
