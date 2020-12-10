const InfoModel = require('../models/schema');

module.exports.get_data = async(req, res) => {
    var findData = await InfoModel.find();
    res.json(findData);
}

module.exports.post_data = async(req, res) => {
    var data = new InfoModel({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    });
    await data.save();

    res.json(data);
}

module.exports.edit_data = async(req, res) => {
    var update = await InfoModel.update({ _id: req.body._id }, {
        $set: {
            Name: req.body.Name,
            Age: req.body.Age,
            City: req.body.City
        }
    });
    res.json(update);
}