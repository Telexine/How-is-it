# How-is-it
Realtime Location of Online User on Google Map Using Google Map API + Firebase for realtime Location and authen for login

### Stack
 - Node JS (Express)
 - Firebase
 
# Getting Started

### Create firebase Admin SDK .json for Node js And Rename to 
```
serviceAccountKey.json
```
### Place firebase Admin sdk .json under
```
./api
```
### rename databaseURL
```
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "YOUR Fire base database URL"
});
```

### Run (at root project)
```
npm install 

node app.js 
```
