const _ = require('lodash');
const bcrypt = require('bcrypt');
const data = require('../../helpers/seed/data.js');
const Customer = require('../../models/web/Customer');

/**
 * Signin a customer method.
 *
 * @param  \Http\Request
 * @return \Http\Response
 */

 const signin = async (req, res) => {
     try {
        const customer = await Customer.findOne({ email: req.body.email });
        // If Customer Not Found
        if (!customer) {
           return res.status(401).json({
               message: 'Autheticaion failed!',
           });
       }

       const validatePass = await bcrypt.compare(req.body.password, customer.password);
        if (!validatePass) {
            return res.status(401).json({
                message: 'Autheticaion failed!',
            });
        }

        const token = customer.generateToken();
        return res.status(200).json({
            token,
            id: customer._id,
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            status: customer.status,
        });
     } catch (err) {
        return res.status(500).json({
            message: 'There was a server side error!',
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
        let customer = await Customer.findOne({ email: req.body.email });
        if (customer) {
            return res.status(400).json({
                type: 'error',
                message: 'Customer already exist!',
            });
        }

        customer = new Customer(req.body);
        customer.password = await bcrypt.hash(req.body.password, 10);

        const token = customer.generateToken();
        const result = await customer.save();

        return res.status(200).json({
            token,
            id: result._id,
            name: result.name,
            email: result.email,
            phone: result.phone,
            status: result.status,
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
    const customer = await Customer.findById(req.params.id);
    if (customer) {
        res.status(200).json(customer);
    } else {
        res.status(404).json({ message: 'OPPS! Customer not found' });
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
    try {
        const customer = await Customer.findById(req.params.id);
        if (req.body.password) {
            const checkPassword = await bcrypt.compare(req.body.oldPassword, customer.password);
            if (!checkPassword) {
                return res.status(500).json({
                    message: "Old Password didn't match!",
                });
            }
        }
        if (customer) {
            customer.email = req.body.email || customer.email;
            customer.name = req.body.name || customer.name;
            customer.phone = req.body.phone || customer.phone;
            if (req.body.password) {
                customer.password = await bcrypt.hash(req.body.password, 10);
            }
            const token = customer.generateToken();
            const updateCustomer = await customer.save();
            return res.status(200).json({ 
                token,
                id: updateCustomer._id,
                name: updateCustomer.name,
                email: updateCustomer.email,
                phone: updateCustomer.phone,
             });
        }
    } catch (err) {
        return res.status(500).json({
            error: 'There was a server side error!',
        });
    }
};


/**
 * Remove the specified product from database.
 *
 * @param  int id
 * @return \Http\Response
 */

const destroy = async (req, res) => {
    res.status(200).json({ message: 'Customer deleted successfully!' });
};


/**
 * Seeding the dummy customer data on database.
 *
 * @return \Http\Response
 */

 const seeds = async (req, res) => {
     try {
        // await Customer.remove({});
        const createdCustomers = await Customer.insertMany(data.customers);
        return await res.send({createdCustomers});
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
