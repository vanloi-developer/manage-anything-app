import mongoose from 'mongoose';

const connectDatabase = () => {
    //mongodb+srv://vanloi420hz:<password>@cluster0.gh2eh.mongodb.net/manage-app
    const mongoDbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gh2eh.mongodb.net/manage-app`;

    mongoose.Promise = global.Promise;
    //Connecting to the database
    mongoose
        .connect(mongoDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log('Successful connected to the database');
        })
        .catch((error) => {
            console.log(`Could not connect to the database.\nExiting now.\nError: ${error}`);
            process.exit();
        });
};

export default connectDatabase;