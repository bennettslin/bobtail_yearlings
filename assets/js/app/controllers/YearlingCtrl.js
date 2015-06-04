bobtailApp.controller("YearlingCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {

  $scope.currentSongIndex = window.sessionStorage.yearlingSongIndex ? parseInt(window.sessionStorage.yearlingSongIndex) : 0;

  $scope.playSong = function(index) {
    $rootScope.playerAlbumTitle = "Yearling's Bobtail";
    $rootScope.playerSongTitle = (index + 1) + ". " + $scope.songTitles[index];
  }

  $scope.switchSong = function(direction) {

    // do not go beyond first and last songs
    var limitCondition = direction == -1 ?
      ($scope.currentSongIndex > 0) :
      ($scope.currentSongIndex < $scope.songTitles.length - 1);

    if (limitCondition) {
      $scope.currentSongIndex += direction;
      window.sessionStorage.rosalindSongIndex = $scope.currentSongIndex;
    }
  }

  $scope.songTitles = [
    "Didi",
    "Willy the Cocoa",
    "Dear Saskia",
    "Odin",
    "Ash Wednesday",
    "Pchelka's Starry Journey",
    "M",
    "Good Night, Sita",
    "Grasshoppers Lie Heavy",
    "Constellations!",
    "Look Back in Anger",
    "Garryowen",
    "On a Golden Cord",
    "Kyon?",
    "Uncanny Valley Boy",
    "Cremated",
    "Vegan Proclamation",
    "My 100,000th Dream"
  ]

  $scope.songUrls = [
    "01_didi",
    "02_willy_cocoa",
    "03_dear_saskia",
    "04_odin",
    "05_ash_wednesday",
    "06_pchelka_starry",
    "07_m",
    "08_good_night",
    "09_grasshoppers_lie",
    "10_constellations",
    "11_look_back",
    "12_garryowen",
    "13_golden_cord",
    "14_kyon",
    "15_uncanny_valley",
    "16_cremated",
    "17_vegan_proclamation",
    "18_100000th_dream"
  ]

  $scope.changeSong = function(index) {
    $scope.currentSongIndex = index;
    window.sessionStorage.yearlingSongIndex = index;
  }

}]);