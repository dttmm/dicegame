import Button from "./Button"
import Dice from "./Dice"

function App() {
  return (
    <div>
      <div>
        <Button>던지ㄴ기</Button>
        <Button>안던지ㄴ기</Button>
      </div>
      <Dice color="red" num={2}></Dice>
    </div>);
}

export default App