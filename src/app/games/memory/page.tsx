"use client";

import { useState, useEffect } from "react";
import "./styles.css";

// Types
import ICurrentModule, { RandomImage } from "../../../common/types/memoryGame";

// Utils
import BoardsSize from "../../../common/shared/memoryGame";

// Components
import Card from "../../../components/memoryGame/card";

// Services
import FetchRandomDogs from "../../../services/randomDogs";
import CardContent from "../../../components/memoryGame/cardContent";

export type ICardValue = {
  image: string;
  turn: boolean;
  found: boolean;
  spy?: boolean;
  alt?: number;
};

export default function Memory() {
  const [currentModule, setCurrentModule] = useState<ICurrentModule>(
    BoardsSize[0] as ICurrentModule
  );
  const [board, setBoard] = useState<ICardValue[] | null>(null);

  const [analyzes, setAnalyzes] = useState<{ tries: number }>({ tries: 0 });

  const [spy, setSpy] = useState<{ active: boolean; times: number }>({
    active: false,
    times: 0,
  });

  function randomNumber(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  function getRandomImages(
    images: RandomImage[]
  ): RandomImage & { spy?: boolean } {
    const availableImages = images.filter(({ time }) => time <= 1);

    if (!availableImages.length) {
      return { spy: true, index: -1, time: -1, url: "" };
    }

    const image = availableImages[randomNumber(availableImages.length)];

    return image;
  }

  async function setupBoard() {
    const newBoardSize = currentModule
      .split("x")
      .reduce((size, current) => size * Number(current), 1);

    const images = await FetchRandomDogs(newBoardSize);

    const newBoard: ICardValue[] = new Array(newBoardSize).fill({}).map(() => {
      const { url, index, spy } = getRandomImages(images);

      if (!spy) {
        images[index].time += 1;
      }

      return {
        image: url,
        turn: false,
        spy: spy,
        found: false,
      };
    });

    for (
      let currentPosition = newBoard.length - 1;
      currentPosition > -1;
      currentPosition--
    ) {
      const randomPosition = randomNumber(newBoard.length);
      const currentCard = newBoard[currentPosition];
      const randomCard = newBoard[randomPosition];

      const addAlt = newBoard.filter(
        ({ image, alt }) => currentCard.image === image && alt
      )

      currentCard.alt = addAlt.length >= 1 ?  addAlt[0].alt : randomNumber(999)
      newBoard[currentPosition] = randomCard;
      newBoard[randomPosition] = currentCard;
    }

    setBoard(newBoard);
    setSpy({
      active: false,
      times: Math.floor(Math.sqrt(newBoardSize) - 3),
    });
    setAnalyzes({ tries: 0 });
  }

  function handleSwitchSide(_index: number) {
    if (!board || spy.active) return;

    const isTurnOn = board.filter(({ turn }) => turn === true);

    if (isTurnOn.length >= 2) return;

    const updatedBoard = board.map((card, index) => {
      if (index === _index && card.turn === false)
        return { ...card, turn: !card.turn };
      return card;
    });

    setBoard(updatedBoard);
  }

  function Check() {
    if (!board) return;
    const isTurnOn = board.filter(({ turn }) => turn === true);

    if (isTurnOn.length <= 1) return;

    const isFound = isTurnOn[0].image === isTurnOn[1].image;

    const updatedBoard = board.map((card) => {
      if (card.image === isTurnOn[0].image || card.image === isTurnOn[1].image)
        return { ...card, turn: false, found: isFound };
      return card;
    });

    setBoard(updatedBoard);
    setAnalyzes((analyzes) => ({ tries: analyzes.tries + 1 }));
  }

  useEffect(() => {
    setBoard(null);
    setupBoard();
  }, []);

  useEffect(() => {
    if (!board) return;

    const Won = board.every(({ found }) => found === true);

    if (Won) {
      alert("Parabéns você venceu!");
      setupBoard();
      return;
    }

    setTimeout(Check, 1500);
  }, [board]);

  useEffect(() => {
    if (!board || spy.active || spy.times <= 0) return;

    setTimeout(() => {
      setSpy((spy) => {
        return { ...spy, active: false };
      });
    }, 4000);
  }, [spy]);

  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">Memory Game</h1>

        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            {BoardsSize.map((boardSize) => (
              <span
                key={boardSize}
                className="px-4 py-2 rounded-full bg-stone-900 cursor-pointer"
                onClick={() => {
                  if (boardSize !== currentModule) {
                    setCurrentModule(boardSize as ICurrentModule)
                  }

                  setupBoard();
                }}
              >
                {boardSize}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="cursor-pointer">
              <span className="text-2xl"> Tries: {analyzes.tries}</span>
            </div>

            <div
              className="cursor-pointer"
              onClick={() => {
                if (spy.times <= 0) return;

                setSpy((spy) => {
                  return { active: true, times: spy.times - 1 };
                });
              }}
            >
              <i className="ri-spy-line text-2xl">
                <span>{spy.times}</span>
              </i>
            </div>
          </div>
        </div>
      </div>

      {!board && <span>Loading...</span>}

      {!!board && (
        <div
          className="grid flex-1 gap-2"
          style={{
            gridTemplateColumns: `repeat(${currentModule[0]} , auto)`,
            gridTemplateRows: `repeat(${currentModule[0]} , auto)`,
          }}
        >
          {board.map((card, index) => {
            return (
              <Card
                key={index}
                turn={card.turn || card.found || spy.active}
                onClick={() => handleSwitchSide(index)}
              >
                <div className="front flex items-center justify-center">
                  <CardContent {...card} />
                </div>

                <div className="back flex items-center justify-center">
                  <i className="ri-question-mark text-6xl"></i>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
