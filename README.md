Various pseudo-random implementations packaged with helpful random utilities.

## Installation And Usage

### Node

Install `chancejs` with:

    npm install chancejs

And then use it like that:

    var chancejs = require('chancejs');

    var seed = new chancejs.LaggedFibonnacci(123);
    var random = new chancejs.Random(seed);

    random.get();


### Browser

Link the javascript:

    <script src='chancejs.js' type='text/javascript'></script>

And then use it like that:

    var seed = new chancejs.LaggedFibonnacci(123);
    var random = new chancejs.Random(seed);

    random.get()
