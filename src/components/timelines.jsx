import React, { Component } from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default class Timelines extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timelines">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>

            <Timeline lineColor={'#ddd'}>
              <TimelineItem key="001" dateText="May 2018 – July 2018" style={{ color: '#e86971' }}>
                <h3>Intern, Eckovation</h3><br></br>
                <p>I worked at Eckovation as a Full Stack Intern to design and develop a "Course Feature Dashboard" to be used by mentors and educators of courses for proper management of "Course Feature" across 5000+ learning groups. Maintained a Test-Driven Development process to ensure reliability and scalability of the product. </p>
              </TimelineItem>

              <TimelineItem key="002" dateText="January 2018 – May 2018" dateInnerStyle={{ background: '#61b8ff', color: '#000' }} style={{ color: '#61b8ff' }}>
                <h3>Intern, SideKickEdge</h3><br></br>
                <p>I worked at SideKickEdge as a remote Full Stack intern to develop and integrate new functionalities on LoopBack. Also worked on AngularJS to add new pages to the platform and integrated Amazon S3 web service for handling and storing files in the cloud. Also, wrote test scripts using SOAP UI to automate REST APIs testing.</p>
              </TimelineItem>

              <TimelineItem key="003" dateText="July 2015 – May 2019" style={{ color: '#e86971' }}>
                <h3>B.Tech, NIT Silchar</h3><br></br>
                <p>I have completed my under-graduation course with major in Computer Science and Engineering. My courseworks included DSA, OOPs, Computer Networks, OS, DBMS etc. I have also been an integral part of the Computer Science Society.</p>
              </TimelineItem>

              <TimelineItem key="004" dateText="2003 – 2015" dateInnerStyle={{ background: '#61b8ff', color: '#000' }} style={{ color: '#61b8ff' }}>
                <h3>Primary and Higher Education</h3><br></br>
                <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 90.6 merit.</p>
              </TimelineItem>
            </Timeline>
          </div>
        </section>
      </div>
    )
  }
}