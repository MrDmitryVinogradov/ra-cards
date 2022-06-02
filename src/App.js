import './App.css';

import { LoremIpsum } from "lorem-ipsum";

import Card from './components/Card'

import CardImage from './components/CardImage'

import CardBody from './components/CardBody'

import CardButton from './components/CardButton'

import { nanoid } from 'nanoid'

import 'bootstrap/dist/css/bootstrap.min.css';


class Obj {
  constructor(img, title, body, button, key) {
    this.img = img;
    this.title = title;
    this.body = body;
    this.button = button;
    this.key = key;
  }
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});


let arr = [];

for (let i = 0; i < 3; i++) {
    const obj = new Obj('http://placekitten.com/300/300', lorem.generateWords(3), lorem.generateSentences(1), 'Go somewhere', nanoid());
  arr.push(obj);
}

function App() {
  return (
    <div className="App">
      {arr.map(el => 
        <Card key={el.key}>
          <CardImage img={el.img} title={el.title} />
          <CardBody title={el.title} body={el.body} />
          <CardButton button={el.button}/>
        </Card>
      )}
    </div>
  );
}

export default App;
