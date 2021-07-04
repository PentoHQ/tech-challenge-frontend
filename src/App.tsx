import { Switch } from 'react-router';
import { Link, Route, useLocation } from 'react-router-dom';

import Tabs, { Tab } from './components/Tabs';
import Page from './components/Page';
import SessionsList from './screens/SessionsList';
import StatsPage from './screens/Stats';

import styles from './App.module.scss';

function App() {
  const location = useLocation();

  return (
    <Page className={styles.APP}>
      <Tabs selected={location.pathname} tabComponent={Link}>
        <Tab label="sessions" value="/" to="/"></Tab>
        <Tab label="Stats" value="/stats" to="/stats"></Tab>
      </Tabs>
      <Switch>
        <Route path="/" exact component={SessionsList} />
        <Route path="/stats" exact component={StatsPage} />
      </Switch>
    </Page>
  );
}

export default App;
