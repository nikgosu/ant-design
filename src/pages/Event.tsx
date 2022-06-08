import React, {FC, useEffect} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import {useState} from "react";
import EventForm from "../components/EventForm";
import {UseActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {IEvent} from "../models/IEvent";

const Event:FC = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const {guests, events} = useTypesSelector(state => state.event)
  const {user} = useTypesSelector(state => state.auth)
  const {fetchGuests, createEvent, fetchEvents} = UseActions()

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])

  const addNewEvent = (event: IEvent) => {
    createEvent(event)
    setModalVisible(false)
  }

  return (
    <Layout>
      <EventCalendar events={events}/>
      <Row justify={'center'}>
        <Button
          onClick={() => setModalVisible(true)}
        >
          Add event
        </Button>
      </Row>
      <Modal
        title={'Add event'}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <EventForm
          submit={addNewEvent}
          guests={guests}
        />
      </Modal>
    </Layout>
  );
};

export default Event;