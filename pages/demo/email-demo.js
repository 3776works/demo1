import { useRef, useState } from "react"

const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
const Form = () => {
  const emailRef = useRef()
  const [emailIsValid, setEmailIsValid] = useState(false)

  const emailCheckHandler = async () => {
    if (pattern.test(emailRef.current.value)) {
      const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_ABSTRACT_API}&email=${emailRef.current.value}`
      const response = await fetch(url)
      const data = await response.json()

      console.log(data)

      if (data.quality_score >= 0.7) {
        setEmailIsValid(true)
      } else {
        setEmailIsValid(false)
      }
    }
  }

  return (
    <>
      <form>
        <input
          id="email"
          name="email"
          type="email"
          required
          ref={emailRef}
          onBlur={emailCheckHandler}
        />
      </form>
      <p>VALIDATION: {emailIsValid ? <span>OK!</span> : <span>NO!</span>}</p>
    </>
  )
}

export default Form