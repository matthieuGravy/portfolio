import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
//import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import Heading from "../../components/blocs/Heading";
import Paragraphe from "../../components/blocs/Paragraphe";
import Article from "../../components/blocs/Article";

interface MyFormValues {
  prenom: string;
  nom: string;
  email: string;
  entreprise: string;
  sujet: string;
  message: string;
}

const Contactpage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  /*
  const handleRecaptcha = (value) => {
    console.log(value);
  };*/
  const SignupSchema = Yup.object().shape({
    nom: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop long !")
      .matches(/^[A-Za-z ]+$/, "Seuls les lettres, les espaces sont autorisés")
      .required("Requis"),
    prenom: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop long !")
      .matches(/^[A-Za-z ]+$/, "Seuls les lettres, les espaces sont autorisés")
      .required("Requis"),
    email: Yup.string().email("Email invalide").required("Requis"),
    entreprise: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop long !")
      .matches(
        /^[A-Za-z0-9 ]+$/,
        "Seuls les lettres, les chiffres et les espaces sont autorisés"
      )
      .notRequired(),

    sujet: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop long !")
      .matches(
        /^[A-Za-z0-9 !,;.?:]+$/,
        "Seuls les lettres, les chiffres, les espaces et les caractères spécifiques sont autorisés"
      )
      .required("Requis"),

    message: Yup.string()
      .min(2, "Trop court !")
      .max(500, "Trop long !")
      .matches(
        /^[A-Za-z0-9 !,;.?:]+$/,
        "Seuls les lettres, les chiffres, les espaces et les caractères spécifiques sont autorisés"
      )
      .required("Requis"),
  });
  const submitForm = async (
    values: MyFormValues,
    { setSubmitting }: FormikHelpers<MyFormValues>
  ) => {
    try {
      const response = await fetch(
        "https://itg-back-625046c3ea20.herokuapp.com/",
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
      <Article
        className="py-24 md:w-3/5"
        children1={
          <Heading
            title="Contactez-moi"
            level="h2"
            className="md:text-7xl text-5xl font-extralight uppercase tracking-wide"
          />
        }
        children2={
          <>
            <Paragraphe
              className=""
              children="Vous avez une question, un projet ou une idée ? N'hésitez pas à me contacter via le formulaire ci-dessous. Je vous répondrai dans les plus brefs délais."
            />
          </>
        }
      />
      <hr />
      {formSubmitted ? (
        <>
          <Paragraphe
            className="text-center py-24"
            children={
              <>
                <>Votre message a bien été envoyé.</>
                <br /> Merci !
              </>
            }
          />
        </>
      ) : (
        <>
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
              <Form className="md:w-3/5 lg:w-2/5 mx-auto py-24">
                <section className="grid md:grid-cols-2  grid-rows-3 gap-8 py-8">
                  <label className="relative">
                    <Field
                      name="nom"
                      placeholder="Nom"
                      className={`bg-zinc-800 border-b-[1px] py-2 uppercase focus:outline-none ${
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
                  <label className="relative md:place-self-end">
                    <Field
                      name="prenom"
                      placeholder="Prénom"
                      className={`bg-zinc-800 border-b-[1px] py-2 uppercase focus:outline-none ${
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
                      className={`bg-zinc-800 border-b-[1px] py-2 uppercase focus:outline-none ${
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
                  <label className="relative md:place-self-end">
                    <Field
                      name="entreprise"
                      placeholder="Entreprise"
                      className={`bg-zinc-800 border-b-[1px] py-2 uppercase focus:outline-none ${
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
                      placeholder="Sujet"
                      className={`bg-zinc-800 border-b-[1px] py-2 uppercase focus:outline-none ${
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
                <section className="flex flex-col gap-y-8">
                  <label className="relative">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      className={`bg-zinc-800 border-b-[1px] py-2 uppercase focus:outline-none w-full ${
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
                  <button
                    type="submit"
                    className="uppercase w-full bg-neutral-50 text-zinc-800 flex justify-center py-2 hover:bg-fuchsia-700 hover:text-neutral-50 transition-colors"
                  >
                    Envoyer
                  </button>
                </section>
              </Form>
            )}
          </Formik>
          {/*</ReCAPTCHA>*/}
        </>
      )}
    </>
  );
};

export default Contactpage;
