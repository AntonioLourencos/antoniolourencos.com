import { HTMLAttributes, ReactNode, createElement } from "react";

type HTMLCardElement = HTMLAttributes<HTMLDivElement> & {
  turn: boolean;
  children: ReactNode;
};

function Card({ turn, children, ...rest }: HTMLCardElement) {
  const props = {
    turn: turn.toString(),
    className: "card h-full flex-1 bg-emerald-700 rounded-sm cursor-pointer",
    ...rest,
  };

  return createElement("div", props, children);
}

export default Card;
