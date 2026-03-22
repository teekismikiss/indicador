# [Indicador](https://teekismikiss.github.io/indicador)
Indicador de nivel de idiomas mediante un sistema de puntuación del 1 al 5 que genera un resumen automático de su nivel lingüístico. Y transformarlo en una  ** PWA Progressive Web App)**

La app está hecha solo con **HTML, CSS y JavaScript**, sin frameworks, y está pensada para aprender y practicar:

- Estructura accesible.
- Lógica de JavaScript con eventos.
- Estilo visual limpio.
- Patrón de PWA (manifest + service worker).

---
 indicador-idiomas
```markdown
- `index.html` – Página principal (HTML + PWA: manifest).
- `style.css` – Estilos visuales y diseño responsive.
- `evalu.js` – Lógica de ratings y resumen.
- `sw.js` – Service worker para caché/offline.
- `manifest.json` – Manifiesto de la PWA.
- `icons/` – Iconos 192px y 512px para la app instalable.
```
##  Funcionalidad clave
- `renderRatings()`: genera dinámicamente los radios del 1 al 5 para cada idioma.
- `getRatingValue()`: recupera el valor seleccionado.
- `textoNota()`: convierte la puntuación en texto (muy bajo, bajo, correcto, bueno, nativo).
- `construirResumen()`: genera el texto del resumen para Francés, Inglés y Alemán.
- `actualizarResumen()`: actualiza el contenido del `#resumen` al detectar cambios.
- `EventListener("change", ...)` y `("input", ...)`: hacen que el resumen se actualice en tiempo real.
- `sw.js`: registra un service worker que cachea los archivos principales para funcionar offline.



##  Este repositorio es parte de otro proyecto  aqui los objectivos de aprendizaje:
- Lógica de formularios y radios en JavaScript.
- Generación de contenido dinámico.
- Uso de eventos (`change`, `input`).
- Conceptos básicos de PWA: manifest, service worker y caché.
