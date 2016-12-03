"use strict";

(function () {

  /*This is a work in progress....
  Things that need to be built in are:
  0. Create a react component and integrate it into the react DOM
  1. Check for only alpha char entered in the text box.
  2. If there is no text entered do not add an item. Bring up a label stating that text must be entered.
  3. When you add an item it pushes the Map down in the DOM. This may be resolved by using bootstrap for layout and assigning the grocery list its own column and the map its own column explicitly.
  4. Directions need to be built into the google maps to get the nearest grocery stores in the area from the directions API.
  5. Build markers in to display the default location selected we will want this base don current location but for now set it to Brian's home address in lat lng'*/

  //This is the Food Itemlist component.

  var GroceryItems = React.createClass({
    displayName: "GroceryItems",

    render: function render() {
      var foodItem = this.props.entries;

      function createFood(item) {
        return React.createElement(
          "li",
          { key: item.index },
          React.createElement("input", { id: "checks", type: "checkbox" }),
          React.createElement(
            "span",
            { id: "spanlist" },
            item.text
          )
        );
      }

      var foodItems = foodItem.map(createFood);

      return React.createElement(
        "ul",
        { className: "FoodList" },
        foodItems
      );
    }
  });

  var GroceryList = React.createClass({
    displayName: "GroceryList",

    getInitialState: function getInitialState() {
      return {
        items: []
      };
    },
    addFoodItem: function addFoodItem(e) {
      var itemArray = this.state.items;

      itemArray.push({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";

      e.preventDefault();
    },
    render: function render() {
      var _this = this;

      return React.createElement(
        "div",
        { className: "GroceryListMain" },
        React.createElement(
          "div",
          { className: "header" },
          React.createElement(
            "form",
            { onSubmit: this.addFoodItem },
            React.createElement(
              "h2",
              null,
              "Grocery List"
            ),
            React.createElement("input", { ref: function ref(a) {
                return _this._inputElement = a;
              }, placeholder: "Enter food here" }),
            React.createElement(
              "button",
              { type: "submit" },
              "Add some food"
            )
          )
        ),
        React.createElement(GroceryItems, { entries: this.state.items })
      );
    }
  });

  ReactDOM.render(React.createElement(GroceryList, null), document.getElementById('app'));

  //Google Maps is not able to be a "component" in React because it is Javascript that is being used here.

  // Coordinates to center the map
  var Marker;
  var myLatlng = new google.maps.LatLng(45.228540, -93.683576);

  // Other options for the map, pretty much selfexplanatory
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //Setting a marker to mark the default location

  // Attach a map to the DOM Element, with the defined settings
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
})(); //End of "iffy" statement