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

export const currentPasswordValidationRules = [
  body("currentpassword").isEmpty().withMessage("Password should not be empty"),
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

export async function postValidation(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ error: "Request body is empty" });

  if (req.body.username)
    await Promise.all(usernameValidationRules.map((rule) => rule.run(req)));

  if (req.body.email)
    await Promise.all(emailValidationRules.map((rule) => rule.run(req)));

  if (req.body.displayname)
    await Promise.all(displayNameValidationRules.map((rule) => rule.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
