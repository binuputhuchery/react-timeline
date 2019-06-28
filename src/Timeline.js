import React from 'react';
import timelineData from './timelineData';
import TimelineItem from './TimelineItem';
import './timeline.css';

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data) => (
                <TimelineItem data={data} key={data.id}/>
            ))}
            {console.log(timelineData)}
        </div>
    );

export default Timeline;