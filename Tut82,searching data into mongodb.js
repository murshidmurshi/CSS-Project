//Searching items 
//db.items.find()

db.items.find({price:12300})

db.items.find({price:{$gt:12300}}) //greater than
db.items.find({price:{$lt:12300}}) //less  than
db.items.find({price:{$gte:12300}})//greater than equal to 
db.items.find({price:12300})

db.items.find({$or:[{price:12300},{sold:300}]})

db.items.find({price:{$gt:10000}},{price:1})   ///for particular in this Price