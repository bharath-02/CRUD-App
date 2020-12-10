const infoModel = require('../models/infoModel');

// GET
module.exports.get_data = async(req, res) => {
    var findData = await infoModel.find();
    res.json(findData);
}

// POST
module.exports.post_data = async(req, res) => {
    console.log(req.body);
    var data = new infoModel({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    });
    await data.save();
    res.json(data);
}

// PUT
module.exports.edit_data = async(req, res) => {
    var updateData = await infoModel.updateOne({ _id: req.body._id }, {
        $set: {
            Name: req.body.Name,
            Age: req.body.Age,
            City: req.body.City
        }
    });
    res.json(updateData);
}

// DELETE
module.exports.delete_data = async(req, res) => {
    var deleteData = await infoModel.findByIdAndRemove(req.params.id).then(e => {
        res.json({ message: "Deleted Successfully" })
    })
}