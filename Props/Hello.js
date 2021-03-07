class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          {this.props.to} says I Love You to {this.props.from}
        </h1>
      </div>
    );
  }
}
