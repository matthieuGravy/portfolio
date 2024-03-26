import Heading from "../../components/blocs/Heading";
import { BlocCenter, Ol, Li } from "../../components/blocs/Lawbloc";
import { NavLink } from "react-router-dom";
const Mensionspage = () => {
  return (
    <>
      <BlocCenter
        children={
          <>
            <Heading
              title={<>Mentions légales</>}
              level="h1"
              className="text-4xl lg:text-7xl font-extralight uppercase tracking-wide py-24 "
            />
            <hr />
            <Ol
              children={
                <>
                  <Li
                    titre="1. Editeur du site"
                    paragraphe={
                      <>
                        Matthieu Gravy, domicilié à l’adresse suivante : Rue
                        Longue Vie, 49 à 1050 Bruxelles.
                      </>
                    }
                  />
                  <Li
                    titre="2. Hébergeur du site"
                    paragraphe={
                      <>
                        Heroku Europe : (Heroku Inc., 650 7th Street, San
                        Francisco, CA) sur les serveurs d’Amazon Web Services
                        (AWS) Europe.
                        <br />
                        MongoDB Atlas (MongoDB Inc., 1633 Broadway, New York,
                        NY) sur les serveurs d’Amazon Web Services (AWS) Europe.
                        <br />
                        Render (Render, 77 Geary Street, Suite 500, San
                        Francisco, CA) sur les serveurs situés en Europe.
                      </>
                    }
                  />
                  <Li
                    titre="3. Responsable de la publication"
                    paragraphe={<>Matthieu Gravy</>}
                  />
                  <Li
                    titre="4. Propriété intellectuelle"
                    paragraphe={
                      <>
                        L’ensemble de ce site relève de la législation belge et
                        internationale sur le droit d’auteur et la propriété
                        intellectuelle. Tous les droits de reproduction sont
                        réservés, y compris pour les documents téléchargeables
                        et les représentations iconographiques et
                        photographiques.
                      </>
                    }
                  />
                  <Li
                    titre="5. Liens hypertextes"
                    paragraphe={
                      <>
                        Les liens hypertextes mis en place dans le cadre du
                        présent site web en direction d’autres ressources
                        présentes sur le réseau Internet, ne sauraient engager
                        la responsabilité de l’éditeur du site.
                      </>
                    }
                  />
                  <Li
                    titre="6. Cookies"
                    paragraphe={<>Ce site n'utilise pas de Cookies.</>}
                  />
                  <Li
                    titre="7. Conditions générales de confidentialité"
                    paragraphe={
                      <>
                        La politique de confidentialité de ce site est
                        accessible à l'adresse suivante :{" "}
                        <NavLink to="/rgpd">RGPD</NavLink>
                      </>
                    }
                  />
                </>
              }
            />
          </>
        }
      />
    </>
  );
};

export default Mensionspage;
