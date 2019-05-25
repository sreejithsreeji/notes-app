# Machine test server
Notes api.
## Getting Started
    git clone https://github.com/sreejithsreeji/notes-app
### Prerequisites
 Nodejs  
 mysql  
 _MySql dump is uploaded in the project root directory.please run the dumb file inorder to make databse._

### Dependencies
create .env file using the format prescribed in the env.json	
		
### Starting environment
    cd notes-app
    npm install -to install dependencies
    npm start
This will start the server in **localhost:{PORT}**
#### Sample Request
###### REGISTER USER
  POST http://localhost:4000/api/v1/auth/register
 
    BODY {
    "email": "thesreejith@gmail.com",
    "password": "Sreejith@13",
    "firstname": "sreejith",
    "lastname": "m",
    "address": "abc"
  }
   ###### RESPONSE  
   
    {
    "status": true,
    "code": 201,
    "message": "user registartion completed",
    "token": "6590cdb11318547301b157fb768972e027aac3ebe2b670bc31f3db3a1466c955"
     }
    
   
  ###### LOGIN 
   POST http://localhost:4000/api/v1/auth/login
   
        BODY {
             "email":"m.srijti@gmail.com",
             "password":"hai",
             } 

   ###### RESPONSE
      {
         "status": true,
         "code": 201,
         "message": "login successfull",
         "token": "2971a28a5ada95a5afa605f796a22538fee4cea1d84e05f7eb94a84d1fc4559e"
    } 

######LOGOUT      
 **POST** http://localhost:4000/api/v1/auth/logout?email={email}
    
    sample request http://localhost:4000/api/v1/auth/logout?email=m.srijithsri@gmail.com
    
    response:{
    "status": true,
    "code": 200,
    "message": "logout sucessfully"
}
      
###  NOTES API SECTION
 ###### CREATE NOTE
   POST http://localhost:4000/api/v1/notes 
   
    headers {
        Authorization: Bearer <TOKEN HERE>
    }
    
    BODY multipart/form-data
     {
         text:"new note",
         image:"file ",
         title:"title
         }
 ###### response  
    {
    "status": true,
    "code": 201,
    "message": "A new note is created"
    }

 ##### UPDATE NOTE
  PUT http://localhost:4000/api/v1/notes/{noteId}
  
    sample request http://localhost:4000/api/v1/notes/5
    headers {
        Authorization: Bearer <TOKEN HERE>
    }
    BODY multipart/form-data
     {
         text:"new note",
         image:"file ",
         title:"title
         }
 ###### response 
     {
    "status": true,
    "code": 200,
    "message": "updated successfully"
    }

###### DELETE NOTE
   DELETE http://localhost:4000/api/v1/notes/{noteId}
   
     headers {
        Authorization: Bearer <TOKEN HERE>
    }

##### GET ALL NOTES CREATED BY A USER

  GET http://localhost:4000/api/v1/notes/{userId}/created 
     
    sample request http://localhost:4000/api/v1/notes/1/created
    
     headers {
        Authorization: Bearer <TOKEN HERE>
    }
 ###### RESPONSE
    response: [{
         id:1,
         title:'a',
         ...
     }]

 ###  How things are working
    
    
     Here iam using a single server which responsible for handling all data.
     First,
       User register himself by providing basic details,all details are requires.
       here iam added input validations using JOI library.
       all basic validation schemes are statisfied.after registration system provide a unique TOKEN for the user.and user need to store this token in their local storage(production).we set a expre duration for this token.after expiration you need to login again.
     LOGIN: by providing email,and password you can login to syatem,you will be provided with new token too.

     LOGOUT:
        here we remove the token and make token invalid.no additional request will be entertained.so you need tpo login again to get a new token.
        this way iam handle the authentication.

        In producation we can use JWT token instead of this.

     NOTES SECTION:
      Only authenticated users can read,write,delete the notes.
      This is achevied by adding token as a header to the each routes.
      here iam add a middleware to check token is valid,if valid control passed.so only authenticated user can enter the system.
      so in notes section you should pass token in header.

    Here iam using mysql as database. 
     first you need to copy the mysql dump file and create a database in your system.

     Nb: File uploading is added (only .jpeg and max file size 2 MB),
         User input validation added in register section.

     Ps: I didn't understand why it need a 3 server for handling this.So i approached this problen with this way.
     If you are strictly looking to build the sytem in mentioned way (by using 3 servers) please let me know.
     I can change this code in that way too easeily.     
    
    //all  modules are tested and working perfectly. Thank You       
