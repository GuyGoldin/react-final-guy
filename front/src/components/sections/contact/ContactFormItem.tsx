import React, { useEffect, useState } from "react";
import {
  contactMessageRegex,
  emailRegex,
  fullNameRegex,
  phoneNumberRegex,
} from "../../../utils/utils";

type ContactFormItemProps = {
  onChangeInputHandler: any;
  item: any;
  formValues: any;
  setIsValidate: any;
};
const ContactFormItem: React.FC<ContactFormItemProps> = ({
  onChangeInputHandler,
  item,
  formValues,
  setIsValidate,
}) => {
  useEffect(() => {
    const fullNameValid = fullNameRegex.test(formValues.fullName);
    const emailValid = emailRegex.test(formValues.email);
    const phoneNumberValid = phoneNumberRegex.test(formValues.phoneNumber);
    const contactMessageValid = contactMessageRegex.test(formValues.message);

    if (!fullNameValid) {
      setIsValidate({ state: false, sign: "Full Name" });
    }
    if (!contactMessageValid) {
      setIsValidate({ state: false, sign: "Message" });
    } else if (!emailValid) {
      setIsValidate({ state: false, sign: "Email" });
    } else if (!phoneNumberValid) {
      setIsValidate({ state: false, sign: "Phone Number" });
    }

    if (
      fullNameValid &&
      phoneNumberValid &&
      contactMessageValid &&
      emailValid
    ) {
      setIsValidate({ state: true, sign: `` });
    } else {
    }
  }, [formValues]);

  return (
    <div className="w_100 d-flex   align-items-center flex-column gap-3  p-2">
      <label className="btn2 p-1 fs_12 fw-normal w_100 ls2" htmlFor="">
        {item.labelTxt}:
      </label>
      {item?.inputType !== `textarea` ? (
        <input
          onChange={(e) => onChangeInputHandler(e, item?.servSign)}
          type={item.inputType}
          placeholder={item.placeholder}
          required={item.required ? true : false}
          className="form-control bg-light "
        />
      ) : (
        <textarea
          placeholder={item.placeholder}
          required={item.required ? true : false}
          onChange={(e) => onChangeInputHandler(e, item?.servSign)}
          style={{ minHeight: `200px` }}
          className="form-control"
        />
      )}
    </div>
  );
};

export default ContactFormItem;
