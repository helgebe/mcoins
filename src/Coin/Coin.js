import React from 'react';

const currencynames = ["bitcoin", "ripple", "litecoin", "ethereum"];

class Coin extends React.Component {
render(){
//!todo: this should be elements, probably divs, in a list, but probably not a list element
  return (
    <div>
      <ul>
        {Array.apply(null, Array(currencynames.length)).map(function(item, i){
          return(
            <li> {currencynames[i]} {i}</li>
          );
        }, this )}
      </ul>
    </div>
  );
}
};

export default Coin;
