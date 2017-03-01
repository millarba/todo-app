(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.setup = function () {

    $scope.tasks = [
                    {
                    text:"Clean house", 
                    completed: false
                    }, 
                    {
                    text: "Buy groceries",
                    completed: false
                    },
                    {
                    text: "Go to gym",
                    completed: false
                    }
                    ];
    };

    $scope.addTask = function(task){
      var task = {text: task,
                  completed: false};
      $scope.tasks.push(task);
      $scope.newTask = null;
    };

    $scope.completeTask = function(task){
      task.completed = !task.completed;
      
    };
    $scope.remainingTasks = function() {
    var counter = 0;
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === false ) {
          counter ++;
        }
      }
      return counter;
    };

    $scope.clearCompleted = function() {
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === true ) {
          $scope.tasks.splice;
        }
      }
    };

    $scope.completedAttribute = function (attribute) {
      $scope.attribute = attribute;
        
    };


    window.scope = $scope;
  });
}());