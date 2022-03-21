# Backend-Task-EgyptianID
# Backend API For ID Verification and Information Extractor
The main focus of this project is to verify that a given ID is valid and also to get all information out of it



## Libraries and Frameworks
### Backend

1. **NodeJS**
2. **Express**
3. **Cors**
4. **Body-Parser**
5. **Jest**

### Frontend

1. **ReactJS**
2. **Axios**

## How to run the project

### Backend Part
1. Create new folder nodejs-test
2. Open folder in vscode
3. Clone Backend Branch and rename the file using the following git command: "git clone --branch backend https://github.com/mohamedashraf990/Backend-Task-EgyptianID.git server"
5. Change directory of Terminal using cd server
6. run npm install in Terminal
7. Start Backend Project by node index.js

### Frontend Part
1. Open new terminal in the same folder nodejs-test
2. Clone Frontend Branch and rename the file using the following git command: "git clone --branch frontend https://github.com/mohamedashraf990/Backend-Task-EgyptianID.git client"
3. Change directory of Terminal using cd client
4. run npm install in Terminal
5. run npm start in the terminal

### Testing Part
1. Change directory of Terminal using cd server
2. run npm test

### API Documentation

**The API Response consists of**

1. birthCentury: 2 = *1900-1999* , 3 = *2000-2099*
2. gov: Government that the user was born in
3. gender
4. valid: checks the validity of a given ID
5. birthDate: gives birth-date in the format of dd-mm-yyyy


### How to use

1. Run backend project
2. Run frontend project
3. start by typing ID in the search-bar
4. if the id is valid you will get an API response and data will be displayed on the webpage
5. if the id is invalid you will get message stating that the id is not a valid one




