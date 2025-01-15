import { MoodBoardItem } from "./MoodBoardItem";

export function MoodBoard() {
  const moodBoardItemObj = [
    {
      color: "#70919F",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Adventure",
    },
    {
      color: "#44585D",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Clarity",
    },
    {
      color: "#32728B",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Serene",
    },
    {
      color: "#1E0609",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Silhouette",
    },
    {
      color: "#666C74",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Picturesque",
    },
    {
      color: "#2E2D34",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Contrast",
    },
  ];

  return (
    <div className="mood-board-container">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodBoardItemObj.map((item, index) => (
          <MoodBoardItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
