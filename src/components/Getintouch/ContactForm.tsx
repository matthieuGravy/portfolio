import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ButtonSubmit } from "../../components/blocs/Buttons";
//import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import Heading from "../../components/blocs/Heading";

interface MyFormValues {
  prenom: string;
  nom: string;
  email: string;
  entreprise: string;
  sujet: string;
  message: string;
}

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  /*
  const handleRecaptcha = (value) => {
    console.log(value);
  };*/
  const SignupSchema = Yup.object().shape({
    nom: Yup.string()
      .min(2, "Too short !")
      .max(50, "Too long !")
      .matches(/^[A-Za-z ]+$/, "Only letters, spaces are allowed")
      .required("Eequired"),
    prenom: Yup.string()
      .min(2, "Too short !")
      .max(50, "Too long !")
      .matches(/^[A-Za-z ]+$/, "Only letters, spaces are allowed")
      .required("Required"),
    email: Yup.string().email("Email invalide").required("Requis"),
    entreprise: Yup.string()
      .min(2, "Too short !")
      .max(50, "Too long !")
      .matches(
        /^[A-Za-z0-9 ]+$/,
        "Only letters, numbers and spaces are allowed"
      )
      .notRequired(),

    sujet: Yup.string()
      .min(2, "Too short !")
      .max(50, "Too long !")
      .matches(
        /^[A-Za-z0-9 !,;.?:]+$/,
        "Only letters, numbers, spaces and specific characters are allowed"
      )
      .required("Required"),

    message: Yup.string()
      .min(2, "Too short !")
      .max(500, "Too long !")
      .matches(
        /^[A-Za-z0-9 !,;.?:]+$/,
        "Only letters, numbers, spaces and specific characters are allowed"
      )
      .required("Required"),
  });
  const submitForm = async (
    values: MyFormValues,
    { setSubmitting }: FormikHelpers<MyFormValues>
  ) => {
    try {
      const response = await fetch(
        "https://itg-back-625046c3ea20.herokuapp.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //const data = await response.json();
      setFormSubmitted(true);
    } catch (error) {
      console.error(
        "Il y a eu un problème avec votre fetch opération: ",
        error
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <>
        {formSubmitted ? (
          <>
            <section className="text-center py-24">
              <Heading title="Thank you !" level="h2" className="" />
              <p className="text-center">Message Sent</p>
            </section>
          </>
        ) : (
          <>
            <>
              <section className=" max-w-[700px] md:p-24 rounded-xl bg-yellow-200 space-y-8">
                <Heading title="get in touch" level="h4" className="" />
                {/*<ReCAPTCHA sitekey="votre-clé-de-site" onChange={handleRecaptcha}> */}
                <Formik
                  initialValues={{
                    nom: "",
                    prenom: "",
                    email: "",
                    entreprise: "",
                    sujet: "",
                    message: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={submitForm}
                >
                  {({ errors, touched, values }) => (
                    <Form className="">
                      <section className="grid md:grid-cols-2 grid-rows-3 gap-y-8 md:gap-x-12 ">
                        <label className="relative">
                          <Field
                            name="nom"
                            placeholder="Name"
                            className={`bg-yellow-200 border-b-[1px] border-zinc-500 py-2 uppercase focus:outline-none md:w-full ${
                              errors.nom && touched.nom
                                ? "border-red-500"
                                : values.nom === ""
                                ? "border-natural-50"
                                : "border-green-500"
                            }`}
                          />
                          {errors.nom && touched.nom ? (
                            <p className="absolute text-red-500 left-1">
                              {errors.nom}
                            </p>
                          ) : null}
                        </label>
                        <label className="relative md:place-self-end md:w-full">
                          <Field
                            name="prenom"
                            placeholder="Firstname"
                            className={`bg-yellow-200 border-b-[1px] border-zinc-500 py-2 uppercase focus:outline-none md:w-full  ${
                              errors.prenom && touched.prenom
                                ? "border-red-500"
                                : values.prenom === ""
                                ? "border-natural-50"
                                : "border-green-500"
                            }`}
                          />
                          {errors.prenom && touched.prenom ? (
                            <p className="absolute text-red-500 left-1">
                              {errors.prenom}
                            </p>
                          ) : null}
                        </label>
                        <label className="relative">
                          <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            className={`bg-yellow-200 border-b-[1px] border-zinc-500 py-2 uppercase focus:outline-none md:w-full ${
                              errors.email && touched.email
                                ? "border-red-500"
                                : values.email === ""
                                ? "border-natural-50"
                                : "border-green-500"
                            }`}
                          />
                          {errors.email && touched.email ? (
                            <p className="absolute text-red-500 left-1">
                              {errors.email}
                            </p>
                          ) : null}
                        </label>
                        <label className="relative md:place-self-end md:w-full">
                          <Field
                            name="entreprise"
                            placeholder="Company"
                            className={`bg-yellow-200 border-b-[1px] border-zinc-500 py-2 uppercase focus:outline-none md:w-full ${
                              errors.entreprise && touched.entreprise
                                ? "border-red-500"
                                : values.entreprise === ""
                                ? "border-natural-50"
                                : "border-green-500"
                            }`}
                          />
                          {errors.entreprise && touched.entreprise ? (
                            <p className="absolute text-red-500 left-1">
                              {errors.entreprise}
                            </p>
                          ) : null}
                        </label>
                        <label className="relative">
                          <Field
                            name="sujet"
                            placeholder="Subject"
                            className={`bg-yellow-200 border-b-[1px] border-zinc-500 py-2 uppercase focus:outline-none md:w-full ${
                              errors.sujet && touched.sujet
                                ? "border-red-500"
                                : values.sujet === ""
                                ? "border-natural-50"
                                : "border-green-500"
                            }`}
                          />
                          {errors.sujet && touched.sujet ? (
                            <p className="absolute text-red-500 left-1">
                              {errors.sujet}
                            </p>
                          ) : null}
                        </label>
                      </section>
                      <section className="flex flex-col ">
                        <label className="relative">
                          <Field
                            as="textarea"
                            name="message"
                            placeholder="Message"
                            className={`bg-yellow-200 border-b-[1px] border-zinc-500 py-2 uppercase focus:outline-none w-full ${
                              errors.message && touched.message
                                ? "border-red-500"
                                : values.message === ""
                                ? "border-natural-50"
                                : "border-green-500"
                            }`}
                          />
                          {errors.message && touched.message ? (
                            <p className="absolute text-red-500 left-1">
                              {errors.message}
                            </p>
                          ) : null}
                        </label>
                      </section>
                      <ButtonSubmit content="Send" />
                    </Form>
                  )}
                </Formik>
                {/*</ReCAPTCHA>*/}
              </section>
            </>
          </>
        )}
      </>
    </>
  );
};

export default ContactForm;
