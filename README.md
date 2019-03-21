# IE Code Challenge - Pacman Simulator

The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.

For Test data I have added PLACE 0,4,WEST as mentioned for origin. Please follow below steps to run the code.

# Local Setup

Requires yarn on your machine. You can install yarn with or without node. Different [ways to install](https://yarnpkg.com/en/docs/install) Yarn.


Requires Node on your machine. If you don't have node installed via Yarn. You can install it via:

```
brew install node
```

If you have Node already installed than follow below steps: 


- Clone the below repo
    ```
    git clone https://github.com/dharadhruv3/ie-pacman
    ```

- Go to the cloned directory and run
    ```
    yarn install
    ```
    to install all the dependencies for the project


# Run Locally
 
 To run the code locally. Navigate to the project directory via console and execute
 
 ```
 yarn start
 ```
 
 Open browser and hit
 
 ```
 localhost:8080
```
 
To build the application code.
 
 ```
 yarn build
 ```
 
# Technical Details

The solution can be done with Redux as well, but as per time limits I have chosen React Stack to demonstrate the full fledged client side application. For CSS a lot can be done but right now its simple modular CSS.

## Tech Stack Used

- React JS as view layer
- Webpack as buid tool
- Webpack Dev Server for local development
- Yarn as npm package manager
- Bable as ES6 & JSX transpiler


More things i would like to add to this when we make it into a production ready application:


### Tooling
- Added ES6 linting.