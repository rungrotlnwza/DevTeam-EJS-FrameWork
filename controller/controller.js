module.exports.getUser = async(req, res) => {
    try {
        const userId = req.params.id;
        res.status(200).json({
            success: true,
            data: user,
            message: `Hello world`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}