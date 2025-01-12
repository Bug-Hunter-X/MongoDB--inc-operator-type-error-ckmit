```javascript
//Correct use of $inc operator in MongoDB update query
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { sequence: 1 }});
```