import React from "react";
import Form from "Components/Form";
import Chapters from "Components/Chapters";
import Homehead from "Components/HomeHead";
import cultivo from "Media/photos_web/cultivo.jpg";
import home_video from "Media/videos/home_video.mp4"
import HomeCover from "Components/HomeCover";
import HomeIntro from "Components/HomeIntro";
const Home = () => {
 
  return (
    <div>
      <HomeCover video={home_video}/>
          <section id ="introduccion">
          <HomeIntro/>
          </section>

          <section id = "contents">
            <Chapters/>
          </section>
          <section id = "contact" style={{margin : "2vh 0"}}>
            <Form/>
          </section>
    </div>
  );
};

export default Home;
