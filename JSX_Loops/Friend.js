class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    const lis = hobbies.map((h) => <li>{h}</li>);
    return (
      <div>
        <h1>{name}</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
}

ReactDOM.render(<Friend />, document.getElementById("root"));
