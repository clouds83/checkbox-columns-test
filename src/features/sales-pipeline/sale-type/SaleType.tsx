import React from 'react'
import styles from './SaleType.module.scss'
import Toggle from '../../../ui/Toggle'
import Title from '../../../ui/Title'

interface SaleTypeProps {
  name: string
  isActive: boolean
}

export default function SaleType({ name, isActive }: SaleTypeProps) {
  const defineColor = (name: string) => {
    switch (name) {
      case 'Lead':
        return 'violet'

      case 'RFP in progress':
        return 'orange'

      case 'Submitted':
        return 'blue'

      case 'Won':
        return 'teal'

      case 'Lost':
        return 'pink'

      case 'Closed':
        return 'gray'

      default:
        return 'defaultColor'
    }
  }

  const color = defineColor(name)

  return (
    <li className={`${styles.saleType} ${styles[color]}`}>
      <Title level='h4' className={styles.title}>
        {name}
      </Title>
      <Toggle id={name} isActive={isActive} color={color} />
      <div className={styles.infoBox}></div>
    </li>
  )
}
