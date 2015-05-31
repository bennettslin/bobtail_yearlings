bobtailApp.controller("RosalindCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {

  $scope.songTitles = [
    "Young Rosalind at the World's Fair",
    "All the Peppy Paulinas",
    "Coffee in a Crucible",
    "Ruptures",
    "Photograph 51",
    "Unhatched",
    "Honest Jim",
    "Rosalind's Mosaic Path",
    "Last Labours",
    "Whale Fall"
  ]

  $scope.songUrls = [
    "01_young_rosalind",
    "02_peppy_paulinas",
    "03_coffee_crucible",
    "04_ruptures",
    "05_photograph_51",
    "06_unhatched",
    "07_honest_jim",
    "08_mosaic_path",
    "09_last_labours",
    "10_whale_fall"
  ]

  $scope.currentSongIndex = window.sessionStorage.rosalindSongIndex ? parseInt(window.sessionStorage.rosalindSongIndex) : 0;

  $scope.changeSong = function(index) {
    $scope.currentSongIndex = index;
    window.sessionStorage.rosalindSongIndex = index;
  }

  $scope.slides = [];
  $scope.addSlide = function(index) {
    $scope.slides.push({
      image: '/images/rosalind/0' + index + '.jpg'
    });
  };

  for (var i = 1; i <= 8; i++) {
    $scope.addSlide(i);
  }

}]);