import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      directors.map(ele=>{
        <div>
           <h3>`Name: ${ele.name}`</h3>
           <p>'Movies: '</p>
           ele.movies.map(item =>{
             <ul>
               <li>item</li>
             </ul>
           })
        </div>
      })
    </div>
  );
}

export default Directors
let directors = [
  {
    name: 'Scott Derrickson',
    movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
  },
  {
    name: 'Mike Mitchell',
    movies: ['Trolls', 'Alvin and the Chipmunks: Chipwrecked', 'Sky High']
  },
  {
    name: 'Edward Zwick',
    movies: ['Jack Reacher: Never Go Back', 'Blood Diamon', 'The Siege']
  }
]
