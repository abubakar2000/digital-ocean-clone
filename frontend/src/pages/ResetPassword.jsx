import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { apiip } from "../serverConfig";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const [email, setEmail] = useState("");
  let testRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  let ValidatedEmail = testRegex.test(email);

  const [otp, setOTP] = useState("");
  let navigate = useNavigate();
  const ChangePassword = () => {
    if (password === "" || confirm_password === "") {
      alert("Input data!");
    } else {
      const body = {
        new_password1: password,
        new_password2: confirm_password,
      };

      axios
        .post(`${apiip}/api/accounts/auth/password/change/`, body)
        .then((res) => {
          if (res.status === 200) {
            console.log("Res -> ", res);
            navigate("/login");
          }
        })
        .catch((err) => {
          alert("Cannot login!");
        });
    }
  };

  const sendOTP = () => {
    if (email === "") {
      alert("Input data!");
    } else {
      if (ValidatedEmail !== true) {
        alert("Enter Valid Email!");
      } else {
        const body = {
          email: email,
        };

        axios
          .post(`${apiip}/api/accounts/auth/password/change/`, body)
          .then((res) => {
            if (res.status === 200) {
              console.log("Res -> ", res);
              setCheck(1);
              navigate("/login");
            }
          })
          .catch((err) => {
            alert("Cannot login!");
          });
      }
    }
  };

  const VerifyOTP = () => {
    if (otp === "") {
      alert("Input data!");
    } else {
      const body = {
        otp: otp,
      };

      axios
        .post(`${apiip}/api/accounts/auth/password/change/`, body)
        .then((res) => {
          if (res.status === 200) {
            console.log("Res -> ", res);
            setCheck(2);
            navigate("/login");
          }
        })
        .catch((err) => {
          alert("Cannot login!");
        });
    }
  };

  const [resendCode, setResenddCode] = useState(false);
  const [timerCount, setTimer] = useState(15);

  useEffect(() => {
    if (resendCode !== false) {
      let interval = setInterval(() => {
        setTimer((lastTimerCount) => {
          lastTimerCount <= 1 && clearInterval(interval);
          return lastTimerCount - 1;
        });
      }, 1000);
    }
  }, [resendCode]);

  useEffect(() => {
    if (timerCount === 0) {
      setTimer(15);
      setResenddCode(false);
    }
  }, [resendCode, timerCount]);

  useEffect(() => {
    document.title = "Reset Password";
  }, []);

  const [check, setCheck] = useState(0);
  return (
    <div
      className="login container-fluid"
      style={{
        minHeight: "calc(100vh - 42pt)",
        backgroundImage:
          "url(" +
          "https://ui-cdn.digitalocean.com/registration/c3c4764/static/media/new-brand-bg.f4ffd8f05acc4405214a.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col-md-4 rounded-3 py-5" style={{ margin: "0 auto" }}>
        {check === 0 ? (
          <div className="login-form text-left">
            <h2 onClick={() => console.log(ValidatedEmail)}>
              Forgot password?
            </h2>
            <p className="text-muted">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
            <div className="mb-3">
              <label htmlFor="pass">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                style={{ color: "black" }}
              />
            </div>
            <button
              type="button"
              className="btn btn-custom btn-lg btn-block mt-3"
              onClick={() => (sendOTP(), setCheck(1))}
            >
              SEND OTP
            </button>
          </div>
        ) : (
          ""
        )}

        {check === 1 ? (
          <div className="login-form text-left">
            <h2>Enter your OTP</h2>
            <div className="mb-3">
              <label htmlFor="otp">OTP</label>
              <div class="buttonIn" style={{ position: "relative" }}>
                <input
                  style={{ color: "black" }}
                  type="text"
                  id="otp"
                  className="form-control"
                  placeholder="1234"
                  value={otp}
                  onInput={(e) => setOTP(e.target.value)}
                />
                <button
                  style={{
                    position: "absolute",
                    top: "12pt",
                    padding: "0px",
                    right: "10pt",
                    zIndex: "2",
                    cursor: "pointer",
                    fontSize: "14px",
                    width: `${
                      resendCode === false && timerCount === 15
                        ? "70pt"
                        : "100pt"
                    }`,
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={() => {
                    resendCode === false && timerCount === 15
                      ? setResenddCode(true)
                      : setResenddCode(false);

                    // props.sendEmail(props.email, props.user_type);
                  }}
                  disabled={
                    resendCode === false && timerCount === 15 ? null : true
                  }
                >
                  {resendCode === false && timerCount === 15
                    ? "RESEND OTP"
                    : "Resend code in " + timerCount}
                </button>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-custom btn-lg btn-block mt-3"
              onClick={() => (VerifyOTP(), setCheck(2))}
            >
              VERIFY OTP
            </button>
          </div>
        ) : (
          ""
        )}

        {check === 2 ? (
          <div className="login-form text-left">
            <h2>Enter your new password</h2>
            <div className="mb-3">
              <label htmlFor="pass">Password</label>
              <input
                style={{ color: "black" }}
                type="password"
                id="pass"
                className="form-control"
                placeholder="Password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass">Confirm Password</label>
              <input
                style={{ color: "black" }}
                type="password"
                id="confirm-password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirm_password}
                onInput={(e) => setConfirm_Password(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-custom btn-lg btn-block mt-3"
              onClick={() => ChangePassword()}
            >
              Reset Password
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
