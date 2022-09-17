import {
  FiLayout,
  FiMap,
  FiHeart,
  FiCalendar,
  FiSettings,
} from "react-icons/fi";
import * as S from "./Menu.style";

interface MenuProps {
  className?: string;
}

function Menu({ className }: MenuProps) {
  return (
    <S.Container className={className}>
      <S.MenuList>
        <S.MenuItem>
          <S.StyledLink $isActive={true} to={"/"}>
            <FiLayout />
            <S.LinkText>Dashboard</S.LinkText>
          </S.StyledLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledLink $isActive={false} to={"/"}>
            <FiMap />
            <S.LinkText>Map</S.LinkText>
          </S.StyledLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledLink $isActive={false} to={"/"}>
            <FiHeart />
            <S.LinkText>Saved Location</S.LinkText>
          </S.StyledLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledLink $isActive={false} to={"/"}>
            <FiCalendar />
            <S.LinkText>Calendar</S.LinkText>
          </S.StyledLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledLink $isActive={false} to={"/"}>
            <FiSettings />
            <S.LinkText>Settings</S.LinkText>
          </S.StyledLink>
        </S.MenuItem>
      </S.MenuList>
    </S.Container>
  );
}

export default Menu;
