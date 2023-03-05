import React from 'react'
import classNames from 'classnames'
import { Navigation } from 'swiper'
import Rating from 'react-star-review'
import styles from './product.module.scss'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { MdAdd, MdFacebook, MdRemove } from 'react-icons/md'
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
} from 'react-icons/ai'

import { useFindProductByIdQuery } from '../../generated/graphql'
import { Product as ProductModel } from '../../models'
import { AppDispatch, RootState } from '../../store'
import { Search } from '../../store/reducers'
import {
  Button,
  Heading,
  Loader,
  NoMatch,
  Paragraph,
  ProductCard,
  Tabs,
} from '../../components'

interface Props { }

const images = [
  'https://loremflickr.com/cache/resized/3019_2668873606_e343579bcb_z_640_480_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_52226317881_a072bb1153_b_640_480_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_52552903348_288981b690_c_640_480_nofilter.jpg',
  'https://loremflickr.com/cache/resized/3584_5697308124_3d7686e1c8_b_640_480_nofilter.jpg',
]

const Product: React.FC<Props> = () => {
  const { id } = useParams() as { id: string }
  const [alreadyDispatched, setAlreadyDispatched] = React.useState(false)
  const [activeImage, setActiveImage] = React.useState(0)
  const [count, setCount] = React.useState(1)
  const dispatch = useDispatch<AppDispatch>()
  const similarProducts = useSelector<RootState, ProductModel[]>((state) => state.search.hits.slice(0, 16))
  const { data, loading } = useFindProductByIdQuery({
    variables: {
      productId: parseInt(id),
    }
  })

  React.useEffect(() => {
    if (!similarProducts.length && !alreadyDispatched) {
      dispatch(Search({
        // Categories: should be included the product categories ere
        // Tags: should be included the product tags ere
        // Price: may be included the product price ere
      }))
      setAlreadyDispatched(true)
    }
  }, [])

  if (loading) {
    return <Loader />
  }

  if (!data || !data.product) {
    return <NoMatch />
  }

  return (
    <section className={classNames(styles.product, 'container')}>
      <div className={classNames(styles.info, 'grid')}>
        <div className={classNames(styles.images, 'col-6_sm-12', 'd--f', 'fd')}>
          <div className={styles.imageList}>
            {images.map((image, index) => (
              <div
                key={image}
                className={classNames(
                  styles.imageItem,
                  'mb-3',
                  {
                    [styles.active]: index === activeImage,
                  }
                )}
                onClick={() => setActiveImage(index)}
              >
                <AnimatePresence>
                  <motion.img
                    src={image}
                    alt={data.product.name}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className={classNames(styles.imagePreview, 'ml-3')}>
            <img src={images[activeImage]} alt={data.product.name} />
          </div>
        </div>

        <div className={classNames(styles.details, 'col-6_sm-12', 'pl-3')}>
          <Heading level={2} size="xl" className="mb-3">{data.product.name}</Heading>

          <Paragraph className="mb-4" color="gray">{data.product.description}</Paragraph>

          <hr />

          <Heading level={4} size="md" className="mt-4 mb-2">{data.product.price}$</Heading>

          <div className="mb-3 d--f ai--c">
            <Rating rating={5} />
            <Paragraph className="mx-2" color="gray">|</Paragraph>
            <Paragraph color="gray">5.0 Rating</Paragraph>
            <Paragraph className="mx-2" color="gray">|</Paragraph>
            <Paragraph color="gray">22 Reviews</Paragraph>
          </div>

          <div className="mb-3">
            <Paragraph size="lg">Dictum/cursus/Risus</Paragraph>
          </div>

          <div className="mb-3 d--f ai--c">
            <div className={classNames(styles.counter, 'mr-2')}>
              <button onClick={() => setCount(count - 1)} disabled={!count}>
                <MdRemove />
              </button>

              <div><Paragraph size="xl" className="fw-bold">{count}</Paragraph></div>

              <button onClick={() => setCount(count + 1)} disabled={count > data.product.stock}>
                <MdAdd />
              </button>
            </div>

            <Button fullWidth={false} className="d--f jc--c ai--c">
              <AiOutlineShoppingCart size="20" className="mr-1" />
              Add to Cart
            </Button>
          </div>

          <hr />

          <div className="mt-3 mb-4">
            <div className="mb-2">
              <button className={classNames(styles.wishlist, 'mr-1', 'pl-0')}>
                <Paragraph className="d--f jc--c ai--c">
                  <AiOutlineHeart size="20" className="mr-1" />
                  Add to Wishlist
                </Paragraph>
              </button>

              <button className={classNames(styles.compare, 'ml-2')}>
                <Paragraph className="d--f jc--c ai--c">
                  <AiOutlineShareAlt size="20" className="mr-1" />
                  Compare
                </Paragraph>
              </button>
            </div>

            <Paragraph className="mb-2">
              Category: Pizz
            </Paragraph>

            <Paragraph className="mb-3">
              Tag: Our Shop
            </Paragraph>

            <Paragraph className="d--f ai--c">
              Share:
              <AiFillYoutube size="24" className="ml-1 mr-2" />
              <MdFacebook size="24" className="mr-2" />
              <AiFillTwitterCircle size="24" className="mr-2" />
              <AiFillInstagram size="24" />
            </Paragraph>
          </div>
          <hr />
        </div>
      </div>

      <Tabs
        tabs={[
          {
            label: 'Description',
            content: <Paragraph>{data.product.description}</Paragraph>
          },
          {
            label: 'Reviews',
            content: <Paragraph>Reviews</Paragraph>
          },
        ]}
      />

      <div className="d--f jc--sb mb-4 mt-10">
        <Heading level={4} size="md">Similar Products</Heading>

        <div className="d--f">
          <button className={classNames('arrow-prev', styles.arrow, styles.arrowPrev, 'mr-1')}>
            <AiOutlineArrowLeft />
          </button>
          <button className={classNames('arrow-next', styles.arrow, styles.arrowNext)}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        className="grid"
        navigation={{
          nextEl: `.arrow-next`,
          prevEl: `.arrow-prev`,
        }}
        modules={[Navigation]}
        slidesPerView={4}
        loop
      >
        {similarProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

Product.defaultProps = {}

export default Product

