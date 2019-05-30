import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Appointment extends Component{

    deleteAppointment = () => {

        this.props.delete(this.props.appointment.id);
    }

    render(){

        const {symtoms, pet, owner, date, hour, id} = this.props.appointment;
        console.log(id);

        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0"><span>Pet's Name: {pet}</span></h3>
                    <p className="card-text"><span>Owner's Name: {owner}</span></p>
                    <p className="card-text"><span>Date: </span>{date}</p>
                    <p className="card-text"><span>Hour: </span>{hour}</p>
                    <p className="card-text"><span>Sympthoms: </span>{symtoms}</p>
                    <button onClick={this.deleteAppointment} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}


Appointment.proptype={

    key: PropTypes.number.isRequired,
    appointment: PropTypes.shape({
        
        id: PropTypes.string.id,
        date: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        pet: PropTypes.string.isRequired,
        symtoms: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired

    }),

    delete: PropTypes.func.isRequired
}

export default Appointment;