const exampleSchema = require('../models/example.schema.js');

function create(reqData, res) {
    const product = new exampleSchema(reqData);

    product.save()
        .then(data => {
            return res(data);
        }).catch(err => {
            return res({
                message: err.message || "Some error occurred while creating the Data."
            });
        });
};

function findAll(res) {
    exampleSchema.find()
        .then(result => {
            return res(result);
        }).catch(err => {
            return res({
                message: err.message || "Some error occurred while retrieving Data."
            });
        });
};

function findOne(reqData, res) {
    exampleSchema.find(reqData)
        .then(result => {
            if (!result) {
                return res.status(404).send({
                    message: "Data not found with id " + req.body.exampleId
                });
            }
            return res(result);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Data not found with id " + req.body.exampleId
                });
            }
            return res({
                message: "Error retrieving Data with id " + req.body.exampleId
            });
        });
};

function update(reqData, res) {
    if (!req.body) {
        return res({
            message: "Data content can not be empty"
        });
    }

    exampleSchema.findByIdAndUpdate(reqData.exampleId, reqData.dataUpdate, { new: true })
        .then(result => {
            if (!result) {
                return res.status(404).send({
                    message: "Data not found with id " + req.body.exampleId
                });
            }
            return res(result);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Data not found with id " + req.body.exampleId
                });
            }
            return res({
                message: "Error updating Data with id " + req.body.exampleId
            });
        });
};

function deleteData(reqData, res) {
    exampleSchema.findByIdAndRemove(reqData.exampleId)
        .then(result => {
            if (!result) {
                return res.status(404).send({
                    message: "Data not found with id " + req.body.exampleId
                });
            }
            return res({ message: "Data deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Data not found with id " + req.body.exampleId
                });
            }
            return res({
                message: "Could not delete Data with id " + req.body.exampleId
            });
        });
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    deleteData
}
