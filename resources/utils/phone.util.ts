import PhoneNumber from "awesome-phonenumber";

export const isValidPhone = (phone: string, countryCode = undefined) => {
  if (phone.search(/^\+84[0-9]+$/) < 0) {
    return false;
  }

  const phoneObj = new PhoneNumber(phone, countryCode);

  return phoneObj.isValid();
};
