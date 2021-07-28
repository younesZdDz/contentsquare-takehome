# How it works
First of all you need install the dependencies :
* `npm i` <br>

Then build the source code:
* `npm run build` <br>

Than run the code and pass your test data file as an argument, example:
* `node build/index.js './tests/test-a.txt'` 

If you want to test the program on other data files, put the file in `tests`  folder and pass the path as an argument like the example above.
# Explanation 
To solve the problem, I use two class enteties:
* LawnMower: Has the position and orientation of a lawn-mower, and contains the logic of moving the lawn-mower based on an instruction.
* Grid: Has the grid borders idices, and the list of lawn-mowers and their respective instructions (see the attribute `data` in the class). It also has the logic of moving the lawn-mowers sequentially (see method `runLawnMowers`)..

I also use a `utils`  folder, that contains a method which reads the test file and constructs the lawn-mowers and grid for us (see method `getGridFromInputFile`). 

The `@types` folder, has some basic types, like orientation which can only be: 'N', 'E', 'W', 'S'.

The `start` file runs the `getGridFromInputFile` and then `runLawnMowers` of the constructed grid.

The `index` is just our entry point.


# Tests
I wrote unit test for all our classes and methods using:
* [Chai](https://www.chaijs.com/)
* [Mocha](https://mochajs.org/)
* [Chai-spies](https://www.chaijs.com/plugins/chai-spies/)

Our tests include:
* LawnMower tests:
    - If the position after the move is outside the lawn, then the mower do not move
    - Test that lawn-mower position should add +1 to x position if orientation is E and instruction is F 
    - ...
* Grid tests:
    - Tests that the lawn-mowers are moved sequentially
    - Tests that the runLawnMowers updates the lawn-mowers position and orientation according to the instructions
* The start method tests:     
    - Tests if the correct lawn-mowers positions are printed to the console at the end of the simulation 
* The utils tests:
    - Tests that we read the files correctly

To run the tests :
* `npm run test` <br>

# Prospects
* We can  add an optimized algorithm that scans the instructions of a lawn-mower and optimize them before moving it. For example if the instructions has ` LLLL` we can skip these four steps because it returns the same position after.
* Add visual simulation to help explain the end results
* What happens if lawn-mower passes by another one (colide maybe) ? We should consider this use case.