import "./Example.css";

export default function TabButton({ children, handleClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
