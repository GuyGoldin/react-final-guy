export const fullNameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;

export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const phoneNumberRegex =
  /^(05[0-9])(?:[0-9]{7}|[0-9]{3}\s[0-9]{3}\s[0-9]{3}|[0-9]{2}\s[0-9]{2}\s[0-9]{3}\s[0-9]{3})$/;

export const contactMessageRegex = /^[A-Za-z]{30,}$/;
export const headers = {
  headers: { Authorization: localStorage.getItem("token") },
};