//show dbs
//use murshidKart
//show collections

db.items.find()
//deleting items    //same as searching query
db.items.deleteOne({name:'samsung'})
//deleteOne will delete the first data entry

db.items.deleteMany({name:'samsung'})   // in this It will delete all data as name as samsung
