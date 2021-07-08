import React, { useState } from 'react';
import { format } from 'date-fns';
import { Formik } from 'formik';

import { Sessions, Sessions_Pk_Columns_Input } from 'generated/graphql';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Spacer from 'components/Spacer';
import PlayButton from 'components/PlayButton';
import Loading from 'components/Loading';
import Error from 'components/Error';
import { PageBody } from 'components/Page';
import { RawCard } from 'components/Card';
import Modal from 'components/Modal';
import { diffDateStrings } from 'utils/diffDateStrings';
import { dayOfMonth } from 'utils/dayOfMonth';
import { msToHourMinSec } from 'utils/formatters/msToHourMinSec';
import { strToISO } from 'utils/strToISO';
import { useGetSessions, useRunningSession, useUpdateSession } from 'hooks';
import useSwitchSession from 'hooks/useSwitchSession';

import SessionControls from './components/SessionControls';
import EditSessionBody from './components/EditSessionBody';

export interface UpdatingFormData {
  name: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

function RowAction({ name }: { name: string }) {
  const switchSession = useSwitchSession();
  const handlePlayButton = (e: any) => {
    e.stopPropagation();
    switchSession(name);
  };
  return (
    <PlayButton
      size="small"
      onClick={(e: any) => handlePlayButton(e)}
    ></PlayButton>
  );
}

export default function SessionsList() {
  const { isLoading } = useRunningSession();
  const { data, isLoading: isListLoading, error } = useGetSessions();
  const { updateSession } = useUpdateSession();

  const [updatingSession, setUpdatingSession] = useState<Sessions>();
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickonSession = (id: Sessions_Pk_Columns_Input) => {
    setUpdatingSession(
      data?.sessions?.find((session: Sessions) => session.id === id)
    );
    setVisible(true);
  };

  const handleUpdateSession = async (values: UpdatingFormData) => {
    await updateSession(
      {
        name: values?.name,
        startDate: strToISO(values.startDate, values.startTime),
        endDate: strToISO(values.endDate, values.endTime),
      },
      { id: updatingSession?.id }
    );
    setVisible(false);
  };

  return !isListLoading && !isLoading ? (
    <PageBody>
      <Spacer pb={4}>
        <SessionControls />
      </Spacer>
      <RawCard>
        {error ? (
          <Error message={error.message} />
        ) : (
          <List scrollable>
            {data?.sessions.map(({ id, name, startDate, endDate }) => (
              <ListItem
                key={id}
                title={name}
                subtitle=""
                action={<RowAction name={name} />}
                header={
                  <div>
                    {format(new Date(startDate), 'iii')},{' '}
                    {dayOfMonth(new Date(startDate))}
                  </div>
                }
                details={
                  <div>
                    {msToHourMinSec(diffDateStrings(startDate, endDate)).join(
                      ':'
                    )}
                  </div>
                }
                onClick={() => {
                  handleClickonSession(id);
                }}
              />
            ))}
          </List>
        )}
      </RawCard>
      <Modal
        visible={visible}
        setVisible={() => setVisible(!visible)}
        title="Edit Session"
      >
        {updatingSession && (
          <Formik
            initialValues={{
              name: updatingSession?.name || '',
              startDate: format(
                new Date(updatingSession?.startDate),
                'yyyy/MM/dd'
              ),
              startTime: format(
                new Date(updatingSession?.startDate),
                'hh:mm:ss'
              ),
              endDate: format(new Date(updatingSession?.endDate), 'yyyy/MM/dd'),
              endTime: format(new Date(updatingSession?.endDate), 'hh:mm:ss'),
            }}
            onSubmit={(values: UpdatingFormData) => handleUpdateSession(values)}
          >
            <EditSessionBody session={updatingSession as any} />
          </Formik>
        )}
      </Modal>
    </PageBody>
  ) : (
    <Loading />
  );
}
