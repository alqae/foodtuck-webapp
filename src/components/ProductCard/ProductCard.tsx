import React from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './product-card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { HiOutlineShoppingBag, HiHeart, HiOutlineHeart } from 'react-icons/hi'

import { SearchActionTypes } from '../../store/reducers'
import { AppDispatch, RootState } from '../../store'
import { ButtonIcon } from '../ButtonIcon'
import { Paragraph } from '../Paragraph'
import { Product } from '../../models'
import { useNavigate } from 'react-router-dom'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const car = useSelector<RootState, Product[]>((state) => state.search.car)
  const isProductOnCard = !!car.find((item) => item.id === product.id)
  const addToCart = () => dispatch({
    type: isProductOnCard
      ? SearchActionTypes.removeFromCar
      : SearchActionTypes.addToCar,
    payload: product,
  })

  return (
    <div
      key={product.id}
      className={classNames(styles.card)}
      onClick={() => navigate(`/shop/${product.id}`)}
    >
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} />

        <motion.div className={classNames(styles.actions, 'd--f', 'jc--c', 'ai--c')}>
          <ButtonIcon
            className="mr-2"
            icon={isProductOnCard ? MdOutlineRemoveShoppingCart : HiOutlineShoppingBag}
            onClick={addToCart}
          />

          <ButtonIcon
            color="secondary"
            icon={true ? HiHeart : HiOutlineHeart}
            onClick={() => { }}
          />
        </motion.div>
      </div>

      <div className="mt-1">
        <Paragraph size="lg" as="span" className="fw-bold">{product.name}</Paragraph>
        <Paragraph color="primary" size="md">$ {product.price}</Paragraph>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {}

export default ProductCard
