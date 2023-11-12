import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string
  text: string
}

export default function Button({ variant, text, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {text}
    </button>
  )
}
