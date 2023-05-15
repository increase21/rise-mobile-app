# Instruction
1. Clone this repo and cd into the project directory
2. Run yarn install or npm install
3. cd into the ios directory and run pod install for iOS App
4. Run this command to start the project for android; yarn android or npm run android
4. Run this command to start the project for ios; yarn ios or npm run ios

## Project Challenge
1. The figma prototype does not link all the pages/screens in the design. This requires more time to figure how the screens are related in the design especially Plan Module

2. The postman collection for the API does not have endpoint to fund a plan or fund wallet.

3. As at the time of carrying out this task, the API endpoint to create an account did not recognize a valid year length. Even if you send a year of 1890, the endpoint will return "you must be 18 years and above to register". 

4. As at the time of carrying out this task, the endpoint to retrieve bank list was throwing "Whoops! Route doesn't exist" so there was no way to get bank list. Bank list screen was omited in the implementation

## Thought Process and Implementation
1. The onboarding flow for registration in the figma design is as follows; Create Account => Tell Us More About Your Self => Account Created Successfull => Home

But looking at the API endpoint for registration, email is required and must be unique else you get a conflict error. So a user who has password that screen and getting the error of account exist and going back to edit is a bad user experience. So the implementation is rather  Tell Us About You => Account Created Success => Set Pin =>Home

2. Fund Wallet screen as it is in the figma design has only transaction details. Usually, screen like this would have a wallet balance, ability to fund it and transaction there afterward. I added a small box that represents a wallet balance

3. Because the create account endpoint couldn't recognize 4 digits as a valid year, I had to prefix the year with 1 to allow registration. e.g 12000 for year 2000

3. Since the endpoint to retrieve bank list was throwing  "Whoops! Route doesn't exist". The screen was not added as there won't be any use for it.

## Appreciation
Thanks for reviewing my code 😃






