import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App=() =>{
  const [addItem,setAddItem]=useState([]);  //useState kbhi bhi function ke andar nahi likhna, component mein top pe likhte hai 
     
     const addNote=(note)=>{
       setAddItem((prevData)=>{
          return ([...prevData, note]);
       });
      // alert("clicked");
      localStorage.setItem("note", JSON.stringify(note));
     }  ;

const onDelete=(id)=>{
   setAddItem((oldData)=>
     oldData.filter((currdata, indx)=>{
       return indx !== id;
     })
    );
};

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
