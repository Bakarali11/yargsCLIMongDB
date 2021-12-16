const yargs = require("yargs");
const connection = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie");

const app = async (args) => {
  try {
    if (args.add) {
      const movieObj = { title: args.title, actor: args.actor };
      await connection(addMovie, movieObj);
    } else if (args.list) {
      await connection(listMovies);
    } else if (args.update) {
      const updateObj = {
        title: args.title,
        updateKey: args.key,
        updateValue: args.value,
      };
      await connection(updateMovie, updateObj);
    } else if (args.delete) {
      const deleteObj = { title: args.title };
      await connection(deleteMovie, deleteObj);
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
