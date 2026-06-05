import { Router } from "express";
import { validate } from "../../../middlewares/validate.ts";
import { noticeSchema } from "../../../schemas/notice/noticeSchema.ts";
import adminNoticeController from "../../../controllers/admin/user/adminNoticeController.ts";

const router = Router();

router.post("/create", validate(noticeSchema), adminNoticeController.createNotice);
router.patch("/:noticeId", validate(noticeSchema), adminNoticeController.updateNotice);
router.delete("/:noticeId", adminNoticeController.deleteNotice);

export default router;
