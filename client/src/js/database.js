import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

 // Create a connection to the database
 const jateDb = await openDB('jate', 1);

 // Create a new transaction
 const tx = jateDb.transaction('jate', 'readwrite');

 // Open up the desired object store
 const store = tx.objectStore('jate');

 // Use the .add() method to store content in the database
 const request = store.put({ id: 1, content });

 // Get confirmation of the request
 const result = await request;
 console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

// Create a connection to the database
const jateDb = await openDB('jate', 1);

// Create a new transaction
const tx = jateDb.transaction('jate', 'readonly');

// Open up the desired object store
const store = tx.objectStore('jate');

// Use the .get() method to get the content from the database
const request = store.get(1);

// Get confirmation of the request
const result = await request;
result
  ? console.log('🚀 - data retrieved from the database', result.content)
  : console.log('🚀 - data not found in the database');

// Return the content if found, otherwise return null
return result?.content;
};

// Initialize the database
initdb();
