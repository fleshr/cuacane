import Logo from "../Logo/Logo";
import Powered from "../Powered/Powered";
import * as S from "./Navigation.style";

function Navigation() {
  return (
    <S.Container>
      <Logo />
      <S.StyledMenu />
      <Powered />
    </S.Container>
  );
}

export default Navigation;
