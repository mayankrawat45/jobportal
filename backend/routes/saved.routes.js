import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getSavedItems, toggleSaveJob, toggleSaveQuestion } from "../controllers/saved.contoller.js";

const saveRouter = express.Router();

saveRouter.use(authMiddleware);

saveRouter.get('/', getSavedItems);
saveRouter.post('/job/:jobId', toggleSaveJob);
saveRouter.post('/question/:questionId', toggleSaveQuestion);

export default saveRouter ;