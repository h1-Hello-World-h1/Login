import bcrypt from "bcrypt";
import createError from "http-errors";
import { UserModel } from "../models/user.model.js";

export const postUserLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      next(createError.Conflict(`Ungültige Anmeldedaten`));
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      next(createError.Conflict(`Ungültiges Passwort`));
      return;
    }

    // Erfolgreiche Anmeldung
    res.status(200).json({
      code: 200,
      answer: "Anmeldung erfolgreich",
      userName: user.name,
    });
  } catch (error) {
    next(error);
  }
};
