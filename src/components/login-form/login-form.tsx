import { Input } from "antd";
import Logo from "../../assets/images/BBP.svg";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import cls from "./login-form.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getClaims, saveToken } from "../../auth/handleJWT";
import AuthenticationContext from "../../auth/authenticationContext";
import { useTranslation } from "react-i18next";

interface LoginFormProps {}

const { REACT_APP_API_ENDPOINT } = process.env;

type FormValues = {
  username: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = () => {
  const { update } = React.useContext(AuthenticationContext);

  const navigate = useNavigate();

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
        `${REACT_APP_API_ENDPOINT}/auth/signIn`,
        requestOptions
      );
      if (response.status >= 200 && response.status < 300) {
        let authData = await response.json();
        console.log(authData);
        saveToken(authData);
        update(getClaims());
        navigate("/");
      } else if (response.status >= 400 && response.status < 500) {
        const data = await response.text();
        console.log(data);
        showToastMessage(data);
      } else {
        showToastMessage("Something went wrong, please try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const showToastMessage = (message: string) => {
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(message);
  };

  const { t } = useTranslation();

  const placeholderValue = t("placeholder4") || undefined;

  return (
    <section className={cls.wrapper}>
      <div className={cls["form-div"]}>
        <div className={cls["title"]}>Sign in to BBP.uz</div>
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
            <div className={cls["input-box"]}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <>
                    <label className={cls.label}>Password</label>
                    <Input
                      placeholder="xxxxxxxx"
                      className={cls.input}
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                      onChange={onChange}
                    />
                    {errors?.password?.type === "required" && (
                      <p className={cls.error}>{t("error1")}</p>
                    )}
                    {errors?.password?.type === "minLength" && (
                      <p className={cls.error}>
                        First name cannot less than 8 characters
                      </p>
                    )}
                  </>
                )}></Controller>
            </div>
            <Link
              className={cls["forgot-password-link"]}
              to={"/forgot-password"}>
              <div>Forgot password?</div>
            </Link>
          </div>
          <input className={cls.btn} type="submit" value={"Sign in"} />
          <Link className={cls["have-account-link"]} to={"/signup"}>
            Not registered yet
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
export default LoginForm;
