var mongoose = require('mongoose');
var schema = mongoose.Schema;

module.exports = mongoose.model('User', schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        validate: {
            validator: (text) => {
                return text.length > 0
            },
            message: "Empty name is not allowed"
        }
    }
}));