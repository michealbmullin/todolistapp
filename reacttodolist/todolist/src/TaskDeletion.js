import React, { Component } from 'react';
import { returnStatement } from '@babel/types';


export default class TaskDeletion{
   
    deleteTask=(taskId)=>{
        let url="http://localhost:8585/api/v1/toDos/"+{taskId};
        let delety= new XMLHttpRequest();
        delety.setRequestHeader("Content-Type", "application/json");
        delety.setRequestHeader("Accept", "application/json;charset=UTF-8");
        delety.open("delete",url);
        delety.responseType="json";
        delety.send();
        delety.onload=()=>{
            console.log(delety.response);
        }
        
    }


}