import './styles/App.css';
import './styles/header.css';
import Nav from './components/nav.js';
import Main from './components/main.js';
import CardSlider from "./components/cardSlider"

function App() {

  // const sliderClick = () => {
  //   alert('hello world');
  // }

  const slides = [
    {image:'https://picsum.photos/200/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/201/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/202/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/203/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/204/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/205/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/207/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
    {image:'https://picsum.photos/208/300', title:'This is title', description:'this is description', urlLink:'https://google.com'},
  ]
  //   {image:'https://picsum.photos/200/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/201/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/202/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/203/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/204/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/205/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/207/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  //   {image:'https://picsum.photos/208/300', title:'This is title', description:'this is description', clickEvent:sliderClick},
  // ]

  return (
    <div className="App">
      <header className="header"><span>This is header</span></header>
      <Nav/>
      <Main/>
      <CardSlider slides={slides}/>
    </div>
  );
}

export default App;