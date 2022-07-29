import React from "react";
import Form from "Components/Form";
import Chapters from "Components/Chapters";
import home_video_2 from "Media/videos/home_video_2.mp4"
import HomeCover from "Components/HomeCover";
import HomeIntro from "Components/HomeIntro";
import HomeVideo from "Components/HomeVideo";
const Home = () => {
 
  return (
    <div className="home">
      <HomeCover video={home_video_2}/>
          <section id ="introduccion">
          <HomeIntro/>
          </section>
          <HomeVideo/>
          <section id = "contents">
            <h2 className="chapters_title">Capítulos</h2>
            <Chapters/>
          </section>
          <section id = "contact">
            <Form/>
          </section>
    </div>
  );
};

export default Home;
