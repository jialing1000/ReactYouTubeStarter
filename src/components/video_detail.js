import React from 'react';

const VideoDetail = ({video}) => {
    if (!video){
        return <div>Loading</div>;
    }

    const videoid = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoid}`;
    
    return (
        <div className="video-detail col-sm-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" 
                    id="ytplayer"
                    type="text/html" 
                    src={url} ></iframe>
            </div>
            <div className="details">
                <h3>{video.snippet.title}</h3>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;