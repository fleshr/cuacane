import powered from "../../assets/images/powered.png";
import * as S from "./Powered.style";

function Powered() {
  return (
    <div>
      <S.Link href="https://tomorrow.io">
        <img src={powered} alt="Powered by Tomorrow.io" />
      </S.Link>
    </div>
  );
}

export default Powered;
