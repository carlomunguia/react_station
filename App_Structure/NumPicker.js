function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num == 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN</h2>
          <img src="https://i.giphy.com/media/nXnOjZrbnbRxS/giphy.webp" />
        </div>
      );
    } else {
      msg = <p>Sorry you lose!</p>;
    }
    return (
      <div>
        <h1>Your number is...{num}</h1>
        <p>{num == 7 ? "Congrats" : "Unlucky"}</p>
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
