import CardSlider from "./CardSlider";

const cardData = [
  {
    image: "https://picsum.photos/200/300",
    title: "This is title",
    description: "this is description",
    urlLink: "https://google.com",
  },
  {
    image: "https://picsum.photos/201/300",
    title: "This is title",
    description: "this is description",
    urlLink: "https://google.com",
  },
  {
    image: "https://picsum.photos/202/300",
    title: "This is title",
    description: "this is description",
    urlLink: "https://google.com",
  },
  {
    image: "https://picsum.photos/203/300",
    title: "This is title",
    description: "this is description",
    urlLink: "https://google.com",
  },
];

const App = () => {
  return <CardSlider cardData={cardData} />;
};

export default App;
