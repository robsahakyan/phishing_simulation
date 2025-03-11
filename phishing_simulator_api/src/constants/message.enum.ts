export enum MessageTypeEnum {
  SEND_FOR_VERIFY = 'SEND_FOR_VERIFY',
  IS_NOT_ACCEPTED = 'IS_NOT_ACCEPTED',
  VERIFY_YOUR_EMAIL = 'VERIFY_YOUR_EMAIL',
  USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED',
  INVALID_CODE = 'INVALID_CODE',
  INVALID_RESET_PASSWORD_TOKEN = 'INVALID_RESET_PASSWORD_TOKEN',
  USER_TOKEN_NOT_FOUND = 'USER_TOKEN_NOT_FOUND',
  USER_IS_ALREADY_EXISTS = 'USER_IS_ALREADY_EXISTS',
  PRODUCT_IS_ALREADY_EXISTS = 'PRODUCT_IS_ALREADY_EXISTS',
  COMPANY_DATA_ALREADY_EXISTS = 'COMPANY_DATA_ALREADY_EXISTS',
  COMPANY_DOES_NOT_HAVE_USERS = 'COMPANY_DOES_NOT_HAVE_USERS',
  USER_IS_NOT_FOUND = 'USER_IS_NOT_FOUND',
  USER_NOT_FOUND_IN_COMPANY = 'USER_NOT_FOUND_IN_COMPANY',
  CATEGORY_IS_NOT_FOUND = 'CATEGORY_IS_NOT_FOUND'
}

export const messages = {
  SEND_FOR_VERIFY: "Your email is successfully verified. Please wait till admin respond your request",
  IS_NOT_ACCEPTED: "Your application is not accepted by admin",
  VERIFY_YOUR_EMAIL: "Please verify your email",
  USER_UNAUTHENTICATED: "User unauthenticated",
  INVALID_CODE: "Code is invalid",
  INVALID_RESET_PASSWORD_TOKEN: "Invalid reset password token",
  USER_TOKEN_NOT_FOUND: "User token is not found",
  USER_IS_ALREADY_EXISTS: "User already exists",
  PRODUCT_IS_ALREADY_EXISTS: "Product with this sku is already exists",
  USER_NOT_FOUND_IN_COMPANY: "User not found in this company",
  COMPANY_DATA_ALREADY_EXISTS: "A company with the provided phone number or name already exists",
  COMPANY_DOES_NOT_HAVE_USERS: "No users found for this company",
  USER_IS_NOT_FOUND: "User is not found",
  CATEGORY_IS_NOT_FOUND: "Category is not found"
}
