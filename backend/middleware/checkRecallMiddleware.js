// middleware/checkRecall.js
import Recall from "../models/Recall.js";

export const checkRecall = async (req, res, next) => {
  try {
    for (const item of req.body.items || []) {
      const recalled = await Recall.findActiveByBatch(item.batch_id);
      if (recalled) {
        return res.status(400).json({
          message: `Batch ${item.batch_id} is under active recall. Order rejected.`
        });
      }
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error checking recalls" });
  }
};
