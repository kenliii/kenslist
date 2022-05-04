const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
},{
    timestamps: true
});

const jobsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: [commentSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Jobs', jobsSchema);