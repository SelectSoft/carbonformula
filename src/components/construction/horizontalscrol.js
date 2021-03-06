import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
// list of items
const list = [
  { name: "1. Electricity Usage", link: "electricityusage" },
  { name: "2. Onsite fuel combustion", link: "onsite" },
  { name: "3. Bio-energy usage", link: "bio-usage" },
  { name: "4. Material use", link: "material-usage" },
  { name: "5. Water supply", link: "waterSupply" },
  { name: "6. Water disposal", link: "waterDisposal" },
];

// One item component
// selected prop will be passed

const MenuItem = ({ text, selected, link, handleMenuItems }) => {
  return (
    <button
      onClick={() => handleMenuItems(link)}
      className={`menu-item ${selected ? "active" : ""}`}
      style={{
        backgroundColor: "white",
        fontSize: "20px",
        fontWeight: "bold",
        paddingLeft: "25px",
        paddingRight: "25px",
        border: "3px solid white",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "#85B91C",
      }}
    >
      {text}
    </button>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, selected, handleMenuItems) =>
  list.map((el) => {
    const { name, link } = el;

    return (
      <MenuItem
        text={name}
        key={name}
        link={link}
        handleMenuItems={handleMenuItems}
      />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const selected = "item1";

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected, this.props.handleMenuItems);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu data={menu} selected={selected} onSelect={this.onSelect} />
      </div>
    );
  }
}
export default App;
