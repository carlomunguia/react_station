class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Slot Machines!!!
        </h1>
        <p>
          <Machine
            s1="🐱‍👓"
            s2="🐱‍"
            s3="🐱‍👓" />
        </p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
