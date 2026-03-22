    function renderRatings() {
      document.querySelectorAll(".rating-group").forEach(group => {
        const name = group.dataset.rating;
        group.innerHTML = "";

        for (let i = 1; i <= 5; i++) {
          const label = document.createElement("label");
          label.innerHTML = `
            <input type="radio" name="${name}" value="${i}">
            <span>${i}</span>
          `;
          group.appendChild(label);
        }
      });
    }

    function getRatingValue(name) {
      const checked = document.querySelector(`input[name="${name}"]:checked`);
      return checked ? parseInt(checked.value, 10) : null;
    }

    function textoNota(nota) {
      const mapa = {
        1: "muy bajo.",
        2: "bajo.",
        3: "correcto.",
        4: "bueno.",
        5: "nativo."
      };
      return mapa[nota] || "";//vacio o lo quieres que lean
    }

    function construirResumen() {
      const frances = textoNota(getRatingValue("genFrances"));
      const ingles = textoNota(getRatingValue("genIngles"));
      const aleman = textoNota(getRatingValue("genAleman"));

      return `Mi nivel de Francés es ${frances}
Mi nivel de Ingles es ${ingles}
Mi nivel de Aleman es ${aleman}`;
    }

   

    function actualizarResumen() {
      document.getElementById("resumen").textContent = construirResumen();
      document.getElementById("resumen-comentarios").textContent = construirResumenComentarios();
    }

    document.addEventListener("change", actualizarResumen);
    document.addEventListener("input", actualizarResumen);

    renderRatings();
    actualizarResumen();