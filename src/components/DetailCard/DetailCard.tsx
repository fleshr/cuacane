import * as S from "./DetailCard.style";

interface DetailCardProps {
  title: string;
  subtitle: string;
  value: string | number;
  icon: JSX.Element;
}

function DetailCard({ title, subtitle, value, icon }: DetailCardProps) {
  return (
    <S.Container>
      <S.Text>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Value>{value}</S.Value>
      </S.Text>
      <S.Graphic>{icon}</S.Graphic>
    </S.Container>
  );
}

export default DetailCard;
