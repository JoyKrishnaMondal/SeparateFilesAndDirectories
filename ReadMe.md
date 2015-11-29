#### SeparateFilesAndDirectories - tiny async module to get list of directories and files 

##### How to Use ( For LiveScript )

```livescript

{SeparateFilesAndDir} = require "SeparateFilesAndDirectories"


# We will be using LiveScript backcalls - 
# Look at LiveScript docs to learn what they are 
# (hint : alternative solution to using promises )

DirectoryToSearch = __dirname # __dirname is current Directory 

{Files,Directories} <-! SeparateFilesAndDirectories DirectoryToSearch

console.log Files

# => List of All Files in the current Directory (since we are using __dirname)

console.log Directories

# => List of All Directories in the current Directory (since we are using __dirname)

```

##### How to Use ( without LiveScript )



```livescript

SFandD = require "SeparateFilesAndDirectories"

DirectoryToSearch = __dirname # __dirname is current Directory 

SFandD.SeparateFilesAndDir DirectoryToSearch, (Output) ->

	console.log Output.Files

# => List of All Files in the current Directory (since we are using __dirname)

	console.log Output.Directories

# => List of All Directories in the current Directory (since we are using __dirname)

```


### Installation

```
npm install https://github.com/JoyKrishnaMondal/SeparateFilesAndDirectory.git

```

### Usecase

The module looks a directory and separates out the directories and files, so that you can do further operations. 

In particular its useful for file operations that act recurively on sub-directories. 

How the recursion is done is left to you - you write your recursive function and apply it to directories by passing it as a callback. 

Usually a sync version is fast enough - but I was curious as to the speed efficiency of a async version. 

One particular design decision I made was to run the callback *after* the current event loop is cleared.

### Note

I will not be maintaining this module unless people inform me they are using it. 

If you find any error or problems please raise it as an issue. 