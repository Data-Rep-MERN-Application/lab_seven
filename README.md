# Mongo/MERN Data Representation and Querying

The following exercises focus on utilizing MongoDB within a MERN stack.

### Instructions

1. **Commit and push each solution to GitHub after completing an exercise**
  

2. **React Application Setup**
   - If you haven’t completed the previous lab, clone the React application from GitHub:
     ```bash
     git clone https://github.com/Data-Rep-MERN-Application/lab_six
     ```
   - Install project dependencies:
     ```bash
     npm install
     ```

3. **MongoDB Setup**

   NoSQL is a type of database that provides a flexible and scalable alternative to traditional relational databases. Unlike SQL databases, which rely on tables and structured schemas, NoSQL databases store data in various formats, such as documents, key-value pairs, graphs, or wide-column stores. This flexibility makes NoSQL databases ideal for handling large volumes of unstructured or semi-structured data and allows for more dynamic scaling, especially for applications with rapidly changing data needs.

MongoDB is a popular NoSQL database known for its document-based storage model. Rather than using rows and tables, MongoDB stores data in JSON-like documents, where each document is a self-contained object with key-value pairs. This model is both flexible and powerful, allowing for complex, nested data structures and rapid data retrieval. MongoDB’s scalability and ease of use make it well-suited for modern web applications, especially those built with the MERN stack (MongoDB, Express, React, Node.js).

   - (a) Create a free MongoDB account and cluster at [MongoDB Atlas](https://www.mongodb.com/).
   - (b) Allow all IP addresses to connect.
   - (c) Create a simple user (e.g., `admin` with password `admin`) for database access.

5. **Database Connection with Mongoose**

   Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution for modeling application data, allowing developers to enforce structure, handle data relationships, and perform CRUD operations (Create, Read, Update, Delete) more easily. By defining models for each data type, Mongoose ensures data consistency and helps simplify database interactions.
   - Install the Mongoose library:
     ```bash
     npm install mongoose
     ```
   - Connect to MongoDB in `server.js`:
     ```javascript
     const mongoose = require('mongoose');
     mongoose.connect('mongodb+srv://admin:admin@martinscluster.mongodb.net/MyFirstDB', { useNewUrlParser: true, useUnifiedTopology: true });
     ```

6. **Create a Data Model**
   - Define a Mongoose schema for a "Movie" object:
     ```javascript
     const movieSchema = new mongoose.Schema({
       title: String,
       year: String,
       poster: String
     });
     const Movie = mongoose.model('Movie', movieSchema);
     ```

7. **Add Data to MongoDB**
   - Create a method to add new movie records:
     ```javascript
     app.post('/api/movies', (req, res) => {
       Movie.create({
         title: req.body.title,
         year: req.body.year,
         poster: req.body.poster
       })
       .then(() => res.send('Data received'))
       .catch(() => res.send('Data not received'));
     });
     ```

8. **Retrieve All Data**
   - Implement a method to fetch all movie records:
     ```javascript
     app.get('/api/movies', async (req, res) => {
       const movies = await Movie.find({});
       res.json(movies);
     });
     ```

9. **Retrieve Data by ID**
   - Create a method to retrieve a specific movie by its ID:
     ```javascript
     app.get('/api/movie/:id', async (req, res) => {
       const movie = await Movie.findById(req.params.id);
       res.send(movie);
     });
     ```
