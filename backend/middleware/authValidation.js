import { body, validationResult } from "express-validator";

export default function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export const usernameValidationRules = [
  body("username")
    .isLength({ min: 1 })
    .withMessage("Username is required")
    .isLength({ min: 3, max: 16 })
    .withMessage("Username must be between 3 and 16 characters long")
    .matches(/^[A-Za-z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),
];

export const userAsEmailValidationRules = [
  body("username")
    .isLength({ min: 1 })
    .withMessage("Username/Email is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Username/Email must be between 3 and 100 characters long")
    .matches(/^[A-Za-z0-9_@.]+$/)
    .withMessage(
      "Username/Email can only contain letters, numbers, underscores, at symbol and dots"
    ),
];

export const passwordValidationRules = [
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
];

export const emailValidationRules = [
  body("email").isEmail().withMessage("Email must be a valid email address"),
];

export const displayNameValidationRules = [
  body("displayname")
    .isLength({ min: 3, max: 20 })
    .withMessage("Display name must be between 3 and 20 characters long")
    .matches(/^[A-Za-z0-9 _-]+$/)
    .withMessage(
      "Display name can only contain letters, numbers, spaces, hyphens, and underscores"
    ),
];

export const validateAllRules = [
  ...usernameValidationRules,
  ...passwordValidationRules,
  ...emailValidationRules,
  ...displayNameValidationRules,
];
