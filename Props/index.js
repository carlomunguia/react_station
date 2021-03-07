class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" num="3" data={[1, 2, 3, 4]} />
        <Hello to="Cher" from="Sonny" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
