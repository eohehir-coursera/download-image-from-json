# Download Images defined in an array of JSON Objects

This handy little tool was made to solve a problem—I needed to download multiple images defined in an array and rename them.

## Usage

Create a folder named `images/` and a file named `input.js`. The inside of your input file should look something like this:


```
module.exports = [
  {
    name: 'John Doe',
    photoUrl: 'https://example.jpg'
  },
  ...
]
```


Make sure to run `yarn` to download necessary dependencies.

Once that's done, navigate to the root folder of this project and run `node index.js`.

Images will appear in your `images/` folder. Enjoy!
