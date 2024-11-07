# Mongo/MERN Data Representation and Querying

The following exercises focus on utilizing MongoDB within a MERN stack.

### Instructions

1. **Create a Git Repository**
   - Initialize a Git repository for your answers to this problem sheet.
   - Commit and push each solution to GitHub after completing an exercise.

   ```bash
   mkdir answers-curl
   cd answers-curl
   touch README.md
   git init
   git add .
   git commit -m "Initial commit"
   ```

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
   - (a) Create a free MongoDB account and cluster at [MongoDB Atlas](https://www.mongodb.com/).
   - (b) Allow all IP addresses to connect.
   - (c) Create a simple user (e.g., `admin` with password `admin`) for database access.

4. **Database Connection with Mongoose**
   - Install the Mongoose library:
     ```bash
     npm install mongoose
     ```
   - Connect to MongoDB in `server.js`:
     ```javascript
     const mongoose = require('mongoose');
     mongoose.connect('mongodb+srv://admin:admin@martinscluster.mongodb.net/MyFirstDB', { useNewUrlParser: true, useUnifiedTopology: true });
     ```

5. **Create a Data Model**
   - Define a Mongoose schema for a "Movie" object:
     ```javascript
     const movieSchema = new mongoose.Schema({
       title: String,
       year: String,
       poster: String
     });
     const Movie = mongoose.model('Movie', movieSchema);
     ```

6. **Add Data to MongoDB**
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

7. **Retrieve All Data**
   - Implement a method to fetch all movie records:
     ```javascript
     app.get('/api/movies', async (req, res) => {
       const movies = await Movie.find({});
       res.json(movies);
     });
     ```

8. **Retrieve Data by ID**
   - Create a method to retrieve a specific movie by its ID:
     ```javascript
     app.get('/api/movie/:id', async (req, res) => {
       const movie = await Movie.findById(req.params.id);
       res.send(movie);
     });
     ```
