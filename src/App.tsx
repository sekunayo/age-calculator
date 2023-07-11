import { Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "./components/Button";
import Input from "./components/Input";
import './styles/index.scss'
import { calculateAge } from "./utils/helpers";
import { validationSchema } from "./utils/validation";

function App() {
  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--"
  });

  const handleSubmit = (values: any, action: any) => {
    const date = new Date(`${values.day}-${values.month}-${values.year}`)

    if (Object.prototype.toString.call(date) !== "[object Date]") {
    }
    else {
      const { ageYears, ageMonths, ageDays } = calculateAge(parseInt(values.day), parseInt(values.month), parseInt(values.year))
      setAge({
        years: ageYears.toString(),
        months: ageMonths.toString(),
        days: ageDays.toString(),
      })
    }

    action.resetForm();
  };

  const validateValues = (age: any) => {
    if (parseInt(age.days) < 0 || parseInt(age.months) < 0 && age.days !== "--" && age.months !== "--") {
      return 0
    }
    else {
      return age
    }
  }

  return (
    <div className="app">
      <div className="app__card">
        <Formik initialValues={{ day: "", month: "", year: "" }} validationSchema={validationSchema} onSubmit={(values, action) => handleSubmit(values, action)}>
          <Form >
            <div className="app__input-container">
              <Input label="day" name="day" />
              <Input label="month" name="month" />
              <Input label="year" name="year" />
            </div>

            <div className="app__button">
              <div className="app__button-line"></div>
              <Button type="submit" />
            </div>
          </Form>

        </Formik>

        <div className="app__text">
          <p className="app__text-content"><span>{age.years}</span> years</p>s
          <p className="app__text-content"><span>{parseInt(age.months) < 0 && age.months !== "--" ? 0 : age.months}</span> months</p>
          <p className="app__text-content"><span>{parseInt(age.days) < 0 && age.days !== "--" ? 0 : age.days}</span> days</p>
        </div>

      </div>
    </div >
  );
}

export default App;
