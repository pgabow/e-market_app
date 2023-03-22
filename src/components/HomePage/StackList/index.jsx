
import { list } from '../../../utils/list'
import { v4 as uuidv4 } from 'uuid';

const StackList = () => {
  return (
    <ul className='flex flex-wrap justify-center'>
        {list.map((item) => {
          return (
            <li key={uuidv4()} className='rounded-lg px-4 py-2 m-2 bg-black text-white text-[16px] font-bold cursor-default'>
              {item}
            </li>
          );
        })}
      </ul>
  )
}

export default StackList