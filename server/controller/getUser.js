const user = require("../model/user");

exports.getUser = async (req, res) => {
    try {
        const { type } = req.query; // Optional filter by type

        let query = {};
        if (type) {
            query.type = type;
        }

        const userData = await user.find(query);

        res.status(200).json({
            success: true,
            data: userData,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
