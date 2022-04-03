import React,{useState} from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
// import { PropaneSharp } from '@mui/icons-material';


const CreateNote=(props) =>{

    const [expand, setExpand]=useState(false);

    const [note,setNote]=useState({
        title:"",
        content:"",
    });

    const InputEvent= (event) =>{

        const {name,value}=event.target;

        setNote((prevData) =>{
            return{
                ...prevData,
                [name]:value,
             };
        });
    }; 

    const addEvent=()=>{
      props.passNote(note);
      setNote({
        title:"",
        content:"",
    });
    // alert("clicked");
    };

    const expandIt=()=>{
        setExpand(true);
    }

 
    

    return(
        <>
        <div className="main_note">
            <form>
            { expand?
              <input type="text"
               placeholder="Title" 
               autoComplete='off' 
               value={note.title}
               name="title"
               onChange={InputEvent} /> : null }
              
              
              <textarea rows="" column="" 
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write a note..."

             onClick={expandIt}
              />
              <Button onClick={addEvent}>
                  <AddIcon className="plus_sign"/>
              </Button>
            
            </form>
        </div>

        </>
    );
}








export default CreateNote;