import Card from "../card/card.component";

import "./card-list.styles.css";

// Components should return one parent level component!

// getting props
const CardList = ({ monsters }, forwardRef) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
