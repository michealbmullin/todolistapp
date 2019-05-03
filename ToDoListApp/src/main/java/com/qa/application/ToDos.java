package com.qa.application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity

public class ToDos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long taskId;
	private Long userId;
	private String dateAdded;
	private String task;
	private Boolean taskStatus;

	public Long getTaskId() {
		return taskId;
	}
	public void setTaskId(Long taskId) {
		this.taskId = taskId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getDateAdded() {
		return dateAdded;
	}
	public void setDateAdded(String dateAdded){
		this.dateAdded = dateAdded;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public Boolean getTaskStatus() {
		return taskStatus;
	}
	public void setTaskStatus(Boolean taskStatus) {
		this.taskStatus = taskStatus;
	}

	public ToDos() {
		
	}
	public ToDos( Long taskId,Long userId,String dateAdded,String task,Boolean taskStatus) {
		this.userId=userId;
		this.dateAdded=dateAdded;
		this.task=task;
		this.taskStatus=taskStatus;
		this.taskId=taskId;
	}
//method stubs
//
//	public void getTasks(){
//	
//	}
//	public void taskDoneStatus(){
//	
//	}
//	public void addTasks(){
//	
//	} 

}