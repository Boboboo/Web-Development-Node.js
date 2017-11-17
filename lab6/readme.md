### JSON Routes</br>
For this lab, you will create a simple server that will represent the same data that you created in lab 5 by sending JSON down through API calls.</br>
For this lab, you will not need to use a database. You can store your data right in your routes.</br>

#### Your routes</br>
`/about`</br>
This route will return the following JSON:</br>
```
{
  "name": "Your Name",
  "biography": "2 biography paragraphs separated by a new line character.",
  "favoriteShows": ["array", "of", "favorite", "shows"],
  "hobbies": ["array", "of", "hobbies"]
}
```
`/story`</br>
This route will return the following JSON:</br>
```
{
  "storyTitle": "Story Title",
  "story": "Your story"
}
```
`/education`</br>
This route will return the following JSON:</br>
```
[
    {
      "schoolName": "First School Name",
      "degree": "First School Degree",
      "favoriteClass": "Favorite class in school",
      "favoriteMemory": "A memorable memory from your time in that school"
    },
    {
      "schoolName": "Second School Name",
      "degree": "Second School Degree",
      "favoriteClass": "Favorite class in school",
      "favoriteMemory": "A memorable memory from your time in that school"
    }
]
```

#### Packages you will use:</br>
* You will use the `express` package as your server.</br>
* You can read up on [express](http://expressjs.com/), on its home page. Specifically, you may find the API Guide section on [requests](http://expressjs.com/en/4x/api.html#req) useful.</br>
* You may use the [lecture 4 code](https://github.com/Boboboo/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_04) as a guide.</br>
* You may use the [lecture 5 code](https://github.com/philbarresi/cs-546-fun-places-in-nyc) as a guide.</br>
* You may use the [lecture 6 code](https://github.com/Boboboo/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_06) as a guide.</br>
* You must save all dependencies to your package.json file.</br>

#### Requirements</br>
* You must not submit your node_modules folder.</br>
* You must remember to save your dependencies to your package.json folder.</br>
* You must do basic error checking in each function.</br>
* Check for arguments existing and of proper type.</br>
* Throw if anything is out of bounds (ie, trying to perform an incalculable math operation or accessing data that does not exist).</br>
* If a function should return a promise, instead of throwing you should return a rejected promise.</br>
* You must remember to update your package.json file to set app.js as your starting script!</br>
* You must submit a zip, rar, tar.gz, or .7z archive or you will lose points, named in the followign format: `LastName_FirstName_CS546_SECTION.zip`(or, whatever the file extension may be). You will lose points for not submitting an archive.</br>
