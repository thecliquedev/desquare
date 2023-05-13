import React, {useEffect} from 'react';

export default function MainRoute() {
    useEffect(() => {
        const owl = window.$('.owl-carousel');
        owl.owlCarousel({
            items:1,
            loop:true,
            animateOut: 'fadeOut',
            margin:10,
            autoplay:true,
            pagination: false,
            nav:false,
            transitionStyle : "fade",
            autoplayTimeout:2000
            //autoplayHoverPause:true
        });
    }, []);
    return (
        <div className="disappear">
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <div className="inner_item">
                        <img src={`${process.env.PUBLIC_URL}/images/slide1.JPG`} alt="" className="black_white__img" />
                    </div>
                </div>
                <div className="item">
                    <div className="inner_item">
                        <img src={`${process.env.PUBLIC_URL}/images/slide2.JPG`} alt="" className="black_white__img" />
                    </div>
                </div>

                <div className="item">
                    <div className="inner_item">
                        <img src={`${process.env.PUBLIC_URL}/images/slide3.JPG`} alt="" className="black_white__img" />
                    </div>
                </div>

                <div className="item">
                    <div className="inner_item">
                        <img src={`${process.env.PUBLIC_URL}/images/slide4.JPG`} alt="" className="black_white__img" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="content">
                            <br/>
                            <h1>ABOUT</h1>
                            <br/>
                            <p>
                                Founded in 2011 by Ar. Naveen G.J. (alumnus of R.V. College, Bangalore), de Square is a
                                multi-disciplinary young firm of enthusiastic, committed professionals willing to
                                experiment and innovate. Striving to be one of the best residential architects in
                                Bangalore, quality is always held in high regards. Within a few years of its inception,
                                de Square has successfully undertaken a wide range of development projects, encompassing
                                contemporary styles, traditional sketches and elegant home renovation ventures.
                            </p>

                            <br/><br/>

                            <h2 className="text-uppercase">Vision</h2>
                            <br/>
                            <p>
                                We, at de Square, believe architecture plays a pivotal role in shaping the environment
                                around us Dedicated to the design of high value, environment friendly and sustainable
                                architecture, we give a lot of importance to the “nature” in all our projects. We strive
                                to get the right balance between the built and the un-built while designing our
                                projects. In short, Our vision is to be noted as one of the best residential architects
                                in Bangalore. <a href="/about">Readmore</a>
                            </p>

                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
