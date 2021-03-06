import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <Fragment>
        {events.map(event => (
          < EventListItem Date
            event={event} 
            key={event.id} 
            deleteEvent={deleteEvent}
          />
        ))}
      </Fragment>
    )
  }
}

export default EventList;