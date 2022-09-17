import avatar from "../../assets/images/profile.jpg";
import * as S from "./Profile.style";

function Profile() {
  return (
    <div>
      <S.Avatar src={avatar} alt="" />
    </div>
  );
}

export default Profile;
