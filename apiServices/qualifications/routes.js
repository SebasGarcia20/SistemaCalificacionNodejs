module.exports = app => {
    const qualification = require("../qualifications/controller.js");

    var router = require("express").Router();

    // Create a new Qualification
    router.post("/", qualification.create);

    // Retrieve all Qualifications
    router.get("/", qualification.findAll);

    // Retrieve all Qualifications by specify date
    router.get("/SpecifyDate", qualification.findAllByDate);

    // Retrieve all Qualifications greater than three
    router.get("/GreaterThanThree", qualification.findAllGreaterThanThree);

    // Retrieve a single Tutorial with id
    router.get("/:id", qualification.findOne);

    // Update a Qualification with id
    router.put("/:id", qualification.update);

    // Delete a Qualification with id
    router.delete("/:id", qualification.delete);

    app.use('/api/qualifications', router);
};