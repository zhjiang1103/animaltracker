#### Once you have successfully setup this template and initial database, the view will look like this:

![Initial View of the project](https://github.com/zhjiang1103/animaltracker/blob/main/Screen%20Shot%202023-11-15%20at%2011.41.50%20AM.png?raw=true)


## Step by Step instructions 

1. Go to your source directory in your terminal and run the command `git clone https://github.com/zhjiang1103/animaltracker.git NAMENEWDIRECTORY`

2. To clean the owner git out of the main directory, run the command `rm -rf .git`

3. Then while still within the main directory in your terminal, run the command `git init` to start your own git track 


4. Go to the server folder in the project (`cd server`) and run the command `npm install`

5. Inside your server folder, create an .env file with `touch .env`


6. Inside your server folder, open the file `.env.example` and copy the correct option for your configuation found there to your new .env file. 

Here is what your `.env` might look like:

```
DB_URI="postgresql://localhost/animaltracker"
``` 
For this template, the name of your db should be `animaltracker`.

7. Go to the client folder in the project (`cd .. and cd client`) and run the command `npm install`

8. If you want to run both servers using concurrently (which is already a npm dependency on the server) you can keep the script in the package.json in the server that reads `"dev": " concurrently 'npm start' 'cd .. && cd client && npm run dev' "`. If you run the command `npm run dev` from within your server, both the client and backend servers will start.

⚡ **Notes** ⚡  
* Please note that your backend server will run from `port 8000`, and your frontend React server will run from `port 5173` (the default Vite port).

⚙️ Links that you could need:

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md)


