import React from 'react'
import classNames from 'classnames'
import { faker } from '@faker-js/faker'
import styles from './shop.module.scss'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { useFieldArray, UseFieldArrayProps, useForm } from 'react-hook-form'

import { AppDispatch, RootState } from '../../store'
import { Search } from '../../store/reducers'
import { Product } from '../../models'
import {
  Badge,
  Checkbox,
  Dropdown,
  Heading,
  Loader,
  Paragraph,
  ProductCard,
  Range,
  SearchBar,
} from '../../components'

interface Props { }

interface SearchForm {
  query: string
  sort: string
  minPrice: number
  maxPrice: number
  tags: string[]
  categories: string[]
}

const categories = [
  { id: faker.datatype.uuid(), name: 'Clothing' },
  { id: faker.datatype.uuid(), name: 'Shoes' },
  { id: faker.datatype.uuid(), name: 'Accessories' },
  { id: faker.datatype.uuid(), name: 'Jewelry' },
  { id: faker.datatype.uuid(), name: 'Beauty' },
  { id: faker.datatype.uuid(), name: 'Home' },
  { id: faker.datatype.uuid(), name: 'Kids' },
  { id: faker.datatype.uuid(), name: 'Pets' },
  { id: faker.datatype.uuid(), name: 'Sports' },
  { id: faker.datatype.uuid(), name: 'Toys' },
  { id: faker.datatype.uuid(), name: 'Electronics' },
  { id: faker.datatype.uuid(), name: 'Books' },
]

const tags = [
  { id: faker.datatype.uuid(), name: 'New' },
  { id: faker.datatype.uuid(), name: 'Sale' },
  { id: faker.datatype.uuid(), name: 'Bestseller' },
  { id: faker.datatype.uuid(), name: 'Trending' },
  { id: faker.datatype.uuid(), name: 'Featured' },
  { id: faker.datatype.uuid(), name: 'Popular' },
  { id: faker.datatype.uuid(), name: 'Limited' },
  { id: faker.datatype.uuid(), name: 'Exclusive' },
  { id: faker.datatype.uuid(), name: 'Gift' },
  { id: faker.datatype.uuid(), name: 'Free Shipping' },
  { id: faker.datatype.uuid(), name: 'Free Returns' },
  { id: faker.datatype.uuid(), name: 'Free Gift' },
]

const sortOptions = [
  { value: 1, label: 'Newest' },
  { value: 2, label: 'Oldest' },
  { value: 3, label: 'Price: Low to High' },
  { value: 4, label: 'Price: High to Low' },
]

const Shop: React.FC<Props> = () => {
  const [currentPageData, setCurrentPageData] = React.useState<Product[]>([])
  const [pageCount, setPageCount] = React.useState<number>(0)
  const dispatch = useDispatch<AppDispatch>()
  const hits = useSelector<RootState, Product[]>((state) => state.search.hits || [])
  const isLoading = useSelector<RootState, Product[]>((state) => state.search.loading)
  const [currentPage, setCurrentPage] = React.useState(0)
  const PER_PAGE = 15

  React.useEffect(() => {
    const offset = currentPage * PER_PAGE
    setPageCount(Math.ceil(hits.length / PER_PAGE))
    setCurrentPageData(hits.slice(offset, offset + PER_PAGE))
  }, [currentPage, hits])

  React.useEffect(() => {
    dispatch(Search({}))
  }, [dispatch])

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    getValues,
  } = useForm<SearchForm>({
    defaultValues: {
      minPrice: 0,
      maxPrice: 100,
      query: '',
    }
  })

  const { append: appendCategory, remove: removeCategory } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'categories'
  } as UseFieldArrayProps<SearchForm>)

  const { append: appendTag, remove: removeTag } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'tags'
  } as UseFieldArrayProps<SearchForm>)

  watch((value) => {
    console.warn('Before search', {
    // dispatch(Search({
      query: value.query,
      maxPrice: value.maxPrice,
      minPrice: value.minPrice,
      categories: value.categories,
      tags: value.tags,
    // }))
    });
  }, {
    categories: [],
    minPrice: 0,
    query: '',
    tags: [],
  })

  // React.useEffect(() => {
  //   console.warn('watching')
  //   const subscription = watch((value) => {
  //     dispatch(Search({
  //       query: value.query,
  //       maxPrice: value.maxPrice,
  //       minPrice: value.minPrice,
  //       categories: value.categories,
  //       tags: value.tags,
  //     }))
  //   }, {
  //     categories: [],
  //     minPrice: 0,
  //     query: '',
  //     tags: [],
  //   })

  // //   return () => subscription.unsubscribe()
  // }, [dispatch])

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)

    const el = document.getElementById('layout')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onSubmit = (data: SearchForm) => {
    console.log(data)
  }

  return (
    <section className="container grid mt-0 pt-md-15 pt-8">
      <div className="col-12">
        <Paragraph as="label" className="mr-1">Sort By :</Paragraph>
        <Dropdown
          options={sortOptions}
          label="Sort By:"
          onChange={({ value }) => setValue('sort', value)}
        />
      </div>

      <div className="col-9_sm-12">
        {
          isLoading
            ? <Loader />
            : (
              <React.Fragment>
                <div className={styles.results} id="results">
                  {currentPageData.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>

                <ReactPaginate
                  previousLabel={<MdSkipPrevious size="24" />}
                  nextLabel={<MdSkipNext size="24" />}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={classNames(styles.pagination, 'd--f', 'ai--c', 'jc--c')}
                  disabledClassName={styles.disabled}
                  activeClassName={styles.active}
                />
              </React.Fragment>
            )
        }
      </div>

      <div className="col-3_sm-12 pl-3">
        <form onSubmit={handleSubmit(onSubmit)} className={classNames(styles.sideBar, 'p-3')}>
          <SearchBar name="query" control={control} />

          <React.Fragment>
            <Heading size="xs" className="mt-3 mb-1">Category</Heading>

            {categories.map((category, index) => (
              <Checkbox
                key={category.id}
                control={control}
                label={category.name}
                required={false}
                className="mt-2"
                name={category.name}
                onChange={(e) => {
                  const value = e.target.value
                  if (value) {
                    appendCategory(category.name)
                  } else {
                    removeCategory(index)
                  }
                }}
              />
            ))}
          </React.Fragment>

          <React.Fragment>
            <Heading size="xs" className="mt-3 mb-2">Latest Products</Heading>

            {/* <Range
              max={100}
              min={0}
              onChange={({ min, max }) => {
                setValue('minPrice', min)
                setValue('maxPrice', max)
              }}
            /> */}
          </React.Fragment>

          <React.Fragment>
            <Heading size="xs" className="mt-3 mb-1">Product Tags</Heading>

            <div className={styles.badgeContainer}>
              {tags.map((tag, index) => {
                const values = getValues('tags') || []
                const isActive = values.includes(tag.name)

                return (
                  <Badge
                    key={tag.id}
                    onClick={() => {
                      if (isActive) {
                        removeTag(index)
                      } else {
                        appendTag(tag.name)
                      }
                    }}
                    isActive={isActive}
                  >
                    {tag.name}
                  </Badge>
                )
              })}
            </div>
          </React.Fragment>
        </form>
      </div>
    </section>
  )
}

Shop.defaultProps = {}

export default Shop
