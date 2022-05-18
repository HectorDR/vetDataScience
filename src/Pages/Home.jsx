import React from "react";
import Form from "Components/Form";
import Chapters from "Components/Chapters";
import Homehead from "Components/HomeHead";
import cultivo from "Media/photos_web/cultivo.jpg";
import home_video from "Media/videos/home_video.mp4"
import home_video_2 from "Media/videos/home_video_2.mp4"
import HomeCover from "Components/HomeCover";
import HomeIntro from "Components/HomeIntro";
const Home = () => {
 
  return (
    <div className="home">
      <HomeCover video={home_video_2}/>
          <section id ="introduccion">
          <HomeIntro/>
          </section>
          <section id = "contents" style={{paddingTop: "7.5vh"}}>
            <h1 className="chapters_title">Capitulos</h1>
            <Chapters/>
          </section>
          <section id = "contact">
            <Form/>
          </section>
    </div>
  );
};

export default Home;
