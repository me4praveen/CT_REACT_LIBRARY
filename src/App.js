import React from 'react';
import './App.scss';
import {Header} from './lib';
function App() {
  const headerProps = {
    productFamily: "Client Technology",
    ProductName: "<Product Name>",
    tabs: [
      {
          "path" : "/",
          "exact": true,
          "title": "Home",
          "component": null,
          "type": "public"
      },
      {
          "path" : "/orders",
          "exact": true,
          "title": "Orders",
          "component": null,
          "type": "public"
      }
  ],
  rightTabs: [
    {
        "path" : "/",
        "exact": true,
        "title": "Home",
        "component": null,
        "type": "public"
    },
    {
        "path" : "/orders",
        "exact": true,
        "title": "Orders",
        "component": null,
        "type": "public"
    }
]

  }
  return (
    <div className="App">
        <Header {...headerProps}/>
    </div>
  );
}

export default App;
