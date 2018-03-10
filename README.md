# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start


Steps to setting up a new component:
1. create new file in compnent 
2. import react & component 
3. create class with render, return, & basic jsx
4. export default class
5. put together action creator in actions
6. create the function to interact with external api (provider/services in ionic/angular)
7. in action creator function return { TYPE, payload(result of data interaction) }
8. add a case in the reducers to catch new TYPE(data) and put into application level state
*9. in that TYPES case, return previos application state along with aditional data from the TYPE of action that was called
*10. the additional data that is returnred is available on action.payload.data
11. go back to component and CONNECT(react-redux) the action(creator)
12. connect is what allows the compnent to mapStateToProps & the action creator(has request data in the payload) which is what re-renders and displays data in the component






* Pertains to single object in collection

```
