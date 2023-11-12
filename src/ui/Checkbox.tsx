import React from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps {
  text: string
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({ text, isChecked, onChange }: CheckboxProps) {
  return (
    <li>
      <label className={`${styles.checkboxLabel} ${isChecked ? styles.activeLabel : ''}`}>
        <input type='checkbox' checked={isChecked} onChange={onChange} className={styles.hiddenCheckbox} />

        <span className={`${styles.customCheckbox} ${isChecked ? styles.activeCheckbox : ''}`}></span>
        <span>{text}</span>
      </label>
    </li>
  )
}
