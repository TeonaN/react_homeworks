import React from "react";
import "./Cat.css";

function Some() {
  const people = [
    {
      category: "Vegetables",
      id: "1",
      products: [
        { product: "Cucumber", id: "c" },
        { product: "Potato", id: "p" },
      ],
    },
    {
      category: "Fruits",
      id: "2",
      products: [
        { product: "Apple", id: "a" },
        { product: "Strawberry", id: "s" },
      ],
    },
    {
      category: "Meat",
      id: "3",
      products: [
        { product: "Pork", id: "o" },
        { product: "Beef", id: "b" },
      ],
    },

    {
      category: "Nuts",
      id: "4",
      products: [
        { product: "Hazel nut", id: "h" },
        { product: "Walnut", id: "w" },
      ],
    },
  ];

 const onRemoveInformationValue = (someI) => {
    const products = [...products]
    products.splice(someI, 1);
    this.setstate({ products: products });
  };

  // deleteUser = (index) => {
  //   const users = Object.assign([], this.state.users);
  //   users.splice(index, 1);
  //   this.setState({users:users});
  // }

  // onRemoveInformationValue(index) {
  //   console.log('onRemoveInformationValue', index);
  //   // Copy state
  //   let newInfoList = [...this.state.infoList];

  //   // Remove the item at the specified index
  //   newInfoList.splice(index, 1);

  //   // Set the new State
  //   this.setState({
  //     infoList: newInfoList
  //   });
  // }

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person.category}</h2>
          <div className="box">
            {person.products.map((pet, i) => (
              <p key={i}>
                {pet.product}
                <button onClick={onRemoveInformationValue.bind(this,i)}>X</button>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Some;
