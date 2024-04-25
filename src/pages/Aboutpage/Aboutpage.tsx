import ParallaxTextor from "../../components/blocs/ParallaxTextor";

const Aboutpage = () => {
  return (
    <>
      <main className="min-h-screen bg-zinc-100">
        <article>
          <p>
            I would like to inform you that this website is currently undergoing
            a redesign. I am actively working to improve your user experience
            and provide you with exciting new features.
          </p>
          <p>
            Thank you for your understanding and patience during this transition
            period.
          </p>
        </article>

        <section className="py-48">
          <ParallaxTextor />
        </section>
      </main>
    </>
  );
};

export default Aboutpage;
