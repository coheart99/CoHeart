import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const relationshipId = params.get("relationshipId");

    if (mode === "signup" && relationshipId) {
      alert(`Invitación aceptada. ID de relación: ${relationshipId}`);
      // Aquí puedes redirigir o guardar esa info en localStorage, etc.
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Procesando invitación...</h1>
      <p>Por favor espera un momento.</p>
    </div>
  );
};

export default Auth;
