import React from 'react'
import classNames from 'classnames'
import styles from './range.module.scss'
import { Paragraph } from '../Paragraph'

interface Props {
  min: number
  max: number
  onChange: (range: { min: number, max: number }) => void
}

const Range: React.FC<Props> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = React.useState(min)
  const [maxVal, setMaxVal] = React.useState(max)
  const minValRef = React.useRef(min)
  const maxValRef = React.useRef(max)
  const range = React.useRef<HTMLDivElement>(null)

  // Convert to percentage
  const getPercent = React.useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  React.useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  React.useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  React.useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className={styles.range}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1)
          setMinVal(value)
          minValRef.current = value
        }}
        className={classNames(styles.thumb, styles.thumbLeft)}
        style={{ zIndex: 5 /*minVal > max - 100 ? "5" : '5' */ }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1)
          setMaxVal(value)
          maxValRef.current = value
        }}
        className={classNames(styles.thumb, styles.thumbRight)}
      />

      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <div className={styles.sliderTrack} />
          <div ref={range} className={styles.sliderRange} />
        </div>
        <div className="d--f jc--sb mt-1">
          <Paragraph color="gray">From ${minVal} to ${maxVal}</Paragraph>
        </div>
      </div>
    </div>
  )
}

Range.defaultProps = {
  min: 0,
  max: 100,
  onChange: () => { },
}

export default Range
