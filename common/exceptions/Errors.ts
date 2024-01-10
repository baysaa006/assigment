export class ErrorType {
  constructor(
    public readonly status: number,
    public readonly code: string,
    public readonly message: string
  ) {}
}
export const NO_USER = new ErrorType(400, "CC01", "Хэрэглэгч бүртгэлгүй байна");
export const INVALID_CREDENTIALS = new ErrorType(
  401,
  "CC02",
  "Нууц үг буруу байна"
);
export const USER_ALREADY_EXIST = new ErrorType(
  403,
  "CC02",
  "Хэрэглэгч бүртгэлтэй байна"
);

export const NO_WALLET = new ErrorType(400, "CW01", "Хэтэвч бүртгэлгүй байна");
export const WALLET_EXIST = new ErrorType(
  401,
  "CW02",
  "Хэтэвч бүртгэлтэй байна"
);

export const INVALID_ADDRESS = new ErrorType(403, "CA01", "Хаяг буруу байна");
export const NO_ADDRESS = new ErrorType(401, "CA02", "Хаяг олдсонгүй байна");

export const INVALID_TOKEN = new ErrorType(400, "CT01", "Токен буруу байна");
export const TOKEN_EXPIRED = new ErrorType(
  402,
  "CT02",
  "Токен хугацаа дууссан байна"
);
