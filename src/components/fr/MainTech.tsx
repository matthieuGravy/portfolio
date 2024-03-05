const MainTech = () => {
  const technologies = [
    { id: 1, name: "TS" },
    { id: 2, name: "React" },
    { id: 3, name: "Redux" },
    { id: 4, name: "React Router" },
    { id: 5, name: "Tailwind CSS" },
    { id: 6, name: "Express" },
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
