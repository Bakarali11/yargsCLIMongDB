exports.addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
    console.log(`Successfully added ${movieObj.title}`);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async (collection) => {
  try {
    console.log(await collection.find({}).toArray());
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (collection, updateObj) => {
  try {
    await collection.updateOne(
      { title: updateObj.title },
      { [updateObj.updateKey]: updateObj.updateValue }
    );
    console.log(`Successfully updated ${updateObj.title}`);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (collection, deleteObj) => {
  try {
    await collection.deleteOne({ title: deleteObj.title });
    console.log(`Successfully deleted ${deleteObj.title}`);
  } catch (error) {
    console.log(error);
  }
};
