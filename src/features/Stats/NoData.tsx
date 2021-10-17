import clsx from 'clsx'
import Text from '../../components/Text'
import styles from './NoData.module.scss'

interface NoDataProps {
  className?: string
}

export function NoData(props: NoDataProps) {
  const { className } = props
  const classes = clsx(styles.nodata, className)
  return (
    <div className={classes}>
      <Text variant="h2">No data available</Text>
    </div>
  )
}
