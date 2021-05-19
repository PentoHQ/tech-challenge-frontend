import React from 'react'
import css from './story.module.scss'
import Button from '../Button'
import Text from '../Text'

import Card, { CardContent, CardDivider, CardHeader, RawCard } from './Card'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    options: { showPanel: true },
  },
} as Meta

/**
 * Use the default export to provide interactivity using knobs.
 * It will give a better overview of what the component is capable.
 */
export const Default = () => {
  return (
    <Card>
      <CardContent>This are the card contents</CardContent>
    </Card>
  )
}

export const WithDivider = () => (
  <Card>
    <CardContent>
      Set up a cycle to work salary sacrifice plan. The amount will be deducted from the net pay
      each payroll.
    </CardContent>
    <CardDivider />
    <CardContent>
      Set up a loan repayment schedule that will be deducted from the net pay each payroll.
    </CardContent>
  </Card>
)

export const ManyContents = () => {
  const amount = 4
  const contents = [
    ' Set up a cycle to work salary sacrifice plan. The amount will be deducted from the net pay each payroll.',
    ' Set up a loan repayment schedule that will be deducted from the net pay each payroll. ',
  ]
  return (
    <Card>
      {Array(amount)
        .fill(contents)
        .reduce((a, b) => a.concat(b))
        .map((content: string, idx: number, arr: any) => (
          <React.Fragment key={idx}>
            <CardContent>{content}</CardContent>
            {idx !== arr.length - 1 && <CardDivider />}
          </React.Fragment>
        ))}
    </Card>
  )
}

export const WithFooter = () => (
  <Card
    footer={
      <CardContent>
        <Button color="primary">Setup connection</Button>
      </CardContent>
    }
  >
    <CardContent>
      Set up your connection for HMRC and RTI reporting by entering your company's credentials.
    </CardContent>
  </Card>
)

export const Compact = () => (
  <Card>
    <CardContent compact>
      <Text>I'm compact as hell!!</Text>
    </CardContent>
  </Card>
)
export const WithHeader = () => (
  <Card>
    <CardHeader>
      <Text>Use the card header to separate the top content from the CardContent.</Text>
    </CardHeader>
    <CardContent>
      <Button>Sure thing!</Button>
    </CardContent>
  </Card>
)
export const GreyBackground = () => (
  <Card bgColor="grey">
    <CardContent compact>
      <Text>I'm just a card with a grey background. Is that cool?</Text>
    </CardContent>
  </Card>
)

export const NoPaddingExample = () => (
  <RawCard>
    <table className={css.table}>
      <tr className={css.header}>
        <th>Annual salary</th>
        <th>Effective Date</th>
      </tr>
      <tr>
        <td>1,100,000</td>
        <td>6th April 2020</td>
      </tr>
      <tr>
        <td>36,000,000</td>
        <td>6th April 2020</td>
      </tr>
      <tr>
        <td>110,000,000</td>
        <td>6th April 2020</td>
      </tr>
    </table>
  </RawCard>
)
