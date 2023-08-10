import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { content } from "../content/content";
import authServices from "../services/auth.service.ts";
import { useNavigate } from "react-router-dom";
interface FormValues {
  [key: string]: string;
}

const Register: React.FC = () => {
  const [resMsg, setResMsg] = useState({ show: false, text: `` });
  const [formValues, setFormValues] = useState<FormValues>({
    Name: ``,
    Email: ``,
    Password: ``,
  });

  const register = content?.find((item) => item.name === `register`);
  const nav = useNavigate();
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    labelTxt: string
  ) => {
    const { value } = event.target;
    setFormValues((s) => ({
      ...s,
      [labelTxt]: value,
    }));
  };
  const handleRes = async (res) => {
    setResMsg({ show: true, text: res.data });
    if (res.status === 500) {
      return;
    }
    if (res.status === 200) {
      setTimeout(() => {
        nav(`/login`);
      }, 1000);
    }
  };
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.Name.length < 2) {
      return;
    }
    authServices.register(formValues).then((res) => handleRes(res));
  };

  return (
    <div>
      <Form onSubmit={formSubmit}>
        <h2 className="h2 p-2 text-center bg-secondary text-white">
          Register{" "}
        </h2>
        {resMsg.show && <p>{resMsg.text}</p>}
        {register?.form?.map((formItem, formIndex) => {
          return (
            <div key={formIndex} className="d-flex fs_color1">
              <label htmlFor="" className="bgc1 p-2 w_30">
                {formItem.labelTxt}
              </label>
              <input
                className="form-control"
                type={formItem.inputType}
                name={formItem.inputName}
                placeholder={formItem.placeholder}
                required={formItem.required ? true : false}
                onChange={(e) => handleInputChange(e, formItem.labelTxt)}
              />
            </div>
          );
        })}
        <div className="d-flex align-items-center justify-content-center mt-2">
          <button type="submit" className="btn1 text-center p-2 radius2">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
