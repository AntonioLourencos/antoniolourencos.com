import { RandomImage } from "../common/types/memoryGame";

async function FetchRandomDogs(boardSize: number): Promise<RandomImage[]> {
    const url = `https://dog.ceo/api/breeds/image/random/${Math.floor(
      boardSize / 2
    )}`;
    const response = await fetch(url);

    const { message: images }: { message: string[] } = await response.json();

    const formatedImages: RandomImage[] = images.map((image, index) => ({
      url: image,
      time: 0,
      index: index,
    }));

    return formatedImages;
  }

  export default FetchRandomDogs