
## Step by Step instructions 


1. Go to your source directory in your terminal and run the command `git clone https://github.com/zhjiang1103/animaltracker.git NAMENEWDIRECTORY`

2. To clean the owner git out of the main directory, run the command `rm -rf .git`

3. Then while still within the main directory in your terminal, run the command `git init` to start your own git track 


4. Go to the server folder in the project (`cd server`) and run the command `npm install`

5. Inside your server folder, create an .env file with `touch .env`

⚠️ All these instructions should be inside your server folder ⚠️

6. There are two ways to restore the DB dump file the project already contains: 

A- If you have postgres set up postgres with an User:  
 * just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask for your password. 

B- If your initial configuration of postgres doesn't require a User:
* just run the command `psql -f db.sql`

7. Inside your server folder, open the file `.env.example` and copy the correct option for your configuation found there to your new .env file. 

Here is what your `.env` might look like:

```
DB_URI="postgresql://localhost/animaltracker"
``` 
For this template, the name of your db should be `animaltracker`.

8. Go to the client folder in the project (`cd .. and cd client`) and run the command `npm install`

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

⚡ Note: Using Vite we can avoid all the package deprecation warnings ⚡

9. If you want to run both servers using concurrently (which is already a npm dependency on the server) you can keep the script in the package.json in the server that reads `"dev": " concurrently 'npm start' 'cd .. && cd client && npm run dev' "`. If you run the command `npm run dev` from within your server, both the client and backend servers will start.

⚡ **Notes** ⚡  
* React requires **Node >= 14.0.0** & **npm >= 5.6**
* This template is using icons from `react-icons/io5` and `react-bootstrap` in the frontend. You can see all the frontend dependencies in the package.json on the `client` folder
* Please note that your backend server will run from `port 8000`, and your frontend React server will run from `port 5173` (the default Vite port).

* Confused about why use Vite? 🤔 → Check out the [Create a new React app with Vite](https://scrimba.com/articles/create-react-app-with-vite/)

⚙️ Links that you could need:

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md)


