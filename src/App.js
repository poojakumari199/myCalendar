import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, {useState} from'react';
import moment from 'moment'

function App() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar
      value={dateState}
      onChange={changeDate}
       />
       <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
          </>
  );
}

export default App;
