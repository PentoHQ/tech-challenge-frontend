import styles from './App.module.scss';
import { Switch } from 'react-router';
import SessionsListPage from './features/SessionsList/Page';
import { Link, Route, useLocation } from 'react-router-dom';
import Tabs, { Tab } from './components/Tabs';
import Page from './components/Page';
import StatsPage from './features/Stats';

function App() {
  const location = useLocation();

  return (
    <Page className={styles.APP}>
      <Tabs selected={location.pathname} tabComponent={Link}>
        <Tab label="sessions" value="/" to="/"></Tab>
        <Tab label="Stats" value="/stats" to="/stats"></Tab>
      </Tabs>
      <Switch>
        <Route path="/" exact component={SessionsListPage} />
        <Route path="/stats" exact component={StatsPage} />
      </Switch>
    </Page>
  );
}

export default App;
