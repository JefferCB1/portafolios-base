# Portafolio Base

Plantilla de portafolio para desarrolladores con **React 19 + Vite + Tailwind 4 + Three.js**.
Todo el contenido es de ejemplo (mock): la idea es iterar juntos el diseño y luego cada uno pone sus datos.

## Arrancar

```bash
npm install
npm run dev
```

Abre http://localhost:5173

> El archivo `.npmrc` activa `legacy-peer-deps` porque `@tailwindcss/vite` todavía no declara soporte para Vite 8.

## Dónde cambiar el contenido

Todo el texto, proyectos y enlaces están en **`src/data/portfolio.js`**:

| Exportación        | Qué controla                                        |
|--------------------|-----------------------------------------------------|
| `profile`          | Nombre, rol, frase del hero, foto, ubicación        |
| `marquee`          | Texto curvo que gira al final del hero              |
| `about`            | Sección "Sobre mí" y las tres tarjetas de stack     |
| `projectPreviews`  | Recuadros animados de la transición "Mis Proyectos" |
| `projects`         | Tarjetas de "Proyectos Destacados"                  |
| `contact`          | Textos del formulario y redes sociales              |

La foto se lee de `public/avatar.svg`: reemplázala por tu imagen y cambia `profile.avatar`.
Los logos 3D del hero están en `LOGOS` dentro de `src/components/HeroSection.jsx`.

## Estructura

```
src/
  data/portfolio.js          ← contenido (mock)
  components/
    HeroSection.jsx          ← hero + teclado 3D de logos
    AboutSection.jsx         ← bento "Sobre mí"
    ProjectScrollTransition.jsx
    ProjectsSection.jsx
    ContactSection.jsx       ← formulario (aún no envía: conectar Formspree/EmailJS)
    Particles.jsx, CurvedLoop.jsx, VariableProximity.jsx, ...
DESIGN.md                    ← sistema de diseño (colores, tipografía)
```

## Ideas pendientes

- [ ] Conectar el formulario de contacto (Formspree / EmailJS / Resend)
- [ ] Imágenes reales o capturas en las tarjetas de proyectos
- [ ] Enlaces de demo / código en cada proyecto (`demo`, `code`)
- [ ] Versión en inglés
