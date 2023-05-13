import React, { useState, useEffect } from 'react';
import axios from "../../http";

import {checkLogin} from "../setAuthToken";

export default function Projects(){
    const [awards, setAwards] = useState([]);
    const [selectedAward, setSelectedAward] = useState({heading: '', desc: ''});

    useEffect(() => {
        checkLogin();
    }, []);


    useEffect(() => {
        axios
            .get("/awards")
            .then(res => {
                setAwards(res.data);
            })
            .catch(e => {
                console.log(e)
            });
    }, []);

    function onSubmit(e){
        e.preventDefault();

        const data = {
            heading: e.target.mainHeading.value,
            desc: e.target.desc.value
        };

        axios
            .post("/awards/create", data)
            .then(res => {
                window.location.href = '/admin/awards'
            })
            .catch(e => {
                console.log(e)
            });
    }

    function onSelectEdit(id){
        axios
        .get(`/awards/${id}`)
        .then(res => {
            setSelectedAward(res.data);
        })
        .catch(e => {
            console.log(e)
        });
    }

    function editAwards(e) {
        e.preventDefault();

        const data = {
            heading: e.target.mainHeading.value,
            desc: e.target.desc.value
        };

        axios
        .post(`/awards/edit/${selectedAward.id}`, data)
        .then(res => {
            window.location.href = '/admin/awards'
        })
        .catch(e => {
            console.log(e)
        });
    }

    function deleteAwards(id) {
        axios
            .delete(`/awards/${id}`)
            .then(res => {

            })
            .catch(e => {
                console.log(e)
            });
        window.location.href = '/admin/awards';
    }

    return <div className="container">

        <div className="text-center">
            <h3></h3>
        </div>
        <div className="text-right">
            <button className="btn btn-default" data-toggle="modal" data-target="#myModal"><h5>Add Award <i
                className="fa fa-plus-square" aria-hidden="true" style={{paddingLeft: 5}} /></h5></button>
        </div>


        <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <div className="text-center">
                            <h4 className="modal-title">Add Awards</h4>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="name">Heading:</label>
                                <input type="text" className="form-control" name="mainHeading" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Description:</label>
                                <textarea className="form-control" rows="5" id="comment" name="desc" required />
                            </div>

                            <div className="text-right">
                                <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

        <div id="myEditModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <div className="text-center">
                            <h4 className="modal-title">Edit Awards</h4>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={editAwards} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="name">Edit Heading:</label>
                                <input type="text" defaultValue={selectedAward.heading} className="form-control" name="mainHeading" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Edit Description:</label>
                                <textarea className="form-control" defaultValue={selectedAward.desc} rows="5" id="comment" name="desc" required/>
                            </div>

                            <div className="text-right">
                                <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>


        <div className="row">
            <div className="container">
                <div className="row" style={{marginTop: 20}}>
                    <div className="col-8">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Award Heading</th>
                                <th scope="col">Description</th>
                                <th scope="col">actions</th>
                            </tr>
                            </thead>
                            <tbody id="rows">
                            {
                                awards.length !== 0 && awards.map((e, i) => {
                                    return <tr key={e._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{e.heading}</td>
                                        <td>{e.desc}</td>
                                        <td>
                                        <span style={{cursor: 'pointer'}} data-toggle="modal" data-target="#myEditModal" onClick={evt => onSelectEdit(e._id)}>
                                           <i className="fa fa-pencil-square-o" aria-hidden="true" style={{padding: 5}} />
                                            Edit
                                        </span>

                                        <span onClick={() => deleteAwards(e._id)} style={{paddingLeft: 50, cursor: 'pointer'}}>
                                            <i className="fa fa-trash-o" aria-hidden="true" style={{padding: 5}} />
                                            Delete
                                        </span>
                                        </td>
                                    </tr>
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
