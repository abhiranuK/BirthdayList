import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);

  const deleteBirthdays = () => {
    setPeople([]);
  }
  return <main>
          <section className = "container">
          <h3>{people.length} Friends Birthdays</h3>  
          <List peopleProp = {people}/>
          <button onClick={deleteBirthdays}>clear</button>
          </section>
         </main> 
}

export default App;
