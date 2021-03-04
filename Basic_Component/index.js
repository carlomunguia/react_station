function getRandom() {
    return Math.floor(Math.random() * 10) + 1
}

class NumPicker extends React.Component {
    render() {
        const num = getRandom()
        return (
            <div>
                <h1>Your number is...{num}</h1>
                <p>{num == 7 ? 'Congrats' : 'Unlucky'}</p>
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))

