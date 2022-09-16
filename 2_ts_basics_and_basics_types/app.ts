let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  // with unknown we often need an extra type check
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};

// never makes clearer that the function is intended to not return anything

generateError("An error occurred", 404);
