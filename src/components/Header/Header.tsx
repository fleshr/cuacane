import Search from "../Search/Search";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Container>
      <Search />
      <S.StyledUser />
    </S.Container>
  );
}

export default Header;
