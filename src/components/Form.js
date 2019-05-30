import React, {Component} from 'react'
import './../index.css'
import uuid from 'uuid';
import PropTypes from 'prop-types';

class Form extends Component{


    petNameRef = React.createRef();
    ownerNameRef = React.createRef();
    dateRef = React.createRef();
    hourRef = React.createRef();
    symRef = React.createRef();

    state = {

        error: false
    }

    createNewAppointment = (e) =>{

        e.preventDefault();

        const pet = this.petNameRef.current.value,
                owner = this.ownerNameRef.current.value,
                date = this.dateRef.current.value,
                hour = this.hourRef.current.value,
                symtoms = this.symRef.current.value

        if(pet === '' || owner === '' || date === '' || hour === ''  || symtoms === ''){

            this.setState({

                error: true,
            })
        
        }else{

            const newAppointment ={

                id: uuid(),
                pet : pet,
                owner : owner,
                date: date,
                hour: hour,
                symtoms: symtoms
            }

            this.props.createNewAppointment(newAppointment);
            e.currentTarget.reset();
            
            this.setState({

                error: false,
            })
        }
    }
        

    render(){
        const error = this.state.error;
        return(
            <div className= "card mt-5">
                <div className="card-body">
                    <h2 className= "card-title text-center mb-5">
                        Add your appointments here:
                    </h2>
                    <form onSubmit={this.createNewAppointment}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet's name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.petNameRef} type="text" className="form-control" placeholder="Pet's name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner's name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.ownerNameRef} type="text" className="form-control"  placeholder="Owner's name"/>
                            </div>
                        </div>
                
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.dateRef} type="date" className="form-control" />
                            </div>                            
                
                            <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.hourRef} type="time" className="form-control" />
                            </div>
                        </div>
                
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sympthoms</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.symRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Add</button>
                            </div>
                        </div>
                </form>
                    {error ? <div className='alert alert-danger text-center'>Please, fill the fields! </div>: ''}
                </div>
            </div>  
        );
    }
}

Form.proptype = {

    createNewAppointment : PropTypes.func.isRequired
}

export default Form;