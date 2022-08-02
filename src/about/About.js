import React from "react";
import './About.css'
import bg from '../home2-large.webp'

export default function About(params) {
    return (
        <div className="About">
            <div className="About-left">
                SaaS3 Foundation<br/>Council
            </div>
            <div className="About-right">
                <div className="About-right-card">
                    <div className="About-right-card-avatar">
                        <img alt="avatar" src={bg} width="100%" height="100%" />
                    </div>
                    <div className="About-right-card-discription">
                        <div className="discription-name">
                            Steven Wong
                        </div>
                        <div className="discription-pos">
                        General Manager, Technical Specialist
                        </div>
                        <div className="discription-content">
                        Ph.D. in Computer Science.<br/>
                        Start Programming at the Age of 14. <br/>
                        National Informatics Olympiad (NOIP) Winner at Age of 16. <br/>
                        Guaranteed/Recommended Admission to University from High School skipping Entrance Exam at Age of 17.<br/>
                        Senior Software Engineer for the world’s leading lucrative Game 梦幻西游, Fantasy Westward Journey, $2.4bn as of March 2022.<br/>
                        Over 10 Hackathon Awards including BOP of Microsoft (1/20000). <br/>
                        Over 10 Publications at Top-conference & Journal during Ph.D. Research<br/>
                        Interviews with 0011.one, Zhihu<br/>
                        </div>
                    </div>
                </div>
                <div className="About-right-card">
                    <div className="About-right-card-avatar">
                        <img alt="avatar" src={bg} width="100%" height="100%" />
                    </div>
                    <div className="About-right-card-discription">
                        <div className="discription-name">
                        Israel Goytom
                        </div>
                        <div className="discription-pos">
                        Developer
                        </div>
                        <div className="discription-content">
                        CTO of Chapa<br/>
                        Previous Researcher in MILA, Google Brain
                        </div>
                    </div>
                </div>
                <div className="About-right-card">
                    <div className="About-right-card-avatar">
                        <img alt="avatar" src={bg} width="100%" height="100%" />
                    </div>
                    <div className="About-right-card-discription">
                        <div className="discription-name">
                        Nael Hailemariam
                        </div>
                        <div className="discription-pos">
                        Project Manager
                        </div>
                        <div className="discription-content">
                        CEO of Chapa<br/>
                        Master of Science at Tsinghua University
                        </div>
                    </div>
                </div>
                <div className="About-right-card">
                    <div className="About-right-card-avatar">
                        <img alt="avatar" src={bg} width="100%" height="100%" />
                    </div>
                    <div className="About-right-card-discription">
                        <div className="discription-name">
                            Rocky Joeng 
                        </div>
                        <div className="discription-pos">
                        CTO
                        </div>
                        <div className="discription-content">
                        Ph.D. in Computer Science<br/>
                        Principal Investigator, Presidential Postdoctoral Fellow at NTU<br/>
                        Chief Scientist of Singapore Smart City Project<br/>
                        Over 20 Hackathon Awards<br/>
                        Over 70 Publications at Top-conference & Journal<br/>
                        Award Winner Certificates<br/>
                        Achievements with wide media coverage<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}