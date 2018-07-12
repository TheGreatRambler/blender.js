var blendFile = "blender.blend";

var Module = {
  noInitialRun: true,
  print: function(text) {
    console.log('stdout: ' + text);
  },
  printErr: function(text) {
    console.log('stderr: ' + text);
  },
  arguments: ["blendFile"],
  onAbort: function() {
    console.log("Failed");
  },
  preRun: [function() {
    
  }]
};


// later


Module.run();
