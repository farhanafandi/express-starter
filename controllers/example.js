const service = require('../services/example.js');

exports.someFunction = (req, res) => {
    const varExampleTitle = req.body.exampleTitle;
    const varExampleDescription = req.body.exampleDescription;

    const reqData = {
        exampleTitle: varExampleTitle,
        exampleDescription: varExampleDescription
    }

    service.create(reqData).then(result => {
        res.send(result)
    });
};