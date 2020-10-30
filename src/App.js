import './App.css';
import List from './List';
import Buttons from './Buttons';

function App() {
  // useEffect(() => {
  //   dispatch(update());
  // }, [dispatch]);

  return (
    <>
      <Buttons />
      <List />
    </>
  );
}

export default App;
