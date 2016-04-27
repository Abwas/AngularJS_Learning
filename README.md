# AngularJS Simple Webpage utilizing Grunt and Gulp Modules

To install grunt and gulp packages, simply run:
```
npm install
```

###GRUNT:
**14 Grunt Modules used:**
* **JSHint:** validates JS and points out errors
* **Time Grunt:** generates time statistics about how much time each task consumes
* **Jit Grunt:** enables us to include the necessary downloaded Grunt modules when needed for the tasks
* **Grunt Contrib Copy:** copys files to a distribution folder
* **Grunt Contrib Clean:** cleans the distribution folder when needed
* **Grunt usemin, concat, cssmin, uglify, filerev:** prepare the distribution folder
* **Grunt Contrib watch:** watches our files to allow for real time changes to be seen in our server
* **Grunt Contrib connnect:** Create a webserver

To run the grunt processes use:
```
grunt
```
To run the grunt processes and set up a server which watches for changes use:
```
grunt serve
```


All Grunt packages have been included as devDependencies and you should not have to run any of the following lines of code:
```
bower install
 npm install -g grunt-cli
 npm install grunt --save-dev
 npm install grunt-contrib-jshint --save-dev
 npm install jshint-stylish --save-dev
 npm install time-grunt --save-dev
 npm install jit-grunt --save-dev
 npm install grunt-contrib-copy --save-dev
 npm install grunt-contrib-clean --save-dev
 npm install grunt-contrib-concat --save-dev
 npm install grunt-contrib-cssmin --save-dev
 npm install grunt-contrib-uglify --save-dev
 npm install grunt-filerev --save-dev
 npm install grunt-usemin --save-dev
 npm install grunt-contrib-watch --save-dev
 npm install grunt-contrib-connect --save-dev
```

###GULP:
**14 Gulp Modules used:**
* **JSHint, Stylish:** validates JS and points out errors... stylishly
* **Notify:** Allows notifications for the developer
* **Minify CSS:** Minifys your CSS
* **Uglify:**  Uglifys your JS (minimizes code and variables)
* **Usemin:** Necessary to minify css and then uglify
* **Imagemin:** Minify images
* **Rename:** Rename files
* **Concat:** Concatinate styles and scripts
* **Cache:** Required for minifying images
* **Changed:**
* **Rev:** Revision numbering for JS and CSS files
* **BroswerSync:** Live server running the webpage
* **del:** Deletes Files

To run the gulp processes use:
```
gulp
```
To run the gulp processes and set up a server which watches for changes use:
```
grunt watch
```

All Gulp packages have been included as devDependencies and you should not have to run any of the following lines of code:
```
npm install 
 jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
```
