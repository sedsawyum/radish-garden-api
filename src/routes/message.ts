import { Router } from "express";
import Message from "../models/Message.js";

const route = Router();

// Add Message
route.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const response = await newMessage.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Messages
route.get("/:conversationId", async (req, res) => {
  const { conversationId } = req.params;

  try {
    const response = await Message.find({ conversationId });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(500);
  }
});

export default route;
