package com.qa.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity

public class ToDos {
	
	public Long getTask_id() {
		return task_id;
	}
	public void setTask_id(Long task_id) {
		this.task_id = task_id;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getDate_added() {
		return date_added;
	}
	public void setDate_added(String date_added) {
		this.date_added = date_added;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public Boolean getTask_status() {
		return task_status;
	}
	public void setTask_status(Boolean task_status) {
		this.task_status = task_status;
	}
	@Id
	@GeneratedValue
	private Long task_id;
	private Long user_id;
	private String date_added;
	private String task;
	private Boolean task_status;
	public ToDos() {
		
	}
	public ToDos(Long user_id,String date_added,String task,Boolean task_status, Long task_id) {
		this.user_id=user_id;
		this.date_added=date_added;
		this.task=task;
		this.task_status=task_status;
		this.task_id=task_id;
	}
//method stubs

	public void getTasks(){
	
	}
	public void taskDoneStatus(){
	
	}
	public void addTasks(){
	
	} 

}