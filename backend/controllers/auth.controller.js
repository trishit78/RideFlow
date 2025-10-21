import { loginService, registerService } from "../services/auth.service.js";

export const register = async (req, res) => {
    console.log('controller register');
  try {
    const { user, token } = await registerService(req.body);
    res.status(201).json({
      data: { user, token },
      success: true,
      error: null,
      message: "Successfully registered",
    });
  } catch (error) {
    console.log("error in register controller", error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginService({ email, password });
    res.status(201).json({
      data: { user, token },
      success: true,
      error: null,
      message: "Successfully logged in",
    });
  } catch (error) {
    console.log("error in login controller", error);
  }
};
