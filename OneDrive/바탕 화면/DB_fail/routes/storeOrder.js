const express = require("express");
const router = express.Router();
let storeOrderData = require("../db/storeOrderData.json");

//읽어오기
router.get("/", (req, res) => {
  console.log(storeOrderData);
  res.json(storeOrderData);
});

//isFinish(boolean) 수정 (true->false, false->true ; toggle기능)
router.put("/Finish/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= storeOrderData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다" });
  }
  storeOrderData[parseInt(id)] = {
    OrderID: storeOrderData[parseInt(id)].OrderID,
    deliveryFee: storeOrderData[parseInt(id)].deliveryFee,
    orderMenu: storeOrderData[parseInt(id)].orderMenu,
    isAccept: storeOrderData[parseInt(id)].isAccept,
    isFinish: !storeOrderData[parseInt(id)].isFinish,
    isDelivered: storeOrderData[parseInt(id)].isDelivered,
  };
  console.log(storeOrderData);
  res.json(storeOrderData);
});

module.exports = router;
