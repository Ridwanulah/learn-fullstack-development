import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export function Star(prop){
    return (
      <button
        aria-pressed={prop.isFilled}
        aria-label={
          prop.isFilled ? "Remove from favorites" : "Add to favorites"
        }
        className="favorite-button"
      >
        <img
          src={starIcon}
          alt={prop.isFilled ? "filled star icon" : "empty star icon"}
          className="favorite"
        />
      </button>
    );
}
