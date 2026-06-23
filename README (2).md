# Primer Café ☕

Resumen matutino estilo editorial (Morning Brew / Axios) para México y LATAM.

Sitio estático — solo HTML, CSS y JS puro. No necesita build ni dependencias.

## Estructura

```
primer-cafe/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Cómo subirlo a GitHub (desde cero, sin Emergent)

1. Crea un repositorio nuevo en GitHub (botón verde "New" en github.com).
   - Nombre sugerido: `primer-cafe`
   - Déjalo público si quieres usar GitHub Pages gratis.
   - NO marques "Add a README" si vas a subir estos archivos ya hechos.

2. En tu computadora, descarga esta carpeta y, desde la terminal, dentro de la carpeta `primer-cafe`:

```bash
git init
git add .
git commit -m "Primer commit: sitio Primer Café"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/primer-cafe.git
git push -u origin main
```

(Sustituye `TU_USUARIO` por tu usuario real de GitHub.)

3. Activa GitHub Pages:
   - Ve al repo en GitHub → **Settings** → **Pages** (menú izquierdo).
   - En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
   - Guarda. En 1-2 minutos tu sitio estará en:
     `https://TU_USUARIO.github.io/primer-cafe/`

## Personalización rápida

- **Colores y tipografía:** todo está centralizado como variables CSS en `css/styles.css`, en el bloque `:root` al inicio del archivo.
- **Contenido de noticias:** por ahora el contenido es de ejemplo (placeholder), escrito directo en `index.html`. Cuando automatices las noticias, lo más fácil es:
  - Generar un archivo `noticias.json` con tu fuente de noticias.
  - Cargarlo con JavaScript (`fetch('noticias.json')`) y construir el HTML dinámicamente en `js/main.js`.
- **Formulario de suscripción:** ahora mismo solo muestra un mensaje de confirmación (sin backend real). Está marcado con un `TODO` en `js/main.js` — ahí conectas tu proveedor de email (Mailchimp, Brevo, ConvertKit, etc.) o tu propio backend.

## Notas de diseño

- Tipografías: Playfair Display (títulos), Chivo (cuerpo), IBM Plex Mono (metadata/fechas) — vía Google Fonts.
- Paleta: fondo papel `#FAF9F6`, texto carbón `#111111`, acento vermellón `#D92E15`.
- Look editorial con bordes finos, sin sombras ni cards redondeadas — estilo broadsheet/periódico.
- Totalmente responsive, con menú móvil funcional.
