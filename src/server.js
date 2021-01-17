const express= require('express');

const {ItemRouter}= require('./routes/Items')

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',express.static(__dirname+'/public'))
const PORT=process.env.PORT || 4444;

app.use('/api/create',ItemRouter);

app.listen(4444, () => {
    console.log(`started on http://localhost:4444`)
  })
