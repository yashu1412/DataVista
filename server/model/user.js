const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        enum: ["Mr.", "Mrs.", "Miss", "Ms.", "Dr.", "Prof."], // Titles allowed
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    household_role: {
        type: String,
        required: true,
    },
    responsibility: {
        type: String,
        required: true,
        maxLength: 50,
    },
    type: {
        type: String,
        required: true,
        enum: ["child", "mother", "father", "grandparent", "guardian"], // Allowed user types
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
