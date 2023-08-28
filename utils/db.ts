import mongoose, { ConnectOptions } from "mongoose";
let isConnected: boolean = false;
export const connectToBD: () => Promise<void> = async () => {
  // Configure mongoose pour que les requetes à la base de donnée se comporte de manière strict, ce qui veut dire que des avertissement seront emus lorsque des operations des recherches sont effectuer sans conditions ou que des mauvaises type de données sont entrer
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB Database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.DB_URI!, {
      dbName: "tasks",
      // POur indiquer à mongoose d'utiliser le nouveau systeme d'analyse des URL de connection de MONGODB
      useNewUrlParser: true,
      useUnifiedTopology: true, // Active la nouvelle logique de gestion de connexion dans MongoDB pour utiliser le nouveau moteur de surveillance du serveur.
    } as ConnectOptions);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
};
