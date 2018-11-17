import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ channels, handleReceivedMessage }) => {
  return (
    <Fragment>
      {channels.map(channel => {
        return (
          <ActionCable
            key={channel.id}
            channel={{ channel: 'MessagesChannel', server_channel: channel.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;