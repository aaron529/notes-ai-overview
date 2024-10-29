import { body, validationResult } from "express-validator";

export default function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export const noteTitleValidationRules = [
  body("title")
    .isLength({ min: 1 })
    .withMessage("Title is required")
    .isLength({ max: 100 })
    .withMessage("Title must be less than 100 characters long"),
];

export const noteContentValidationRules = [
  body("content")
    .isLength({ min: 1 })
    .withMessage("Content is required")
    .isLength({ max: 5000 })
    .withMessage("Content must be less than 5000 characters long"),
];

export const validateAllRules = [
  ...noteTitleValidationRules,
  ...noteContentValidationRules,
];
