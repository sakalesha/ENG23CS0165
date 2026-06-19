**Notification System Design**

User enter login credentials 
    |
Frontend pass login credentials to backend server thorugh API's
    |
Backend recevie login credentials and verifies using access token
    |
If status is 400 returns saying the invalid user or unauthenticated user
    |
If success server send the message saying that login succssfull

**DB schema**
{
    "name": String,
    "email": String,
    "hashed_password": String
}

**Data Volume Increases**
**Problem**
If data volume increases we need to scale the server

**Solution**
we can solve by scale as like below:
    Horizontal scaling: where multiple server are added
    Vertical scaling

**SQL Queries**
INSERT INTO user
VALUES(name, email, hashed_password);

**DB Schema**
{
    "name" : Stirng,
    "message" : String,
    "date_time" : Date
}

INSERT INTO Notification
VALUES(name, email, message, date_time);

