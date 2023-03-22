import { useNavigate, useParams, useLocation } from 'react-router'
import Spinner from '../ui/Spinner'
import { useGetSingleGoodsQuery } from '../redux/goodsApi'
import GoBackBtn from '../ui/Button/GoBackBtn/GoBackBtn'
import CarouselImages from '../components/SingleGoods/CarouselImages'
import MainInformation from '../components/SingleGoods/MainInformation'

const SingleGoods = () => {
  let dataLocation = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  const { data = [], isLoading } = useGetSingleGoodsQuery(id)
  const { title, price, images, description } = data

  if (isLoading) return <Spinner />

  const goGoods = () => navigate('/goods')
  const goBack = () => navigate(-1)

  return (
    <div className='flex my-8 px-6'>
      {dataLocation.state != null ? (
        <GoBackBtn onClick={goBack} />
      ) : (
        <GoBackBtn onClick={goGoods} />
      )}
      <CarouselImages images={images} title={title} />
      <MainInformation title={title} description={description} price={price} id={id} data={data} />
    </div>
  )
}

export default SingleGoods
