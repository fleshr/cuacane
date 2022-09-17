import Header from "../Header/Header";
import * as S from "./Main.style";
import WeatherCards from "../WeatherCards/WeatherCards";

function Main() {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.CardWrapper>
        <WeatherCards />
      </S.CardWrapper>
    </S.Container>
  );
}

export default Main;
