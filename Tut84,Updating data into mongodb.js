//use murshidKart
//show dbs

//insert dsat into mongodb
db.items.insertMany([{'name':'samsung',price:12300,qty:230,sold:120},{'name':'iphone',price:121300,qty:230,sold:940},{'name':'realme',price:23110,qty:330,sold:1000}])

//update data
db.items.updateOne({name:'samsung'}, {$set:{price:2}})

db.items.updateMany({name:'iphone'}, {$set:{price:100}})