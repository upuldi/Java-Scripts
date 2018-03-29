var devSettings = {
  serverConfig: "devserverconfig",
  serverName: "devServerName",
  envSpecificLogic: function() {
    console.log("Some DEV Specific logic....");
  }
}

var prodSettings = {
  serverConfig: "prodserverconfig",
  serverName: "prodServerName",
  envSpecificLogic: function() {
    console.log("Some PROD Specific logic....");
  }
}

var envSpecificLogicAndSettings = function(param) {
  console.log(param);
  console.log(this.serverConfig);
  console.log(this.serverName);
  this.envSpecificLogic();
}

//For DEV env
envSpecificLogicAndSettings.bind(devSettings)("something..");

//For PROD env
envSpecificLogicAndSettings.bind(prodSettings)("somethingElse");
