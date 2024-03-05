import Hello from "../fr/Hello";

const Copyright = ({ author }) => {
  return <a href="https://www.linkedin.com/in/matthieugravy/">{author}</a>;
};

const Footer = () => {
  const signe = "©";
  const author = <Hello />;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 px-4 py-8 text-white uppercase font-extralight text-right">
      <article className="flex flex-row justify-end pe-2 flex-1 w-full">
        <p className="pe-2">
          {signe}
          {year}
        </p>
        <Copyright author={author} />
      </article>
    </footer>
  );
};

export default Footer;
