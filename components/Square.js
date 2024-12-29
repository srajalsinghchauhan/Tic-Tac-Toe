export default function Square({ value, onClick, disabled }) {
    return (
      <button
        className={`square ${disabled ? "disabled" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }
  