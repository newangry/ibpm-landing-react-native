"use client";
import clsx from "clsx";
import Logo from "@/components/Logo";
import Turnstile from "react-turnstile";
import styles from "./support.module.css";
import ContentCard from "@/components/ContentCard";
import { useReducer, Reducer, FormEvent } from "react"
import WavyBackground from "@/components/WavyBackground";

type SupportState = {
  email: string;
  message: string;
  token: string;
}

type Action = {
  type: string;
  payload?: string;
}

const initialState: SupportState = {
  email: "",
  message: "",
  token: "",
}

const reducer: Reducer<SupportState, any> = (state = initialState, action) => {
  const { type, payload } = action as Action
  switch (type) {
    case "SET_EMAIL":
      return {...state, email: payload! }
    case "SET_MESSAGE":
      return {...state, message: payload! }
    case "SET_TOKEN":
      return {...state, token: payload! }
    case "CLEAR":
      return initialState
    default:
      return state
  }
}

const validate = (state: SupportState) => {
  if (![state.email, state.message, state.token].includes("")) {
    return false;
  } else  {
    return true;  
  }
}

const Support = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const update = (key: string, payload: string) => dispatch({
    payload,
    type: `SET_${key}`,
  });

  const saveSupportMessage = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    validate(state);
  }

  return (
    <WavyBackground>
      <section className={styles.hero}>
        <ContentCard>
          <Logo label="Support" />          
          <form className={styles.column} onSubmit={saveSupportMessage}>
            <input
              autoFocus
              type="email"
              tabIndex={1}
              value={state.email}
              className={styles.input}
              placeholder="Email Address"
              onChange={evt => update("EMAIL", evt.target.value || "")}
            />
            <textarea
              rows={4}
              tabIndex={2}
              placeholder="Message"
              value={state.message}
              className={styles.textArea}
              onChange={evt => update("MESSAGE", evt.target.value || "")}
            />
            <Turnstile
              fixedSize
              onExpire={() => update("TOKEN", "")}
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
              onVerify={(token) => update("TOKEN", token)}
              className={clsx([styles.alignEnd, styles.captcha])}
            />
            <button
              disabled={state.token === ""}
              className={clsx([styles.button, styles.alignEnd])}
              onClick={() => alert("boop")}
            >
              Submit
            </button>
          </form>
        </ContentCard>
      </section>
    </WavyBackground>
  );
}

export default Support;
