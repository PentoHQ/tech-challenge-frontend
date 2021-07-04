import NavigationBar from 'components/NavigationBar';
import NavigationItem from 'components/NavigationItem';

import styles from './StatsControl.module.scss';

type NavItems = { id: number; name: string; queryParam: string };

const statsNavItems: NavItems[] = [
  { id: 0, name: 'Summary', queryParam: '?summary' },
  { id: 1, name: 'Daily', queryParam: '?daily' },
  { id: 2, name: 'Weekly', queryParam: '?weekly' },
];

function StatsControl() {
  return (
    <NavigationBar title="Stats" className={styles.stats}>
      {statsNavItems?.map(({ id, name, queryParam }) => (
        <li>
          <NavigationItem key={id} url={queryParam} className={styles.navItem}>
            {name}
          </NavigationItem>
        </li>
      ))}
    </NavigationBar>
  );
}

export default StatsControl;
