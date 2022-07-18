const { User, Thought } = require('../models');

const userCroller = {

    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getOneUser({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'No user found!' });
                    return;
                }
                res.json(userData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    createUser({ body }, res) {
        User.create(body)
            .then(userData => res.json(userData))
            .catch(err => res.json(err));
    },

    updateUser({ params, body }, res) {
        User.findByIdAndUpdate({ _is: params.id }, body, { new: true, runValidators: true })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'No user found!' });
                    return;
                }
                res.json(userData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    }

    deleteUser({ params }, res) {
        Thought.deleteMany({ userId: params.id })
            .then(() => {
                User.findOneAndDelete({ userId: params.id })
                    .then(userData => {
                        if (!userData) {
                            res.status(404).json({ message: 'No user found!' });
                        }
                        res.json(userData);
                    });
            })
            .catch(err => res.json(err));
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true }
        )
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(400).json(err));
    },

    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(400).json(err));
    }
};

module.exports = userController

