interface AdsProps {
  children: React.ReactNode;
}

const Ads: React.FC<AdsProps> = ({ children }) => {
  return (
    <article className="text-6xl text-fuchsia-800 font-extralight text-slate-50 px-4 py-2 ">
      {children}
    </article>
  );
};

export default Ads;
