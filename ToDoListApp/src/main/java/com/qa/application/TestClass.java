package com.qa.application;
import static org.junit.Assert.*;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class TestClass {
	@BeforeClass
	public void testSetup() {
		// initialise array list , add several test data entries in a tassks table and a users table/ array list
	}
	@Test
	public void testSetupData() {
		// validate that the test data has worked
	}
	@Test
	public void signupTest() {
		// add test data and see if it works
	}
	@Test
	public void signupTest2() {
		// add test data but with same username, should prevent this
	}
	@Test
	public void signupTest3() {
		//add test data with same email, should prevent this
	}
	@Test
	public void getUserTest() {
		// simple get test
		
	}@Test
	public void getUserTest2() {
		// similar names or same last name
	}
	@Test
	public void validationTest() {
		// check input email and pw aginst list match return true bool
	}
	@Test
	public void validationTest2() {
		//check input email and pw, reject as pw incorrect
	}
	@Test
	public void validationTest3() {
		// check email/pw pair both are in list/db but email and pw on diff accounts
	}
	public void validationTest4() {
		// check deets , error message when email is incorrect in db
	}
	@Test
	public void addTaskTest() {
		// add tasks to task db/array linked to a user
		// pull data and see if its worked
	}
	@Test
	public void addTaskTest2() {
		// add task to db / array same date 
//		pull and expect to see both test datasets
	}
	@Test
	public void addTaskTest3() {
//		add task on diff date/ same user pull data and only see 1 entry
	}
	@Test
	public void addTaskTest4() {
//		add task diff user diff day pull tasks.
	}
	@Test
	public void getTask() {
//		pull test data enrtries
	}
	@Test
	public void getTask2() {
//		pull test data enrtries, several tasks on day but not same user, should only pull 1 users tasks
	}
	@Test
	public void getTask3() {
//		pull test data enrtries, user has several tasks but only pull one from correct day
	}
	@Test
	public void taskdonestatus() {
//		pull test data enrtries and check if task done, multiple on same test maybe?
	}
	@Test
	public void changetaskdone() {
//		pull test data enrtries
//		change task status and repull to check
	}
	
	@AfterClass
	public void testCleanup() {
		// wipe array lists or db of any test data
	}
}
