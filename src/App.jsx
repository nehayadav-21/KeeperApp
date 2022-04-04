import React,{useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';




//to get from local storage

const getLocalItems=()=>{
  let list=localStorage.getItem('lists');
  // console.log(lists);

  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}
const App=() =>{
     
     

  const [addItem,setAddItem]=useState(getLocalItems());  //useState kbhi bhi function ke andar nahi likhna, component mein top pe likhte hai 
     
     const addNote=(note)=>{
      
       setAddItem((prevData)=>{
          return ([...prevData, note]);
       });
      // alert("clicked");
        // localStorage.setItem("note", JSON.stringify(note));
     
     };

     

const onDelete=(id)=>{
   setAddItem((oldData)=>
     oldData.filter((currdata, indx)=>{
       return indx !== id;
     })
    );
};

useEffect(() =>{
  localStorage.setItem('lists', JSON.stringify(addItem))
},[addItem]);

return (
<>
   <Header />
   <CreateNote passNote={addNote}/>
   
   {addItem.map((val, index)=> {
     return (
       <Note
       key={index}
       id={index}
       title={val.title}
       content={val.content}
       deleteItem={onDelete} />
       );
   })
   }

   <Footer />
</>);

}



export default App;
