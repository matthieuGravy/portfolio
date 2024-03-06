const Contactpage = () => {
  return (
    <>
      <section className="py-24">Me contacter</section>
      <form action="" className="w-1/2 mx-auto">
        <section className="grid grid-cols-2 grid-rows-3 gap-8 py-8">
          <input
            className="bg-zinc-800 border-b-[1px] py-2 px-2 uppercase"
            type="text"
            placeholder="Nom"
          ></input>
          <input
            className="bg-zinc-800 border-b-[1px] py-2 px-2 uppercase"
            type="text"
            placeholder="Prénom"
          ></input>
          <input
            className="bg-zinc-800 border-b-[1px] py-2 px-2 uppercase"
            type="text"
            placeholder="Email"
          ></input>
          <input
            className="bg-zinc-800 border-b-[1px] py-2 px-2 uppercase row-start-3"
            type="text"
            placeholder="Sujet"
          ></input>
        </section>
        <textarea
          className="bg-zinc-800 border-b-[1px] py-2 px-2 uppercase row-start-4 col-span-2 w-full m-auto "
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Envoyer"
          className="uppercase block py-8"
        ></input>
      </form>
    </>
  );
};

export default Contactpage;
