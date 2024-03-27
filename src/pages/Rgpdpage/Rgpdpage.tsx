import Heading from "../../components/blocs/Heading";
import { BlocCenter, Ol, Li } from "../../components/blocs/Lawbloc";

const Rgpdpage = () => {
  return (
    <>
      <BlocCenter
        children={
          <>
            <Heading
              title={
                <>
                  RGPD -
                  <>
                    <br />
                  </>{" "}
                  Politique de confidentialité
                </>
              }
              level="h1"
              className="text-4xl lg:text-7xl font-extralight uppercase tracking-wide py-24 "
            />
            <hr />
            <Ol
              children={
                <>
                  <Li
                    titre="1. Identité du responsable du traitement"
                    paragraphe={
                      <>
                        Monsieur Matthieu Gravy <br />
                        matthieugravy@gmail.com
                      </>
                    }
                  />
                  <Li
                    titre="2. Finalités du traitement"
                    paragraphe={
                      <>
                        Les données collectées via le formulaire de contact de
                        sur le site web https://itsgravy.dev sont utilisées pour
                        : Faciliter la prise de contact entre l'utlisateur et le
                        responsable du site web en cas de problème sur le site
                        web. Mais tout aussi bien, démarrer une conversation et
                        échanger des informations avec les utilisateurs
                        intéressés par les services.
                      </>
                    }
                  />
                  <Li
                    titre="3. Données collectées"
                    paragraphe={
                      <>
                        Le formulaire de contact collecte les données suivantes
                        : nom, prénom, adresse, email, entreprise, sujet,
                        message.
                      </>
                    }
                  />
                  <Li
                    titre="4. Base légale du traitement"
                    paragraphe={
                      <>
                        Le traitement des données est basé sur le consentement
                        des utilisateurs. En soumettant le formulaire, les
                        utilisateurs acceptent que leurs données soient
                        collectées et utilisées pour les finalités décrites
                        ci-dessus.
                      </>
                    }
                  />
                  <Li
                    titre="5. Destinataires des données"
                    paragraphe={
                      <>
                        Les données collectées sont uniquement accessibles à
                        Monsieur Matthieu Gravy et ne sont pas communiquées à
                        des tiers.
                      </>
                    }
                  />
                  <Li
                    titre="6. Hébergement des données"
                    paragraphe={
                      <>
                        Les données sont stockées sur la plateforme MongoDB
                        Atlas, hébergée en France.
                      </>
                    }
                  />
                  <Li
                    titre="7. Durée de conservation des données"
                    paragraphe={
                      <>
                        Les données sont conservées pour une durée de 5 ans à
                        compter de la date de leur collecte.
                      </>
                    }
                  />
                  <Li
                    titre="8. Droits des utilisateurs"
                    paragraphe={
                      <>
                        Les utilisateurs disposent des droits suivants : Droit
                        d'accès aux données personnelles les concernant Droit de
                        rectification des données inexactes ou incomplètes Droit
                        d'effacement des données Droit de limitation du
                        traitement Droit d'opposition au traitement Droit à la
                        portabilité des données Pour exercer ces droits, les
                        utilisateurs peuvent contacter Monsieur Matthieu Gravy à
                        l'adresse email suivante : mathieugravy@gmail.com.
                      </>
                    }
                  />
                  <Li
                    titre="9. Sécurité des données"
                    paragraphe={
                      <>
                        Monsieur Matthieu Gravy met en œuvre des mesures de
                        sécurité techniques et organisationnelles appropriées
                        pour protéger les données personnelles contre les accès
                        non autorisés, la divulgation, l'altération ou la
                        destruction.
                      </>
                    }
                  />
                  <Li
                    titre="10. Contact"
                    paragraphe={
                      <>
                        Pour toute question relative à la protection des données
                        personnelles, les utilisateurs peuvent contacter
                        l'Autorité de Protection des Données (APD) : Site web :
                        https://dataprotectionauthority.be/ Adresse : Rue de la
                        Presse 35, 1000 Bruxelles Téléphone : +32 2 274 48 00
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

export default Rgpdpage;
