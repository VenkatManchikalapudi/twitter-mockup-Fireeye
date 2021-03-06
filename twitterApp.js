var twitterApp = angular.module('twitterApp', []);
twitterApp.controller('twitterCtrl', ['$scope', function($scope){
  $scope.Donald = {
    name: "Donald",
    stats: {
      TWEETS: '30M',
      FOLLOWING: 45,
      FOLLOWERS: '5M'
    },
    timeline: [
        { 
          image: "someImage",
          name: "nameOne",
          timeAgo: "4h ago",
          tweet: "This is tweet one Donald"
        },
         { 
          image: "someImage",
          name: "nameTwo",
          timeAgo: "6h ago",
          tweet: "This is tweet two Donald"
        },
         { 
          image: "someImage",
          name: "nameThree",
          timeAgo: "9h ago",
          tweet: "This is tweet three Donald"
        },
        { 
          image: "someImage",
          name: "nameFour",
          timeAgo: "14h ago",
          tweet: "This is tweet four Donald"
        },
         { 
          image: "someImage",
          name: "nameFive",
          timeAgo: "16h ago",
          tweet: "This is tweet five Donald"
        },
         { 
          image: "someImage",
          name: "nameSix",
          timeAgo: "19h ago six Donald",
          tweet: "This is tweet six Donald"
        }
      ]
    };
    $scope.Melania = {
      name: "Melania",
      stats: {
        TWEETS: '5M',
        FOLLOWING: 400,
        FOLLOWERS: '1M'
      },
      timeline: [
          { 
            image: "someImage",
            name: "nameOne",
            timeAgo: "4h ago",
            tweet: "This is tweet one Melania"
          },
           { 
            image: "someImage",
            name: "nameTwo",
            timeAgo: "6h ago",
            tweet: "This is tweet two Melania"
          },
           { 
            image: "someImage",
            name: "nameThree",
            timeAgo: "9h ago",
            tweet: "This is tweet three Melania"
          },
          { 
            image: "someImage",
            name: "nameFour",
            timeAgo: "14h ago",
            tweet: "This is tweet one Melania"
          },
           { 
            image: "someImage",
            name: "nameFive",
            timeAgo: "16h ago",
            tweet: "This is tweet two Melania"
          },
           { 
            image: "someImage",
            name: "nameSix",
            timeAgo: "19h ago",
            tweet: "This is tweet three Melania"
          }
        ]
    };
    $scope.user = $scope.Donald;
    $scope.trends = [
        {
          trendText: "trendOne",
          tweetCount: "11k tweets"
        },
        {
          trendText: "trendTwo",
          tweetCount: "5k tweets"
        },
        {
          trendText: "trendThree",
          tweetCount: "3.1k tweets"
        },
        {
          trendText: "trendFour",
          tweetCount: "2.2k tweets"
        }
      ];
    $scope.newTweet = "compose new Tweet";  
    $scope.addNewTweet = function(e){
      if (e.keyCode == 13) {
        $scope.user.timeline.unshift({
          image: "someImage",
          name: $scope.user.name,
          timeAgo: "just now",
          tweet: $scope.newTweet
        });
         $scope.newTweet = "compose new Tweet";
      }
    };
    
    $scope.focusForTweet = function(){
      if($scope.newTweet === "compose new Tweet"){
        $scope.newTweet = "";
      }
    };
    
    $scope.blurForTweet = function(){
      if($scope.newTweet === ""){
        $scope.newTweet = "compose new Tweet";
      }
    };
    
    $scope.switchUser = function(){
      if($scope.user.name === "Melania"){
        $scope.user = $scope.Donald;
      }else{
        $scope.user = $scope.Melania;
      }
    }
    
}]);

