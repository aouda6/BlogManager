var mongoose = require('mongoose');
var commentsSchema = mongoose.Schema(
    {
        timeStamp: Date,
        statement: String,
        post: {type: mongoose.Schema.ObjectId, ref: ('Posts')}
    }
);

var Comments = mongoose.model('comment', commentsSchema);
exports.Model = Comments;



