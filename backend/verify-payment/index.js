const crypto = require('crypto');

module.exports = async function (context, req) {
    context.log('Verifying Razorpay payment...');

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            context.res = {
                status: 400,
                body: { error: "Missing payment details in request" }
            };
            return;
        }

        const secret = process.env.RAZORPAY_SECRET;
        const generated_signature = crypto
            .createHmac('sha256', secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest('hex');

        if (generated_signature === razorpay_signature) {
            context.res = {
                status: 200,
                body: { status: "success", message: "Payment verified successfully" }
            };
        } else {
            context.res = {
                status: 400,
                body: { status: "failure", error: "Invalid signature" }
            };
        }
    } catch (error) {
        context.log.error('Error verifying payment:', error);
        context.res = {
            status: 500,
            body: { error: "Failed to verify payment" }
        };
    }
};
