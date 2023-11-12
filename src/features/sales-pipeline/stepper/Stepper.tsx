import React from 'react'
import Step from '../../../ui/Step'
import styles from './Stepper.module.scss'
import Logo from '../../../ui/Logo'
import Button from '../../../ui/Button'

export default function Stepper() {
  const steps = [
    {
      step: 1,
      text: 'Sales Pipeline Settings',
      isActive: true,
    },
    {
      step: 2,
      text: 'Opportunity Details Settings',
      isActive: false,
    },
  ]

  return (
    <div className={styles.stepper}>
      <Logo />
      <ul className={styles.steps}>
        {steps.map((step) => (
          <Step {...step} key={step.step} />
        ))}
      </ul>
      <Button text='Next' variant='primary' onClick={() => console.log('batata')} />
    </div>
  )
}
