import logo from "../../assets/images/logo.png";
import * as S from "./Logo.style";

function Logo() {
  return (
    <S.Container>
      <S.Anchor to={"/"}>
        <S.Image src={logo} alt="Cuacane logo" />
        <S.Text>Cuacane</S.Text>
      </S.Anchor>
    </S.Container>
  );
}

export default Logo;
