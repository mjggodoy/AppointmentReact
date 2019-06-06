import React, {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './index.css'
import AppointmentList from './components/AppointmentList'


class App extends Component {

  state = {

    appointments : []

  }

  componentDidMount(){

    const things = localStorage.getItem('Appointments');
    if(things){

      this.setState({

        appointments: JSON.parse(things)

      })
    }
  }

  componentDidUpdate(){
      
      localStorage.setItem(
      'Appointments', 
      JSON.stringify(this.state.appointments));
  }

  createNewAppointment = (newAppointment) => {

    const appointments = [...this.state.appointments , newAppointment];
    this.setState ({
        
      appointments
    })
  }

  deleteAppointment = (appointment) => {

    const appointmentscopy = [...this.state.appointments]
    const appointments = appointmentscopy.filter(element => element.id !== appointment);

    this.setState ({
        
      appointments
    })
  }

  render(){
    return (
      <div className="container">
        <Header
            title = {'Your Pet Registration'}
        />
        <div className="row"> 
          <div className="col-md-6">
            <Form
              createNewAppointment = {this.createNewAppointment}
            />
          </div>
          <div className="col-md-6">
            <AppointmentList

              appointment = {this.state.appointments}
              delete = {this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
