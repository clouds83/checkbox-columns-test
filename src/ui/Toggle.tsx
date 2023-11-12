import React from 'react'
import styles from './Toggle.module.scss'

interface ToggleProps {
  id: string
  isActive: boolean
  color?: string
}

export default function Toggle({ id, isActive, color }: ToggleProps) {
  return (
    <div className={`${styles.toggleButton} ${color && styles[color]}`}>
      <input id={id} className={styles.toggle} type='checkbox' onChange={() => {}} checked={isActive} />

      <label htmlFor={id}>
        <span className={styles.button}></span>
      </label>
    </div>
  )
}
