import validator from "validator";

export const isValidEmail = (email: string) => {
  return validator.isEmail(email, {
    allow_utf8_local_part: false,
    allow_ip_domain: false,
    allow_display_name: false,
  });
};
