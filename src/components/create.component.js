import React, { Component } from 'react'

export default class createComponent extends Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            person_name: '',
            business_name: '',
            bussiness_gst_number: ''
        }
    }
    render ()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form action="">
                            <div className="from-group">
                                <label htmlFor="person_name">Person Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="business_name">Business Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bussiness_gst_number">Gst Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
