import { useEffect, useState } from "react";
import {
  Button,
  CardWrapper,
  FrameBgImg,
  FrameImg,
  Img,
  InfoCount,
  InfoText,
  InfoWrapper,
  Logo,
  PictureImg,
  StripImg,
} from "./TweetCard.styled";
import Avatar from "../../assets/avatar.png";

function TweetCard() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [addition, setAddition] = useState(0);
  const [btnCaption, setBtnCaption] = useState("Follow");
  const [btnColor, setBtnColor] = useState("#EBD8FF");

  const tweetsCount = 777;
  const followersCount = 100500

  useEffect(() => {
    console.log("localStorage.getItem");
    setIsFollowing(JSON.parse(localStorage.getItem("isFollowing")));
  }, [])

  useEffect(() => {
    if (isFollowing) {
      setAddition(1);
      setBtnCaption("Following");
      setBtnColor("#5CD3A8");
    } else {
      setAddition(0);
      setBtnCaption("Follow");
      setBtnColor("#EBD8FF");
    }
  }, [isFollowing]);  

  const stateToggle = () => {    
    console.log("localStorage.setItem");
    localStorage.setItem("isFollowing", JSON.stringify(!isFollowing));
    setIsFollowing((state) => !state);
  }  

  return (
    <CardWrapper>
      <Logo />
      <PictureImg />
      <StripImg />
      <FrameBgImg />
      <Img src={Avatar} alt="avatar" />
      <FrameImg></FrameImg>
      <InfoWrapper>
        <InfoText>
          <InfoCount>{tweetsCount}</InfoCount>tweets
        </InfoText>
        <InfoText>
          <InfoCount>
            {(followersCount + addition).toLocaleString("en-US")}
          </InfoCount>
          followers
        </InfoText>
      </InfoWrapper>
      <Button type="button" onClick={stateToggle} color={btnColor}>
        {btnCaption}
      </Button>
    </CardWrapper>
  );
}

export default TweetCard;
