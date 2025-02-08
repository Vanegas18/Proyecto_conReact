import Swal from "sweetalert2";

export const useChangeState = () => {
  const handleChangeState = (estado) => {
    Swal.fire({
      title: "Estas seguro de cambiar el estado?",
      text: `El actuado actual es: ${estado}`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Cambiar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Estado cambiado!",
          text: `Su estado ha cambiado a ${estado}`,
          icon: "success",
        });
      }
    });
  };

  return handleChangeState;
};
