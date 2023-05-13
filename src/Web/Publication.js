import React, {useEffect, useState} from 'react';
import axios from "../http";

export default function MainRoute() {
    const [publishers, setPublishers] = useState([]);
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        axios
            .get("/awards")
            .then(res => {
                setAwards(res.data);
            })
            .catch(e => {
                console.log(e)
            });

        axios
            .get("/publishers")
            .then(res => {
                setPublishers(res.data);
            })
            .catch(e => {
                console.log(e)
            });
    }, []);

    return (
        <div className="about-us bgImage">
            <div className="fromTop" />
            <div className="fromTop" />
            <div className="fromBottom" />
            <div className="fromBottom" />
            <div className="container">
                <div className="space-top-work" />
                <div className="scroll animated fadeInUp delayBy8" style={{ padding:'0 24px', height: 600 }}>
                    <div className="row well">
                        <div className="col-md-6">
                            <div>
                                <h2>Publications</h2>
                            </div>

                            {
                                publishers.length !== 0 && publishers.map(e => {
                                    return <div className="col-md-12 publication-content">
                                        <h3>{e.heading}</h3>
                                        <h5 dangerouslySetInnerHTML={{ __html: e.desc }} />
                                        <br />
                                    </div>
                                })
                            }
                        </div>

                        <div className="col-md-6">
                            <div>
                                <h2>Awards</h2>
                            </div>

                            {
                                awards.length !== 0 && awards.map(e => {
                                    return <div className="col-md-12 publication-content">
                                        <h3>{e.heading}</h3>
                                        <h5 dangerouslySetInnerHTML={{ __html: e.desc }} />
                                        <br />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    );
}
