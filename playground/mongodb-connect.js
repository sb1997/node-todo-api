  //const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);

 MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
   if(err){
     console.log(err);
     return console.log('unable to connect to MongoDB server');
   }
   console.log('connected to MongoDB server');

 //   db.collection('Todos').find({
 //     _id:new ObjectID('5ba3a0fc80e187588df89725')
 //   }).toArray().then(function(docs){
 //     console.log('Todos');
 //     console.log(JSON.stringify(docs,undefined,2));
 //   },function(err){
 //     console.log('unable to fetch todos',err);
 //   }
 // );
    //  db.collection('Todos').find().count().then(function(count){
    //    console.log(`Todos count:${count}`);
    //    //console.log(JSON.stringify(docs,undefined,2));
    //  },function(err){
    //    console.log('unable to fetch todos',err);
    //  }
    // );
    db.collection('Users').find({
      name:'shashank'
    }).count().then(function(docs){
      console.log('Users');
      console.log(JSON.stringify(docs,undefined,2));
    },function(err){
      console.log('unable to fetch todos',err);
    }
   );
   //db.close();
 });

 // MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
 //   if(err){
 //     return console.log('unable to connect to MongoDB server');
 //   }
 //   console.log('connected to MongoDB server');
 //
 //   db.collection('Users').insertOne({
 //     _id:132,
 //     name:'shashank',
 //     age:21,
 //     location:'jaipur',
 //     completed:false
 //   }, function(err,result){
 //     if(err){
 //       return console.log('unable to insert todo',err);
 //     }
 //     console.log(result.ops);
 //   });
 //
 //   db.close();
 // });
