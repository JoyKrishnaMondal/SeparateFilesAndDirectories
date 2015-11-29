fs = require "fs"

_ = require "prelude-ls"

path = require 'path'

fs = require "GetRidOfError" |> require "fs"

{readdir,stat} = fs


Main = {}

# SeparateFilesAndDir(NameOfDir:String,CallBack:Function)

Main.SeparateFilesAndDir = (NameOfDir,CallBack) ->

	Files = []

	Directories = []

	ListOfFiles <-! readdir NameOfDir
	
	K = 0

	Size = ListOfFiles.length - 1

	for I in ListOfFiles


		StatObj <-! stat I

		if StatObj.isFile!

			Files.push ListOfFiles[K]

		else

			Directories.push ListOfFiles[K]

		if K is Size
				# Reason for setTimeOut doing this is to empty the event loop before running the next bit of calculations
				setTimeout -> CallBack (Files:Files,Directories:Directories),0
		K += 1

module.exports = Main
