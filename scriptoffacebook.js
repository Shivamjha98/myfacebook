var database = [
{
	username:"shivam",
	password:"12345"
},
{
	username:"ram",
	password:"123"
},
{
	username:"shyam",
	password:"777"
}
];
var newsFeed = [
		{
			username:"booby",
			timeline:"i am reading a book right now"
		},
		{
			username:"sally",
			password:"i m having fun"
		},
		{
			username:"dany",
			password:"javascript is so coool !"
		}
];

var userNamePrompt = prompt("WHAT IS YOUR USERNAME");
var passwordPrompt = prompt("WHAT IS YOUR PASSWORD");

/*function signIn(user , pass)
{
	if(user===database[0].username && pass===database[0].password)
	{
		console.log(newsFeed);
	}
	else
	{
		alert("WRONG USERNAME AND PASSWORD");
	}
}*/

/*wrong logic function signIn(user,pass)
{
	for(var i=0;i<database.length ; i++)
	{
		if(database[i].username===user&&database[i].password===pass)
		{
			console.log(newsFeed);
		}
		else
		{
		alert("WRONG USERNAME AND PASSWORD");
		
		}
	}
}*/

function isUserValid(username,password)
{
	for(var i=0;i<database.length;i++)
	{
		if(database[i].username===username && database[i].password===password)
		{
			return true;
		}
	}
	return false;
}



function signIn(user,pass)
{
	if(isUserValid(user,pass))
	{
		console.log(newsFeed);
	}
	else
	{
		alert("wrong username and password");
	}
}
signIn(userNamePrompt , passwordPrompt);