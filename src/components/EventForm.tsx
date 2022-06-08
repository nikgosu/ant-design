import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment/moment";
import {formatDate} from "../utils/date";
import {useTypesSelector} from "../hooks/useTypesSelector";

interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm:FC<EventFormProps> = (props) => {

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent)
  const {user} = useTypesSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) setEvent({...event, date: formatDate(date.toDate())})
  }

  const submitForm = () => {
    props.submit({...event, author: user.username})
  }

  return (
    <Form
      onFinish={submitForm}
    >
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required('Please input event description!')]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({...event, description: e.target.value})}
          name="description"
        />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required('Please input event date!'), rules.isDateAfter('Please input correct date')]}
      >
        <DatePicker
          onChange={date => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Event guest"
        name="guest"
        rules={[rules.required('Please input guest name!')]}
      >
        <Select onChange={(guest) => {
          setEvent({...event, guest})
        }}>
          {props.guests.map(guest =>
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          )}
        </Select>
      </Form.Item>
      <Row justify={'end'}>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;