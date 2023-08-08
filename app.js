const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri');

// console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank"
const collection_name = "accounts" //

const accountsCollection = client.db(dbname).collection("collection_name");

// Connect to Database
const connectToDataBase = async () => {
    try {
        await client.connect();
        console.log(`Connected to ${dbname} database successfully`);
    } catch (error) {
        console.log(error);
    }
}

const sampleAccounts = [
    {
        account_holder: "Ibrahim Traore",
        account_id: "MDB3456789",
        account_type: "checking",
        balance: "12987432",
        last_updated: new Date(),
    },
    {
        account_holder: "Ana Lovelace",
        account_id: "MDB3456745",
        account_type: "checking",
        balance: "56342",
        last_updated: new Date(),
    },
]

// const main = async () => {
//     try {
//         await connectToDatabase()
//         // insertOne method is used here to insert the sampleAccount document
//         let result = await accountsCollection.insertOne(sampleAccount)
//         console.log(`Inserted document: ${result.insertedId}`)
//     } catch (err) {
//         console.error(`Error inserting document: ${err}`)
//     } finally {
//         await client.close()
//     }
// }


// In this function, you insert a single document to Database
const main = async () => {
    try {
        await connectToDataBase()
        let result = await accountsCollection.insertMany(sampleAccounts)
        console.log(`Inserted ${result.insertedCount} documents`)
        console.log(result)
    } catch (err) {
        console.error(`Error inserting documents: ${err}`)
    } finally {
        await client.close()
    }
}

// Querying a document in MongoDB
// First we declare a variable to store the result of the query
const documentsToFind = { balance: { $gt: 4700 } }





// Run the main function 
main();