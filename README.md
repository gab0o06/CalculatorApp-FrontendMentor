# 🧮 Multi-Theme Calculator App - React & TypeScript

Una calculadora web interactiva y responsiva que permite realizar operaciones matemáticas estándar bajo una interfaz personalizable de tres temas visuales distintos. El proyecto se desarrolló utilizando React y Vite, enfocándose en la gestión estructurada del estado, lógica aritmética precisa y persistencia de preferencias de usuario.

🎯 **Demo en Vivo:** [Visita la aplicación desplegada](calculatorapp-gab0o06.netlify.app)

---

## 🛠️ Stack Tecnológico

* **Core:** React (Vite)
* **Tipado:** TypeScript
* **Estilos:** CSS3 Puro (Custom Properties, Flexbox & CSS Grid)
* **Almacenamiento:** Web Storage API (LocalStorage)

---

## 🚀 Características Clave y Desafíos Técnicos

* **Motor Aritmético Reactivo:** Gestión de estados en React para controlar las entradas numéricas, operaciones en cadena, borrado de caracteres (*backspace*) y reinicio total del sistema con precisión matemática.
* **Sistema de Temas Dinámico (Theming Engine):** Arquitectura visual que conmuta de forma fluida entre tres temas estéticos (Oscuro, Claro y de Alto Contraste) inyectando clases directamente en el cuerpo del DOM.
* **Persistencia de Preferencias (UX Continua):** Integración con `localStorage` para recordar el último tema seleccionado por el usuario, evitando parpadeos de estilo o reconfiguraciones al recargar la página.
* **Diseño Elástico Adaptable:** Maquetación fluida mediante CSS Grid para la distribución simétrica del teclado numérico, asegurando que las zonas táctiles mantengan proporciones ideales en mobile y desktop.

---

## 📐 Criterio de Ingeniería y Estructura

### Conmutación Eficiente de Temas Visuales
Para resolver el cambio de estilos sin saturar el estado interno de React, se optó por un enfoque híbrido que manipula la lista de clases del `document.body` y almacena la sesión de manera síncrona en el almacenamiento local del navegador:

```typescript
const toggleTheme = (themeChange: string) => {
  const actualTheme = document.getElementById(document.body.classList[0]);
  const nextTheme = document.getElementById(themeChange);
  
  // Reemplazo atómico de clases en el DOM para evitar colisiones
  document.body.classList.replace(document.body.classList[0], themeChange);

  actualTheme?.classList.add("opacity");
  nextTheme?.classList.remove("opacity");
  
  // Persistencia de UX
  localStorage.setItem("theme", themeChange);
};
```
### Arquitectura de Layout con CSS Grid
La botonera de la calculadora se estructuró de manera declarativa con Grid, gestionando botones de ancho doble (como RESET e =) de forma limpia a través de la propiedad grid-column:
```css
.calculator-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.span-two {
  grid-column: span 2;
}
```

## 🔧 Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/gab0o06/nombre-del-repo.git](https://github.com/gab0o06/nombre-del-repo.git)
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor
   ```bash
   npm run dev
   ```
