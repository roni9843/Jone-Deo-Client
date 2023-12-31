import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import styled from "styled-components";

export default function IntroduceComponents() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // ? for getImage
  const [profileImageState, setProfileImageState] = useState("");

  const [inputProfileName, setInputProfileName] = useState("");

  // * useEffect for fetch profile top title
  useEffect(() => {
    fetch("https://damp-ravine-37109.herokuapp.com/editProfile/getProfileName")
      .then((response) => response.json())
      .then((json) => {
        setInputProfileName(json.message.ProfileName);
      });
  }, []);

  // ? for get profile top title
  const [proTopTitle, setProfileTopTitle] = useState("");

  // * useEffect for fetch profile image url

  useEffect(() => {
    // ? get image
    fetch("https://damp-ravine-37109.herokuapp.com/editProfile")
      .then((response) => response.json())
      .then((json) => {
        setProfileImageState(json.image_url.url);
      });

    // ? get top title
    fetch("https://damp-ravine-37109.herokuapp.com/editProfile/getProfileTitle")
      .then((response) => response.json())
      .then((json) => {
        setProfileTopTitle(json.message.topTitle);
      });
  }, []);

  // ? for get user Bottom Title
  const [inputProfileBottomTitle, setInputProfileBottomTitle] = useState("");

  // * useEffect for fetch profile top title
  useEffect(() => {
    fetch(
      "https://damp-ravine-37109.herokuapp.com/editProfile/getProfileBottomTitle"
    )
      .then((response) => response.json())
      .then((json) => {
        setInputProfileBottomTitle(json.message.bottomTitle);
      });
  }, []);

  const socialMedia = [
    {
      icone: <FacebookIcon className="socialMediaSingelIcon mx-1" />,
      link: "#",
    },
    {
      icone: <InstagramIcon className="socialMediaSingelIcon mx-1" />,
      link: "#",
    },
    {
      icone: <TwitterIcon className="socialMediaSingelIcon mx-1" />,
      link: "#",
    },
    {
      icone: <LinkedInIcon className="socialMediaSingelIcon mx-1" />,
      link: "#",
    },
    {
      icone: <GitHubIcon className="socialMediaSingelIcon mx-1" />,
      link: "#",
    },
  ];

  const [TEXTS, setTexts] = useState(["Logo "]);

  // * useEffect for fetch profile top title
  useEffect(() => {
    fetch("https://damp-ravine-37109.herokuapp.com/editProfile/getProfileSkill")
      .then((response) => response.json())
      .then((json) => {
        const skName = json.ProfileSkill.map((sk) => sk.skill);

        console.log(skName);

        setTexts(skName);
      });
  }, []);

  return (
    <div>
      <Introbackground>
        <div className="container main-sec">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
              <img
                src={profileImageState}
                class="img-fluid"
                alt="ProfileImage"
              />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="inner-text-right">
                <span>{proTopTitle}</span>
              </div>
              <div className="right-side-title">
                {inputProfileName}
                <br />
                <h1>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </h1>
                <h2 className="mt-2">{inputProfileBottomTitle}</h2>
                <div className="socialMediaIcon">
                  {socialMedia.map((dt) => dt.icone)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Introbackground>
    </div>
  );
}

const Introbackground = styled.div`
  background-color: #f8f9fc;

  .main-sec {
    padding: 150px 0;
    margin: 0 auto;
  }
  .main-sec img {
    border-radius: 50%;
    border: 14px solid white;
    width: 394px;

    box-shadow: 0 20px 40px rgb(0 0 0 / 10%),
      0 20px 40px hsl(0deg 0% 100% / 15%);
  }
  .inner-text-right span {
    color: #1f1f25;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: block;
    margin-bottom: 20px;
  }
  .right-side-title h1,
  .right-side-title {
    color: #1f1f25;
    font-size: 75px;
    font-weight: 900;
    font-family: Montserrat, sans-serif;
    line-height: 90px;
    text-transform: inherit;
  }
  .right-side-title h1 {
    color: #f9004d;
  }
  .right-side-title h2 {
    font-weight: 700;
    font-size: 57px;
  }
  .socialMediaIcon {
  }
  .socialMediaSingelIcon {
    background-color: black;
    border-radius: 50%;
    padding: 8px;
    color: #f8f9fc;
    font-size: 48px;
    cursor: pointer;
    transition: 0.5s;
  }
  .socialMediaSingelIcon:hover {
    background-color: #f9004d;
    margin-top: -20px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .main-sec img {
      width: auto;
      height: auto;
    }
  }
  @media only screen and (max-width: 850px) {
    .right-side-title h1,
    .right-side-title,
    .right-side-title h2 {
      font-size: 32px;
      line-height: 49px;
    }
    .inner-text-right {
      margin-top: 35px;
    }
    .socialMediaSingelIcon {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 587px) {
    .main-sec {
      width: 90%;
    }
    .inner-text-right,
    .right-side-title {
      text-align: center;
    }
    .right-side-title h1 {
      margin: auto;

      display: flex;
      justify-content: space-around;
    }
  }
  @media only screen and (max-width: 477px) {
    .main-sec {
      width: 320px;
      margin: 0px auto;
    }
  }
`;
