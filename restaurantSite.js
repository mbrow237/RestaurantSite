function validateForm(){
	var contactName = document.forms["contactForm"]["inputName"].value;
	var contactEmail = document.forms["contactForm"]["inputEmail"].value;
	var contactPhone = document.forms["contactForm"]["inputPhone"].value;
	var contactReturnedYes = document.forms["contactForm"]["inlineRadio1"].checked;
	var contactReturnedNo = document.forms["contactForm"]["inlineRadio2"].checked;
	var contactDays = document.forms["contactForm"].inlineDays; //This returns the elements with name inlineDays
	var testEmail = checkValidEmail(contactEmail);
	var contactReturnedSelected = (contactReturnedYes || contactReturnedNo);//If both yes or no is unchecked, this returns false
	var testPhone = checkValidPhone(contactPhone);
	var testDays = checkDays(contactDays);
	

	if (contactName == "") //check for empty name
	{
		alert("Please enter a name");
		document.forms["contactForm"]["inputName"].focus;
		document.forms["contactForm"]["inputName"].value = "";
		return false;
	}

	
	if (!testEmail)
	{
		alert("Please enter valid email");
		document.forms["contactForm"]["inputEmail"].focus;
		document.forms["contactForm"]["inputEmail"].value = "";
		return false;
	}

	if (!testPhone){
		alert("Please enter valid 10 digit phone number(no dashes)");
		document.forms["contactForm"]["inputPhone"].focus;
		document.forms["contactForm"]["inputPhone"].value = "";
		return false;	
		
	}
	
	if(!contactReturnedSelected){
		alert("Have you visited our resturant?");
		return false;
	}

	if(!testDays)
	{
		alert("Please select at least one day it is best to contact you");
		return false;
	}

	alert("Information have been submitted");
	return false;
}

function checkValidEmail(email)//checks for valid email
{
	
	var domainStr = email.substring(email.length-4, email.length);//get the last 4 chars of the email
	var isDomain = false;
	var atStr = false;
	var atCount = 0;
	
	
	if (email == "" || email.length <= 5 || email[0] == "@")//check if email is empty, less than 4 chars, or start with @
	{
		return false;
	}
	
	if (domainStr == ".com"){//check for .com at the end of string
		isDomain = true;
	}
	
	for(var i = 0; i < email.length; i++){//verify if @ is in email
		if(email[i] == "@")
		{
			atStr = true;
		}
	}
	
	if(email[email.length-5] == "@") //to ensure ***@.com is not entered
	{
		return false;
	}

	return (isDomain &&  atStr);
}


function checkValidPhone(phone)//check phone number
{
	var phoneConvert = Number(phone);//converts the string to a number

	if (phone.length != 10) //returns invalid number if not 10 chars
	{
		return false;
	}
	
	if (isNaN(phoneConvert)) //check to see if converted number is a number
	{
		return false;
	}
	return true;
}

function checkDays(contactDays){//check to see if any days were selected
	var daySelected = false;
	for (var i = 0; i < contactDays.length; i++)//go through days array and see if any are checked
	{
		if(contactDays[i].checked == true)
		{
			daySelected = true;
		}
	}
	return daySelected;
}