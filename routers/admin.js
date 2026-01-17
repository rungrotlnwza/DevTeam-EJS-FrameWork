const express = require('express');

const router = express.Router();

const allowAdminOnly = (req, res, next) => {

    if (req.headers["admin_secret"] === "021178466") {
        next();
    }
    else {
        res.status(403).json({ error: "Forbidden" });
    }
}

router.route(`/admin`).get(allowAdminOnly, (req, res) => {
    res.status(200).json({ ok: "ok"})
});

module.exports = router;
