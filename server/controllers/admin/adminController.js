const _ = require('lodash');
const bcrypt = require('bcrypt');
const data = require('../../helpers/seed/data.js');
const Admin = require('../../models/admin/Admin');

/**
 * Signin a customer method.
 *
 * @param  \Http\Request
 * @return \Http\Response
 */

 const signin = async (req, res) => {
     try {
        const admin = await Admin.findOne({ email: req.body.email });
        // If Customer Not Found
        if (!admin) {
           return res.status(401).json({
               type: 'error',
               message: 'Autheticaion failed!',
           });
       }

       const validatePass = await bcrypt.compare(req.body.password, admin.password);
        if (!validatePass) {
            return res.status(401).json({
                type: 'error',
                message: 'Autheticaion failed!',
            });
        }

        const token = admin.generateToken();
        return res.status(200).json({
            type: 'success',
            meassge: 'Admin signin was successful!',
            token,
            user: _.pick(admin, ['_id', 'name', 'email', 'phone', 'status', 'role']),
        });
     } catch (err) {
        return res.status(500).json({
            error: 'There was a server side error!',
        });
     }
};


/**
 * Signup an customer and store data on database.
 *
 * @param  \Http\Request
 * @return \Http\Response
 */

const signup = async (req, res) => {
    try {
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            return res.status(400).json({
                type: 'error',
                message: 'Admin already exist!',
            });
        }

        admin = new Admin(req.body);
        admin.password = await bcrypt.hash(req.body.password, 10);

        const token = admin.generateToken();
        const result = await admin.save();

        return res.status(200).json({
            type: 'success',
            meassge: 'Admin singup was successful!',
            token,
            data: _.pick(result, ['_id', 'name', 'email', 'phone', 'status', 'role']),
        });
    } catch (err) {
        return res.status(500).json({
            error: 'There was a server side error!',
        });
    }
};


/**
 * Display the specified product.
 *
 * @param  int id
 * @return \Http\Response
 */

const show = async (req, res) => {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
        res.status(200).json(admin);
    } else {
        res.status(404).json({ message: 'OPPS! Admin not found' });
    }
};


/**
 * Update the specified product in database.
 *
 * @param  \Http\Request  Request
 * @param  int  id
 * @return \Http\Response
 */

const updated = async (req, res) => {
    res.status(200).json({ message: 'Admin updated successfully!' });
};


/**
 * Remove the specified product from database.
 *
 * @param  int id
 * @return \Http\Response
 */

const destroy = async (req, res) => {
    res.status(200).json({ message: 'Admin deleted successfully!' });
};


/**
 * Seeding the dummy customer data on database.
 *
 * @return \Http\Response
 */

 const seeds = async (req, res) => {
     try {
        // await Admin.remove({});
        const createdAdmins = await Admin.insertMany(data.admin);
        return await res.send({createdAdmins});
     } catch (err) {
        return res.status(500).json({
            type: 'error',
            message: err.message,
        });
     }
};

module.exports = {
    signup,
    signin,
    show,
    destroy,
    updated,
    seeds,
};
