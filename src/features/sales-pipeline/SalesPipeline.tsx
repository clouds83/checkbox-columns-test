import React, { useState } from 'react'
import styles from './SalesPipeline.module.scss'
import Stepper from './stepper/Stepper'
import Title from '../../ui/Title'
import Checkbox from '../../ui/Checkbox'
import SaleType from './sale-type/SaleType'

export default function SalesPipeline() {
  const [salesTypeGroups, setSalesTypeGroup] = useState([
    {
      name: 'Basic',
      isChecked: true,
      salesTypes: [
        { name: 'Lead', isActive: true },
        { name: 'Won', isActive: true },
        { name: 'Lost', isActive: true },
      ],
    },
    {
      name: 'Advanced',
      isChecked: false,
      salesTypes: [
        { name: 'Lead', isActive: true },
        { name: 'Submitted', isActive: true },
        { name: 'Won', isActive: true },
        { name: 'Lost', isActive: true },
      ],
    },
    {
      name: 'Expert',
      isChecked: false,
      salesTypes: [
        { name: 'Lead', isActive: true },
        { name: 'RFP in progress', isActive: true },
        { name: 'Submitted', isActive: true },
        { name: 'Won', isActive: true },
        { name: 'Lost', isActive: true },
        { name: 'Closed', isActive: true },
      ],
    },
    {
      name: 'Custom',
      isChecked: false,
      salesTypes: [
        { name: 'Lead', isActive: false },
        { name: 'RFP in progress', isActive: false },
        { name: 'Submitted', isActive: false },
        { name: 'Won', isActive: false },
        { name: 'Lost', isActive: false },
        { name: 'Closed', isActive: false },
      ],
    },
  ])

  const handleCheckboxChange = (selectedType: string) => {
    setSalesTypeGroup(
      salesTypeGroups.map((salesType) => ({
        ...salesType,
        isChecked: salesType.name === selectedType,
      }))
    )
  }

  return (
    <>
      <header className={styles.header}>
        <Stepper />
      </header>
      <main className={styles.main}>
        <div className='container'>
          <Title level='h3'>Please select the type of sales pipeline that best fits your company</Title>

          <ul className={styles.salesTypeSelector}>
            {salesTypeGroups.map((group) => (
              <Checkbox
                text={group.name}
                isChecked={group.isChecked}
                onChange={() => handleCheckboxChange(group.name)}
                key={group.name}
              />
            ))}
          </ul>

          <ul className={styles.salesTypes}>
            {salesTypeGroups
              .find((group) => group.isChecked)
              ?.salesTypes.map((type) => (
                <SaleType name={type.name} isActive={type.isActive} key={type.name} />
              ))}
          </ul>
        </div>
      </main>
    </>
  )
}
