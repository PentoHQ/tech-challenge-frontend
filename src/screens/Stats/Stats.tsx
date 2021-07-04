import React from 'react';

import Spacer from 'components/Spacer';
import { PageBody } from 'components/Page';
import MonthChart from './components/MonthChart';
import StatsControl from './components/StatsControl';

export default function StatsPage(props: any) {
  return (
    <PageBody>
      <Spacer pb={4}>
        <StatsControl />
      </Spacer>
      <MonthChart />
    </PageBody>
  );
}
