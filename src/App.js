import "./styles/App.css";
import CardSlider from "./components/cardSlider";

function App() {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "Title 1",
      description: "This is description 1",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/201/300",
      title: "Title 2",
      description: "This is description 2",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/202/300",
      title: "Title 3",
      description: "This is description 3",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/203/300",
      title: "Title 4",
      description: "This is description 4",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/204/300",
      title: "Title 5",
      description: "This is description 5",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/205/300",
      title: "Title 6",
      description: "This is description 6",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/207/300",
      title: "Title 7",
      description: "This is description 7",
      urlLink: "https://google.com",
    },
    {
      image: "https://picsum.photos/208/300",
      title: "Title 8",
      description: "This is description 8",
      urlLink: "https://google.com",
    },
  ];

  return (
    <div className="App">
      <CardSlider slides={slides} />
    </div>
  );
}

export default App;
