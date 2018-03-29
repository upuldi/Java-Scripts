'use strict';

function someCallBackDemo(callback) {
  console.log("executing function....");
  callback();
}


someCallBackDemo( () => {
  console.log("executing callback.....");
})
