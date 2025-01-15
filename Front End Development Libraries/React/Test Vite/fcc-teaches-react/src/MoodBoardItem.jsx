export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <div className="image-box">
        <img src={image} alt={description} className="mood-board-image" />
      </div>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}
