import { v4 as uuidv4 } from 'uuid'
import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import User from '../User'
import { Link } from 'react-router-dom'
import Spinner from '../../../ui/Spinner'
import { useGetUsersQuery } from '../../../redux/goodsApi'

import { useTranslation } from 'react-i18next'
import '../../../utils/i18next'

const { Panel } = Collapse

const ListUsers = () => {
  const { data = [], isLoading } = useGetUsersQuery()
  const { t } = useTranslation()

  if (isLoading) return <Spinner />

  return (
    <div className='my-10'>
      <h2 className='text-center text-[20px] dark:text-white'>
        {t('home.user1')} <Link to='/login'>{t('home.user2')}</Link> {t('home.user3')}{' '}
        <Link to='/registration'>{t('home.user4')}</Link>
      </h2>
      <Collapse
        style={{ backGround: 'black' }}
        key={uuidv4()}
        bordered={true}
        defaultActiveKey={['0']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className='site-collapse-custom-collapse'
      >
        <Panel header={t('home.userList')} key='1' className='site-collapse-custom-panel'>
          {data?.map((elem) => {
            const { name, password, role } = elem
            return <User name={name} password={password} role={role} key={uuidv4()} />
          })}
        </Panel>
      </Collapse>
    </div>
  )
}

export default ListUsers
