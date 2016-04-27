# AngularJS_Learning

####Using Grunt to build a project, and live reload it when any changes are made. This project also utilizes 14 Grunt modules:

* **JSHint:** validates JS and points out errors
* **Time Grunt:** generates time statistics about how much time each task consumes
* **Jit Grunt:** enables us to include the necessary downloaded Grunt modules when needed for the tasks
* **Grunt Contrib Copy:** copys files to a distribution folder
* **Grunt Contrib Clean:** cleans the distribution folder when needed
* **Grunt usemin, concat, cssmin, uglify, filerev:** prepare the distribution folder
* **Grunt Contrib watch:** watches our files to allow for real time changes to be seen in our server
* **Grunt Contrib connnect:** Create a webserver

To install grunt packages, simply run:
```
npm install
```


To run the grunt processes use:
```
grunt serve
```



All packages have been included as devDependencies and you should not have to run any of the following lines of code:
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
