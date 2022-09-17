import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import * as S from "./Sidebar.style";

function Sidebar() {
  return (
    <S.Container>
      <S.Header>
        <S.Tabs>
          <S.Button>
            <FiChevronLeft />
          </S.Button>
          <S.Title>This Week</S.Title>
          <S.Button>
            <FiChevronRight />
          </S.Button>
        </S.Tabs>
      </S.Header>
      <S.StyledForecast />
    </S.Container>
  );
}

export default Sidebar;
