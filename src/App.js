import logo from "./logo.svg";
import "./App.css";
// import ReactCardSlider from "./components/ReactCardSlider";
import ReactCardSlider from "react-card-slider-component-tutorial";

function App() {
  const sliderClick = (slider) => {
    alert("Hello World");
  };

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a secound title",
      description: "This is a secound description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/200",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/400/300",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/400/800",
      title: "This is a eighth title",
      description: "This is a eighth description",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div id="body">
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default App;
