import  { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { contactForm } from "../content/files/contactForm";
import Button from "../components/ui/Button";
import generalServices from "../services/general.service";
import { toast } from "react-toastify";
import ContactFormItem from "../components/sections/contact/ContactFormItem";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [isValidate, setIsValidate] = useState({ state: false, sign: `` });
  const [errorMsg, setErrorMsg] = useState({ show: false, txt: `` });
  const nav = useNavigate();
  const [formValues, setFormValues] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidate.state) {
      setErrorMsg({ show: false, txt: `` });
      generalServices.contact(formValues).then((res) => toast(res.data));
      nav("/");
    } else {
      setErrorMsg({ show: true, txt: `The ${isValidate.sign} is not valid` });
    }
  };

  function onChangeInputHandler(
    e: ChangeEvent<HTMLInputElement>,
    labelTxt: string
  ) {
    const value = e.target.value;
    setFormValues((prevS) => ({ ...prevS, [labelTxt]: value }));
  }
  return (
    <div className="bgc7 p-2">
      <Form
        className="d-flex flex-column align-items-center justfiy-content-center text-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        {errorMsg.show && (
          <span
            className=" cursor-off w_100 text-light p-2 radius2 fs_15 fw-bold ls1 "
            style={{ backgroundColor: `crimson` }}
          >
            {errorMsg.txt}
          </span>
        )}
        {contactForm?.map((item, i) => {
          return (
            <ContactFormItem
              setIsValidate={setIsValidate}
              key={i}
              item={item}
              onChangeInputHandler={onChangeInputHandler}
              formValues={formValues}
            />
          );
        })}
        <Button type="submit" classNames=" p-3">
          Submit
        </Button>
      </Form>

      <div>
        <h2 className="h2">Contact Details</h2>
        {/* List of Objects of contact items  */}
      </div>
    </div>
  );
};

export default Contact;
