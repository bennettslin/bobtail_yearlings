bobtailApp.controller("RosalindCtrl", ["$scope", "$rootScope", "$timeout", function($scope, $rootScope, $timeout) {

  $scope.dynamicPopover = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi officia modi quo id, laboriosam fuga optio enim nam voluptas repudiandae dolores necessitatibus dolorum veniam eius omnis sint amet quis earum!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Yay'
  };

  $scope.currentSongIndex = window.sessionStorage.rosalindSongIndex ? parseInt(window.sessionStorage.rosalindSongIndex) : 0;

  $scope.playSong = function(index) {
    $rootScope.playerAlbumTitle = "Rosalind Franklin and the Pepper's Ghost";
    $rootScope.playerSongTitle = (index + 1) + ". " + $scope.songTitles[index];
    $rootScope.playerUrl = "https://soundcloud.com/bennett-lin/" + $scope.playerSongUrls[index] + "?in=bennett-lin/sets/rosalind-franklin-meets-her-peppers-ghost"
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

  $scope.currentComicIndex = window.sessionStorage.rosalindComicIndex ?
    parseInt(window.sessionStorage.rosalindComicIndex) : 0;

  $scope.buttonsVisible = [false, false];

  $scope.switchComicPage = function(direction) {

    // do not go beyond first and last pages
    var limitCondition = direction == -1 ?
      ($scope.currentComicIndex > 0) :
      ($scope.currentComicIndex < $scope.slides.length - 2);

    if (limitCondition) {
      $scope.comicDirection = direction;

      // this delay gives the image time to switch classes
      // before the current index is changed
      $timeout(function() {

        $scope.currentComicIndex += direction;
        window.sessionStorage.rosalindComicIndex = $scope.currentComicIndex;
      })
    }
  }

  $scope.comicIndexIsCorrect = function(index) {
    return index == $scope.currentComicIndex;
  }

  $scope.mousePage = function(enter, index) {
    $scope.buttonsVisible[index] = enter;
  }

  $scope.buttonIsVisible = function(index) {
    return true;
    // return $scope.buttonsVisible[index];
  }

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

  $scope.playerSongUrls = [
    "01-young-rosalind-at-the",
    "02-all-the-peppy-paulinas",
    "03-coffee-in-a-crucible",
    "04-ruptures-unmastered",
    "05-photograph-51-unmastered",
    "06-unhatched-unmastered",
    "07-honest-jim-unmastered",
    "08-rosalinds-mosaic-path",
    "09-last-labours-unmastered",
    "10-whale-fall-unmastered"
  ]

  $scope.changeSong = function(index) {
    $scope.currentSongIndex = index;
    window.sessionStorage.rosalindSongIndex = index;
  }

  var slides = $scope.slides = [];
  $scope.addSlide = function(index) {
    slides.push({
      image: '/images/rosalind/0' + index + '.jpg'
    });
  };

  for (var i = 1; i <= 8; i++) {
    $scope.addSlide(i);
  }

}]);