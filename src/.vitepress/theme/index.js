import DefaultTheme from 'vitepress/theme'
import { JupyterBackend } from "@frthjf/jupyter-client";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$backend = new JupyterBackend();
  }
}