const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Fynd_Academy')

.then(()=>console.log('Database has been connected'))
.catch(()=>console.log('Database has not connected'))



//create schema
const courseSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    cType:String,
    noVideo:Number,
    author:String,
    active:Boolean

})

const CourseRecord = new mongoose.model('CourseRecord',courseSchema)

//Create document

const Reactdata = new CourseRecord({
    title:'React Js',
    cType:'Front end',
    noVideos:54,
    author:'Jaydeep',
    active:true
})
Reactdata.save();