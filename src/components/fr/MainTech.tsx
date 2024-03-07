const MainTech = () => {
  const technologies = [
    { id: 0, name: "JavaScript" },
    { id: 1, name: "TypeScript" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Tailwind CSS" },
    { id: 5, name: "Express" },
  ];

  return (
    <>
      <ul>
        {technologies.map((tech) => (
          <li className="uppercase " key={tech.id}>
            {tech.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainTech;
