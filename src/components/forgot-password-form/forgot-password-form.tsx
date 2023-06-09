import { Input } from "antd";
import Logo from "../../assets/images/BBP.svg";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import cls from "./forgot-password-form.module.scss";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

interface ApplyProps {}

type FormValues = {
  username: string;
};
const { REACT_APP_API_ENDPOINT } = process.env;

const ForgotPasswordForm: React.FC<ApplyProps> = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    criteriaMode: "all",
  });
  const onSubmit = async (data: FormValues, event: any) => {
    event.preventDefault();
    if (!isDirty || !isValid) {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        `${REACT_APP_API_ENDPOINT}/auth/forgot`,
        requestOptions
      );
      const data = await response.text();
      console.log(data);
      showToastMessage(data, response.status);
    } catch (error) {
      console.log(error);
    }
  };
  const showToastMessage = (message: string, status: number) => {
    if (status === 200) {
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // setTimeout(function () {
      //     window.location.href = window.location.href.split("?")[0]
      // }, 5000)
    } else if (status === 400) {
      toast.error(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(message);
    }
  };

  const { t } = useTranslation();

  const placeholderValue = t("placeholder4") || undefined;

  return (
    <section className={cls.wrapper}>
      <div className={cls["form-div"]}>
        <div className={cls["title"]}>{t("forget")}</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ToastContainer />
          <div className={cls["input-wrapper"]}>
            <div className={cls["input-box"]}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{ pattern: /\S+@\S+\.\S+/ }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <>
                    <label className={cls.label}>Email</label>
                    <Input
                      placeholder={placeholderValue}
                      onChange={onChange}
                      className={cls.input}
                      type="email"
                    />
                    {errors.username && (
                      <p className={cls.error}>{t("error4")}</p>
                    )}
                  </>
                )}></Controller>
            </div>
          </div>
          <input className={cls.btn} type="submit" value={"Send"} />
          <Link className={cls["have-account-link"]} to={"/login"}>
            {t("signin")}
          </Link>
        </form>
      </div>
      <div className={cls["div-logo-name"]}>
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
        <div>Bug Bounty Program</div>
      </div>
    </section>
  );
};
export default ForgotPasswordForm;
