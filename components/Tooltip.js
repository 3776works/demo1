import { useState } from 'react'
import styles from '../components/Tooltip.module.css'

export default function Tooltip(props) {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false)

  const tooltipHandler = () => {
    setTooltipIsOpen((prevState) => !prevState)
  }
  const closeTooltipHandler = () => {
    setTooltipIsOpen(false)
  }

  return (
    <>
      <button
        className={styles.tooltipButton}
        onClick={tooltipHandler}
        onBlur={closeTooltipHandler}
        type="button"
      >
        {props.buttonName}
      </button>
      {/* tooltip itself */}
      {tooltipIsOpen && <div className={styles.tooltip}>{props.children}</div>}
    </>
  )
}
