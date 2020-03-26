import React, { Component } from 'react';
import './HandleRes.css';

 const HandleRes = (props) =>{
        return (
            <div className="handlebackend">
                    <div className={"alert alert-dismissible fade show "+props.stylecss} role="alert">
                        {props.title}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
        )
    }

export default HandleRes;