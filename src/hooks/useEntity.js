import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const useEntity = (entityType, entityId) => {
  const [entity, setEntity] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntity = async () => {
      try {
        const response = await axios.get(
          `https://apiproyecto-react.onrender.com/${entityType}/${entityId}`
        );
        setEntity(response.data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${entityType}:`, error);
        setLoading(false);
      }
    };

    fetchEntity();
  }, [entityType, entityId]);

  const handleChange = (e) => {
    setEntity({ ...entity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://apiproyecto-react.onrender.com/${entityType}/${entityId}`,
        entity
      );
      Swal.fire({
        title: "Buen trabajo!",
        text: `${entityType} Editado correctamente`,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/categoriasProductos");
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Hubo un error al editar ${entityType}!`,
      });
    }
  };

  return { entity, loading, handleChange, handleSubmit };
};
