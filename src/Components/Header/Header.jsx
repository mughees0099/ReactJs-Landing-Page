import "./Header.css";
import reactImage from "../../assets/react-core-concepts.png";

const reactContent = ["Fundamentals", "Essentials", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const description = reactContent[genRandomInt(reactContent.length)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </header>
  );
}
