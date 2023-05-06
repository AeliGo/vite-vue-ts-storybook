import "~module/@mdi/font/css/materialdesignicons.css";
import "~module/bulma/css/bulma.css";
import "~module/@fortawesome/fontawesome-free/css/all.css"; // Import the Font Awesome CSS

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
