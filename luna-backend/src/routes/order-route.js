const express = require("express");
const router = express.Router();

const Order = require("../models/order-schema");
const OrderItem = require("../models/order-item-schema");

router.post("/orders", async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const order = await Order.create();

    await Promise.all(
      items.map((item) =>
        OrderItem.create({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
        }),
      ),
    );

    res.json({ success: true, orderId: order.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Order failed" });
  }
});

module.exports = router;
