import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state= {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(employees => {
      console.log(employees)
      this.setState({
        employees: employees
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App container">
        <h1>NBA Stars Directory</h1>
        <div className="row">

        { this.state.employees.map((employee, index) => {
          return (
            <div className="media col-12 mb-4 p-3 directory-entry">
              <img src={employee.image} class="mr-3 directory-image" alt="..." />
              <div className="media-body">
                <h5 className="mt-0">{employee.name}</h5>
                {employee.location}<div>{employee.position}</div>
            </div>
          </div>
          )
        })}
      </div>
      </div>
    );
  }
}

export default App;
