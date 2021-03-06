import React, { Component } from "react";
import MypagePresenter from "./MypagePresenter";
import { serverApi } from "../../Components/API";

interface IProps {
  toggleMypageSlider: any;
  handleLogout: any;
  handleLikeCafe: any;
  userName: string;
  userEmail: string;
  showMypageLikeCafe: boolean;
  favoriteCafe: any;
  kakaoImg: string;
}
interface IState {
  user: any;
  error: any;
}

class MypageContainer extends Component<IProps, IState> {
  state = {
    user: null,
    error: null
  };
  userGetInfo = async () => {
    try {
      const getUser = await serverApi.getUserInfo();
      console.log("getUser", getUser);
      this.setState({
        user: getUser
      });
    } catch {
      this.setState({ error: "로그아웃에 실패했습니다." });
    }
  };
  render() {
    const {
      toggleMypageSlider,
      handleLogout,
      handleLikeCafe,
      userName,
      userEmail,
      showMypageLikeCafe,
      favoriteCafe,
      kakaoImg
    } = this.props;
    console.log("MypageContainer:", favoriteCafe);
    return (
      <MypagePresenter
        handleLogout={handleLogout}
        toggleMypageSlider={toggleMypageSlider}
        handleLikeCafe={handleLikeCafe}
        showMypageLikeCafe={showMypageLikeCafe}
        favoriteCafe={favoriteCafe}
        userName={userName}
        userEmail={userEmail}
        kakaoImg={kakaoImg}
      />
    );
  }
}

export default MypageContainer;
