
//firebase 
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://how-is-it-1521774533551.firebaseio.com"
});
// Get a database reference
var db = admin.database();
var ref = db.ref("server/saving-data/");
let keyRef = ref.child("/");
let couponRef = ref.child("/");
var userState = db.ref("presence/");

var myVeryLongInternalName = function() { 
    
    
    
 };
exports.shortName = myVeryLongInternalName;