import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import "./components/css/styles.css";
import API from "./utils/API"

// declaring state 
class App extends Component {
  state = {
    search: "",
    employees: [],
    filtered: []
  }
  
// Rendering the page to load initially with the api 
  componentDidMount() {
    API.search()
      .then(res => {this.setState({ employees: res.data.results, filtered: res.data.results })})
      .catch(err => console.log(err));
  }

  // filters through list by employee first name
  search = event => this.setState({
    filtered: this.state.employees.filter(e => e.name.first.includes(event.target.value))
  })

// Renders all components to the page, passing state and search through for functionality 
  render() {
    return (
      <div>
        <Header />
        <Search search={this.search} />
        <EmployeeContainer props={this.state.filtered} />
      </div>
    )
  }
};

export default App;

