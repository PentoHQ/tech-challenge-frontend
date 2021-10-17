import { PageBody } from '../../components/Page'
import Spacer from '../../components/Spacer'
import Text from '../../components/Text'
import styles from './Page.module.scss'

export default function NotFoundPage() {
  return (
    <PageBody className={styles.wrapper}>
      <Text variant="title" inline={false}>
        ¯\_(ツ)_/¯
      </Text>
      <Spacer m={1} />
      <Text variant="h2">Oops we can't find what you are looking for...</Text>
    </PageBody>
  )
}
