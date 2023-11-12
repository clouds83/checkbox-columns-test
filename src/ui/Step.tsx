import React from 'react'
import styles from './Step.module.scss'

interface StepProps {
  step: number
  text: string
  isActive: boolean
}

export default function Step({ step, text, isActive }: StepProps) {
  return (
    <li className={styles.step}>
      <div className={isActive ? styles.active : ''}>{step}</div>
      <h2>{text}</h2>
    </li>
  )
}
