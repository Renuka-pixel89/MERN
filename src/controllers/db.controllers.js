const User = require('../models/user');
const Department = require('../models/department');

// Retrieve and return all users and departments from the database
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            Department.find()
                .then(departments => {
                    res.send({ users, departments });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Something went wrong while getting list of departments."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of users."
            });
        });
};

// Create and Save a new User
exports.createUser = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required fields"
        });
    }

    const user = new User({
        username: req.body.username,
        deptid: req.body.deptid
    });

    user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new user."
            });
        });
};

// Create and Save a new Department
exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required fields"
        });
    }

    const department = new Department({
        did: req.body.did,
        dname: req.body.dname
    });

    department.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new department."
            });
        });
};

// Find a single User by ID
exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error getting user with id " + req.params.id
            });
        });
};

// Update a User identified by ID
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required fields"
        });
    }

    User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        deptid: req.body.deptid
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.id
            });
        });
};

// Delete a User by ID
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({ message: "User deleted successfully!" });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.id
            });
        });
};

// Chalapathijoin with no id
exports.chalapathijoin = async (req, res) => {
    try {
        const results = await User.aggregate([
            {
                $lookup: {
                    from: 'department',  // Ensure this matches the collection name for departments
                    localField: 'deptid',
                    foreignField: 'did',
                    as: 'department_info'
                }
            }
        ]);

        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
