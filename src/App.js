import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import AddList from "./containers/AdsList/AdList";
import {Route, Switch} from "react-router-dom";
import AdDetails from "./components/AdDetails/AdDetails";

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>

          <Route path = {`/:itemId`}
            render = {({match}) => {
                const idIndex =  match.params.itemId;
                return (<AdDetails id = {idIndex}/>)
                }
            }
          />
              <Route path = {'/'} component = {AddList}/>
          </Switch>

      </Layout>
    </div>
  );
}

export default App;
