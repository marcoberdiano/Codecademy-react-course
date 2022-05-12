import Greeting from './Greeting';


function App() {
  return (
    <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Marco" signedIn={true}/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
  );
}

export default App;
