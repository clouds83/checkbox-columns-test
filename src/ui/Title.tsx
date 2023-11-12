import React from 'react'
import styles from './Title.module.scss'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  level: HeadingLevels
}

export default function Title({ children, level, ...props }: TitleProps) {
  const Tag = level as React.ElementType

  const className = [props.className, styles[level], styles.title].filter(Boolean).join(' ')

  return (
    <Tag {...props} className={className}>
      {children}
    </Tag>
  )
}
