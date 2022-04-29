import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {catActions} from "../slices/cat.slice";

const FormCat = () => {

    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const  {catForUpdate}  = useSelector(({cat}) => cat);
    console.log(catForUpdate);

    useEffect(()=>{
        if(catForUpdate){
            setName(catForUpdate.name)
        }
    },[catForUpdate])

    const addAction = () => {
        if (catForUpdate){
            dispatch(catActions.updateCat({name, id:catForUpdate.id}))
        }else{
            dispatch(catActions.addCat({cat: name}))
        }
        setName('')
    }
    return (
        <div>
                Cat Name: <input type={"text"} onChange={(e) => setName(e.target.value)} value={name}/>
                <button onClick={()=>addAction()}>{catForUpdate? 'Update' : 'Create'} cat</button>
        </div>
    );
};

export {FormCat};