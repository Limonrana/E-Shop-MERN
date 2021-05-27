/**
 * Display the specified ENV Data.
 *
 * @return \Http\Response
 */

 const paypal = async (req, res) => {
    try {
       const data = process.env.PAYPAL_CLIENT_ID || 'sb';
       res.status(200).json(data);
    } catch (error) {
       res.status(500).json({ message: 'OPPS! There was an server side error!' });
    }
};

module.exports = { paypal };