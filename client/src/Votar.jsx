import React, { useEffect, useState } from "react";

function Votar() {
  const [votaciones, setVotaciones] = useState([]);
  const [candidatos, setCandidatos] = useState([]);
  const [idVotacion, setIdVotacion] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const cargarVotaciones = async () => {
      const res = await fetch("http://localhost:3001/api/votaciones/activas", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await res.json();
      setVotaciones(data);
    };
    cargarVotaciones();
  }, []);

  const cargarCandidatos = async (id) => {
    setIdVotacion(id);
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:3001/api/candidatos/${id}`, {
      headers: { "Authorization": `Bearer ${token}` },
    });
    const data = await res.json();
    setCandidatos(data);
  };

const enviarVoto = async (id_candidato) => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3001/api/votaciones/votar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      id_votacion: idVotacion, // seleccionada en el frontend
      id_candidato,            // candidato elegido
    }),
  });

  const data = await response.json();
  alert(data.message);
};

  return (
    <><div>
      <h2>Votaciones activas</h2>
      {votaciones.map((v) => (
        <div key={v.id}>
          <h3>{v.titulo}</h3>
          <p>{v.descripcion}</p>
          <button onClick={() => cargarCandidatos(v.id)}>Ver candidatos</button>
        </div>
      ))}

      {candidatos.length > 0 && (
        <div>
          <h3>Candidatos</h3>
          {candidatos.map((c) => (
            <div key={c.id}>
              <img src={`http://localhost:3001${c.foto_url}`} alt={c.nombre} width="100" />
              <p><b>{c.nombre}</b> - {c.partido}</p>
              <p><i>{c.eslogan}</i></p>
              <button onClick={() => enviarVoto(c.id)}>Votar por {c.nombre}</button>
            </div>
          ))}
        </div>
      )}
    </div>    
          </>

    
  );
}

export default Votar;
