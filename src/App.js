import { useState } from 'react';
import './App.css';

function App() {
  // let cid;
  const mainLunchList=[{ name:'idly',ing:'rice'}, { name:'dosa',ing:'rice'}, { name:'briyani',ing:'rice'}]

const [lunchList, setLunchList] = useState(mainLunchList)
const [name, setName] = useState('')
const [ing, setIng] = useState('')
const [cid, setCid] = useState('')

function addItem(){
  let tempObj={
    name:name,
    ing:ing
  }
  // i=i+1 
  setLunchList([...lunchList,tempObj])
}

function editItem(item,index){
setName(item.name)
setIng(item.ing)
setCid(index)
}
function updateItem(){
  console.log(cid)
  let tempArray=lunchList
  tempArray[cid].name=name
  tempArray[cid].ing=ing
setLunchList(tempArray)
console.log(lunchList)
}


function deleteItem(item,index){
lunchList.splice(index,1)
console.log(lunchList)
setLunchList(lunchList)
}


  return (
    <div className="App">
      <div className='inpxutForm'>
        <input 
            id="lunchName"
            type="text" 
            placeholder='lunch Name' 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
        <input 
            id="ing1"
            type="text" 
            placeholder='ingredient 1' 
            value={ing}
            onChange={(e)=> setIng(e.target.value)}
            />
        {/* <input 
            id="ing2"
            type="text" 
            placeholder='ingredien 2' 
            /> */}
        <button type="button" onClick={addItem} className="btn btn-dark">Add</button> 
        <button type="button" onClick={() => updateItem()} className="btn btn-dark">update</button> 

      </div>
      <h2>List of Lunch items</h2>
      <div className='listItem'>
        <table>
          <thead>
            <tr>

            <th>name</th>
            <th>ing</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {lunchList.map((item,index)=> (
           <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ing}</td>
            <td>
              <button type="button" onClick={()=>editItem(item,index)} className="btn btn-secondary">Edit</button>
              <button type="button" onClick={() => deleteItem(item,index)} className="btn btn-danger">Delete</button>            
            </td>
            </tr>
          ))}
          </tbody>
        </table>        
        </div>
    </div>
  );
}

export default App;
