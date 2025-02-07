// Importamos los hooks useState y useEffect de React
import { useState, useEffect } from "react";

// Definimos el hook personalizado useFetch que recibe un parámetro 'links'
export const useFetch = (links) => {
  // Declaramos un estado 'data' con su función para actualizarlo 'setData', inicializado en null
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Utilizamos useEffect para ejecutar el código de fetch cuando 'links' cambie
  useEffect(() => {
    // Convertimos 'links' en un array si no lo es
    const fetchLinks = Array.isArray(links) ? links : [links];

    // Función asíncrona para realizar las peticiones
    const fetchData = async () => {
      try {
        // Hacemos fetch de todos los links en paralelo y convertimos las respuestas a JSON
        const results = await Promise.all(
          fetchLinks.map((link) =>
            fetch(link).then((response) => response.json())
          )
        );
        // Guardamos los resultados en el estado 'data'
        setData(Array.isArray(links) ? results : results[0]);
      } catch (err) {
        // En caso de error, lo guardamos en el estado 'error'
        setError(err);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [links]); // El efecto se ejecuta cada vez que 'links' cambie

  // Devolvemos el estado 'data' y 'error' para que puedan ser usados por el componente que use este hook
  return { data, error };
};
