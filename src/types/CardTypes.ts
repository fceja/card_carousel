export type CardType = {
  image: string;
  title: string;
  description: string;
  urlLink: string;
};

export type CardPropsType = {
  card: CardType;
  index: number;
};
