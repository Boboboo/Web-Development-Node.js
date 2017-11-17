### Palindromes</br>
For this lab, you will be using HTML, CSS, and JavaScript on the user's browser to make a simple palindrome checker!</br>

A palindrome is a phrase that is spelled the same way, backwards and forwards (ignoring spacing and punctuation). For example, the following phrases are palindromes:</br>
Madam</br>
Was it a cat I saw?</br>
He did, eh?</br>
Go hang a salami, I’m a lasagna hog.</br>
Poor Dan is in a droop</br>

You will create an express server with a single page at the location / that will provide the user with a web page to allow them to check if a phrase is a palindrome.</br>

#### The server</br>
Your server this week should not check for palindromes! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the palindrome checking page.</br>

#### The Page</br>
* Your page should have a few basic user interface elements:</br>
  * A header, with a heading, with at title for your page</br>
  * A footer with your name, student ID, and any other info about yourself you wish to include</br>
  * A list with all the terms you have checked so far; words that are palindromes will be colored in blue, while words that are not will be colored in red.</br>
* Your page will have a form with the following:</br>
  * A textarea</br>
  * A buttom to submit the form</br>
* Using JavaScript in your browser only, you will listen for the form's `submit` event; when the form is submitted, you will:</br>
  * Get the value of the textarea</br>
  * Lowercase the text</br>
  * Strip all non alphanumeric text; this includes spaces. For example, `Hello, 2 the world!` becomes `hello, 2 the world!` when lowercased and then `hello2theworld` when stripped of all non alphanumeric text</br>
  * Determine whether or not the text is a palindrome</br>
  * Add a list item to the list of terms you have checked. This list item should have a class of `is-palindrome` if it is a palindrome, or `not-palindrome` if it is not.</br>
* If the user does not have a value for the textarea when they submit, you should not continue the palindrome checking and instead should inform them of an error somehow.</br>

#### The style </br>
* You will style your page using at least 10 CSS selectors for general CSS styling. You will place the CSS in its own file.</br>
* You must style the `is-palindrome` class to have some sort of blue color (`#0000FF` is pure blue, you do not need to use that exact hex code), and `not-palindrome` to have some sort of red color (`#FF0000` is pure red, you do not need to use that exact hex code).</br>

#### References and Packages</br>
* Basic CSS info can easily be referenced in the [MDN CSS tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS) If you need a quick CSS referfence.</br>
* You will use the `express` package as your server.</br>
* You can read up on [express](http://expressjs.com/), on its home page. Specifically, you may find the API Guide section on [requests](http://expressjs.com/en/4x/api.html#req) useful.</br>
* You may use the [lecture 4 code](https://github.com/Boboboo/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_04) as a guide.</br>
* You may use the [lecture 5 code](https://github.com/philbarresi/cs-546-fun-places-in-nyc) as a guide.</br>
* You may use the [lecture 6 code](https://github.com/Boboboo/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_06) as a guide.</br>

#### Requirements</br>
* You must not submit your node_modules folder.</br> 
* You must remember to save your dependencies to your package.json folder.</br>
* You must do basic error checking in each function.</br>
  * Check for arguments existing and of proper type.</br>
  * Throw if anything is out of bounds (ie, trying to perform an incalculable math operation or accessing data that does not exist)</br>
  * If a function should return a promise, you should mark the method as an `async` function and return the value. Any promises you use inside of that, you should await to get their result values. If the promise should reject, ten you should throw inside of that promise in order to return a rejected promise automatically. Thrown exceptions will bubble up from any awaited call that throws as well, unless they are caught in the async method.</br>
* Throw if anything is out of bounds (ie, trying to perform an incalculable math operation or accessing data that does not exist).</br>
* If a function should return a promise, instead of throwing you should return a rejected promise.</br>
* You must remember to update your package.json file to set `app.js` as your starting script!</br>
* [Your HTML must be valid] (https://validator.w3.org/#validate_by_input). or you will lose points on the assignment.
* Your HTML must make semantical sense; usage of tags for the purpose of simply changing the style of elements (such as `i`, `b`, `font`, `center`, etc) will result in points being deducted; think in terms of content first, then style with your CSS.</br>
* You can be as creative as you'd like to fulfill front-end requirements; if an implementation is not explicitly stated, however you go about it is fine (provided the HTML is valid and semantical). Design is not a factor in this course.</br>
* Your client side JavaScript must be in its own file and referenced from the HTML accordingly.
* All inputs must be properly labeled!
