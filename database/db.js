import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONGODB_URI =`mongodb://apurbag211:apurba465@ac-7bppxtt-shard-00-00.vlgkafs.mongodb.net:27017,ac-7bppxtt-shard-00-01.vlgkafs.mongodb.net:27017,ac-7bppxtt-shard-00-02.vlgkafs.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ii37h-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Filesharing`;
    try {
       await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
       console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;