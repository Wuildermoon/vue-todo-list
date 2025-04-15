module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-todo-list/" // Asegúrate de que coincida con el nombre de tu repositorio en GitHub Pages
      : "/",
};
