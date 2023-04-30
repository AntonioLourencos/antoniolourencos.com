import BoardsSize from "../shared/memoryGame";

type ICurrentModule = (typeof BoardsSize)[number];

type RandomImage = {
  url: string;
  time: number;
  index: number;
};

export type { RandomImage };

export default ICurrentModule;
