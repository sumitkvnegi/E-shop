import React from 'react'
import './about.css'

const About = () => {
    return (
        <div>
            <div className="about-section">
                <div className="inner-width">
                    <h1>About Us</h1>
                    <div className="border"></div>
                    <div className="about-section-row">
                        <div className="about-section-col">
                            <div className="about">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="about-section-col">
                            <div className="skills">
                                <div className="skill">
                                    <div className="title">Web Develpor</div>
                                    <div className="progress">
                                        <div className="progress-bar p1"><span>90%</span></div>
                                    </div>
                                </div>

                                <div className="skill">
                                    <div className="title">UI Design</div>
                                    <div className="progress">
                                        <div className="progress-bar p2"><span>70%</span></div>
                                    </div>
                                </div>

                                <div className="skill">
                                    <div className="title">UX Design</div>
                                    <div className="progress">
                                        <div className="progress-bar p3"><span>50%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About