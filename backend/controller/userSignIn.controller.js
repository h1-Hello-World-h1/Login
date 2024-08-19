import { UserModel } from "../models/user.model.js";

export const postUserSignInController = async (req, res, next) => {
  try {
    await UserModel.create(req.body);

    res.status(200).json({
      code: 200,
      answer: req.body,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
