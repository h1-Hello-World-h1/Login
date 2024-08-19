import { check, validationResult } from "express-validator";

export const validateUser = [
  check("email")
    .isEmail()
    .withMessage("Bitte eine gültige E-Mail-Adresse angeben."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Das Passwort muss mindestens 6 Zeichen lang sein."),
  // Zusätzliche Validierungen...
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
