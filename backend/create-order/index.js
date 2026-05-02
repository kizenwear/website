const Razorpay = require('razorpay');

module.exports = async function (context, req) {
    context.log('Creating Razorpay order...');

    try {
        if (!req.body || !req.body.amount) {
            context.res = {
                status: 400,
                body: { error: "Please pass an amount in the request body" }
            };
            return;
        }

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET
        });

        const options = {
            amount: Math.round(req.body.amount * 100), // amount in the smallest currency unit (paise for INR)
            currency: req.body.currency || "INR",
            receipt: `receipt_${new Date().getTime()}`
        };

        const order = await razorpay.orders.create(options);

        context.res = {
            status: 200,
            body: order
        };
    } catch (error) {
        context.log.error('Error creating order:', error);
        context.res = {
            status: 500,
            body: { error: "Failed to create order" }
        };
    }
};
