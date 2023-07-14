import Card from "../card/card.component";
import { Monster } from "../../App";

import "./card-list.styles.css";

// Components should return one parent level component!

type CardListProps = {
  monsters: Monster[];
};

// getting props
const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
