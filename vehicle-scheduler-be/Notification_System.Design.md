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