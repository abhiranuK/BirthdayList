import React from 'react';

const List = (props) => {
  return (
    <>
      {
      props.peopleProp.map(item => {
              return <article id={item.key}  className="person" > 
                          <img src={item.image} alt={item.name}/>
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.age} years</p>
                          </div>
                      </article>
           
           
        })
      }
    </>
  );
};

export default List;
