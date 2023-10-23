//     Sediu in Iasi?			FALSE
// Tehnologii de care sunt interesati.			AI/Web/Gamedev/UI&UX/ML/Automotive/etc
// Ce Pachete au avut?(an + valoarea lor)			2020 + 1200eur / 2021 + 900 eur / etc
// Cum ne-au ajutat?(mentori,traineri)			Au facut tema pt Aria de Gamedev la FII CODE / Au adus jurati la FII CODE / etc
// Perioada Ideala de Contactare
export default function Card({ name }) {
  const inIasi = false;
  const technologies = ["AI", "Web", "Gamedev", "UI&UX", "ML", "Automotive"];
  const packets = ["2020 + 1200€", "2021 + 900€"];
  const helpingMethod = [
    "Au facut tema pt Aria de Gamedev la FII CODE",
    "Au adus jurati la FII CODE",
  ];
  return (
    <>
      <div className="p-4 border border-slate-300 rounded-xl shadow-black shadow-lg gap-5 my-4 hover:scale-105 transition-all duration-200">
        <div className="flex items-center">
          <img class="w-16 h-16 relative -left-12 rounded-full border" src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"></img>
          <h3 className="w-full text-lg text-center bg-slate-600 rounded-lg">{name}</h3>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="sediu"
            checked={inIasi}
            disabled
            name="Sediu in Iasi"
          />
          <label htmlFor="sediu">Sediu in Iasi</label>
          <List
            elements={technologies}
            title="Tehnologii de care sunt interesati"
          />
          <List
            elements={packets}
            title="Ce Pachete au avut?(an + valoarea lor)"
          />
          <List
            elements={helpingMethod}
            title="Cum ne-au ajutat?(mentori,traineri)"
          />
          <div>
            <h1>Perioada ideala: 6.9.2023</h1>
          </div>
        </div>
      </div>
    </>
  );
}
function List({ title, elements }) {
  return (
    <>
      <h6 className=" my-2">{title}</h6>
      <ul className="flex">
        {elements.map((t) => (
          <li className="mx-1 p-1 bg-slate-600  text-white rounded text-sm">
            {t}
          </li>
        ))}
      </ul>
    </>
  );
}
