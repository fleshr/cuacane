import Profile from "../Profile/Profile";
import Notification from "../Notification/Notification";
import * as S from "./User.style";

interface UserProps {
  className?: string;
}

function User({ className }: UserProps) {
  return (
    <S.Container className={className}>
      <Notification />
      <Profile />
    </S.Container>
  );
}

export default User;
