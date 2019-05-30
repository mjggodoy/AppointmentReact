import React,{Component} from 'react';
import Appointment from './Appointment';
import './../index.css'
import PropTypes from 'prop-types';


class AppointmentList extends Component{

    render(){

        const appointments = this.props.appointment;  
        const message = appointments.length === 0 ? 'There are no appointments' : 'There are appointments to review:'

        return(

            <div className="card mt-5">
                <div className="card-body">
                    <h2 className= "card-title card center">{message}</h2>
                        <div className= "lista-citas">
                        {appointments.map((appointment, i) => {
                            
                            return <Appointment 
                            
                                key={i} 
                                appointment = {appointment}
                                delete = {this.props.delete}
                            />; 
                        })}
                        </div>
                </div>
            </div>
        )
    }
}

AppointmentList.proptype ={

    appointment: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired
}

export default AppointmentList;