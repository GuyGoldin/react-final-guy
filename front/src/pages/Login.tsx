import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import { content } from "../content/content";
import authServices from "../services/auth.service.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import { toast } from "react-toastify";

interface FormValues {
  [key: string]: string;
}

const Login: React.FC = () => {
  const AuthCtx = useContext(AuthContext);
  const [resMsg, setResMsg] = useState({ show: false, text: `` });
  const [formValues, setFormValues] = useState<FormValues>({
    Email: ``,
    Password: ``,
  });

  const login = content?.find((item) => {
    return item.name === `login`;
  });
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
    setResMsg({ show: true, text: `${res.data.msg}` });
    AuthCtx.login(
      res.data.token,
      res.data.roles,
      res.data.email,
      res.data.id,
      res.data.name
    );
    if ((res.status = 200)) {
      toast(`You logged in successfully`);
      setTimeout(() => {
        nav(`/`);
      }, 1000);
    } else {
      return;
    }
  };
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues?.Name?.length < 2) {
      return;
    }
    authServices.login(formValues).then((res) => handleRes(res));
  };

  return (
    <div>
      <Form onSubmit={formSubmit}>
        {resMsg.show === true && <p>{resMsg.text}</p>}
        {login?.form?.map((formItem, formIndex) => {
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

export default Login;
