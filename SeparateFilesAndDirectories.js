// Generated by LiveScript 1.4.0
(function(){
  var _, delimit, fs, readdir, stat, Main;
  _ = require("prelude-ls");
  delimit = require('path').sep;
  fs = require("GetRidOfError")(
  require("fs"));
  readdir = fs.readdir, stat = fs.stat;
  Main = {};
  Main.SeparateFilesAndDir = function(NameOfDir, CallBack){
    var Files, Directories;
    Files = [];
    Directories = [];
    return readdir(NameOfDir, function(ListOfFiles){
      var K, Size, i$, len$, I;
      K = 0;
      Size = ListOfFiles.length - 1;
      for (i$ = 0, len$ = ListOfFiles.length; i$ < len$; ++i$) {
        I = ListOfFiles[i$];
        stat(NameOfDir + delimit + I, fn$);
      }
      function fn$(StatObj){
        if (StatObj.isFile()) {
          Files.push(ListOfFiles[K]);
        } else {
          Directories.push(ListOfFiles[K]);
        }
        if (K === Size) {
          setTimeout(function(){
            return CallBack({
              Files: Files,
              Directories: Directories
            }, 0);
          });
        }
        K += 1;
      }
    });
  };
  module.exports = Main;
}).call(this);
