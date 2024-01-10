export class ErrorType {
  constructor(
    public readonly status: number,
    public readonly code: string,
    public readonly message: string
  ) {}
}

export const NO_USER = new ErrorType(400, "CE17", "Хэрэглэгч бүртгэлгүй байна");

export const NO_WALLET = new ErrorType(400, "CW01", "Хэтэвч бүртгэлгүй байна");

export const WALLET_EXIST = new ErrorType(
  401,
  "CW01",
  "Хэтэвч бүртгэлтэй байна"
);

export const INVALID_CREDENTIALS = new ErrorType(
  400,
  "CE16",
  "Нууц үг буруу байна"
);

export const USER_ALREADY_EXIST = new ErrorType(
  400,
  "CE18",
  "Хэрэглэгч бүртгэлтэй байна"
);

export const INVALID_ADDRESS = new ErrorType(403, "CA01", "Хаяг буруу байна");

export const NO_ADDRESS = new ErrorType(401, "CA02", "Хаяг олдсонгүй байна");

export const NOT_FOUND = new ErrorType(400, "CU15", "Prediction олдсонгүй");

export const NOT_FOUND_PLAN = new ErrorType(400, "CU15", "Багц олдсонгүй");

export const NOT_ENOUGH = new ErrorType(
  400,
  "CU16",
  "Таны эрх хүрэлцэхгүй байна."
);

export const INVALID_TOKEN = new ErrorType(400, "CT01", "Токен буруу байна");

export const TOKEN_EXPIRED = new ErrorType(
  400,
  "CT01",
  "Токен хугацаа дууссан байна"
);

export const VALIDATION_ERROR = new ErrorType(500, "SE17", "Server error");
