import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { Children } from 'react'
import capitalize from '../../util/capitaize'
import { useGetUserProfile } from './hooks'
import styles from './Tabs.module.scss'

export interface TabsProps {
  /**
   * How large should the tabs be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Tabs contents
   */
  children: any
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  noUnderline?: boolean
  selected: string
  onChange?: (v: string) => void
  tabComponent: React.ElementType
}

function Tabs({
  className,
  children,
  selected,
  onChange,
  tabComponent,
  size,
  noUnderline,
}: TabsProps) {
  const classes = [
    styles.wrapper,
    size === 'large' ? styles.tallTabs : '',
    noUnderline ? styles.noUnderline : '',
    className,
  ].join(' ')
  const { logout } = useAuth0()
  const { avatarURL } = useGetUserProfile()

  return (
    <div className={classes}>
      <AnimateSharedLayout>
        {Children.map(children, (tab) =>
          React.cloneElement(tab, {
            onClick: () => onChange?.(tab.props.value),
            active: selected === tab.props.value,
            ...(tabComponent ? { component: tabComponent } : {}),
          }),
        )}
      </AnimateSharedLayout>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        startIcon={<ExitToAppIcon />}
        onClick={() => logout()}
        style={{ marginLeft: 'auto' }}
        endIcon={
          <Avatar
            alt="profile"
            src={avatarURL || ''}
            style={{ width: '2.5rem', height: '2.5rem' }}
          />
        }
      >
        Log out
      </Button>
    </div>
  )
}

export default Tabs

type TabProps = {
  /**
   * Will be injected by Tabs component, you don't need to provide it
   */
  active?: boolean
  /**
   * Will be injected by Tabs component, don't provide it
   */
  onClick?: () => void
  badge?: string
  /**
   * The component to use for rendering the tab.
   * Can be any react component like LinkTo or a string like `a`
   */
  component?: React.ElementType
  className?: string
  /**
   * Will be read and used by the Tabs component
   */
  value: string
  label: string
  // I wanted to do it better, but this should do the trick for this quick thing
  to?: string
}

export const Tab = ({
  label,
  badge,
  active: isActive = false,
  component: Component = 'button',
  className = '',
  ...props
}: TabProps) => {
  const classes = [styles.tab, isActive ? styles.active : '', className].join(' ').trim()
  return (
    <div className={styles.tabWrapper}>
      <Component {...props} className={classes}>
        {capitalize(label)}
      </Component>
      {isActive && <motion.div layoutId="tabs-underline" className={styles.underline}></motion.div>}
    </div>
  )
}
