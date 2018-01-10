import React from 'react';

const currencynames = ["bitcoin", "ripple", "litecoin", "ethereum", "deeponion"];

class Coin extends React.Component {
render(){

  return (
    <section>

        {currencynames.map(function(item, i){
          return(
            <article>
              <h2>{currencynames[i]}</h2>
              <div>todo: unless bitcoin then value in bitcoin</div>
              <a href="">todo: unless bitcoin link to announcement, get it from non existing object</a>
              <a href="">todo: link to explorer, get it from non existing object</a>
              <div>hashrate 999 hps</div>
              <div>algorithm x11</div>
              <div>price usd 111</div>
            </article>
          );

        }, this )}
    </section>
  );
}
};

export default Coin;
