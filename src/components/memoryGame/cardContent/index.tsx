import Image from "next/image";
import { useState } from "react";
import { ICardValue } from "../../../app/games/memory/page";

function CardContent(card: ICardValue) {
  const [error, setError] = useState<boolean>(false);

  if (!card.spy && error === false) {
    return (
      <Image
        src={card.image}
        alt=""
        onError={() => setError(true)}
        fill={true}
        className="aspect-square object-fill"
      />
    );
  }

  if (!card.spy && error === true) {
    return (
        <h1 className="text-6xl">{card.alt}</h1>
    );
  }

  if (!!card.spy) {
    return <i className="ri-spy-line text-6xl"></i>;
  }

  return null
}

export default CardContent;
