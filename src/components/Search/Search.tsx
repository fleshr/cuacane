import { FiSearch } from "react-icons/fi";
import * as S from "./Search.style";

function Search() {
  return (
    <div>
      <S.Form action="">
        <S.Label htmlFor="search">
          <FiSearch />
        </S.Label>
        <S.Input
          id="search"
          type="search"
          placeholder="Search something here..."
        />
      </S.Form>
    </div>
  );
}

export default Search;
