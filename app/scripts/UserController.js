'use strict';

angular.module('users')
     .controller('UserController', [
        'userService',
        '$mdSidenav',
        '$mdBottomSheet',
        'envConfig',
        '$log',
        UserController
     ]);

function UserController( userService, $mdSidenav, $mdBottomSheet, envConfig ) {

  var self = this;
  var baseDir = envConfig.baseDir;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;
  self.share        = share;

  // Load all registered users

  userService
      .loadAllUsers()
      .then( function( users ) {
        self.users    = [].concat(users);
        self.selected = users[0];
      });

  /**
    * Select the current avatars
    * @param menuId
    */
   function selectUser ( user ) {
     self.selected =  user;
   }

   /**
     * Hide por Show the 'left' sideshow area
     */
    function toggleUsersList () {
      $mdSidenav('left').toggle();
    }


   /**
     * Show the bottom sheet
     */
    function share ( selectedUser ) {

      $mdBottomSheet.show({
        controller: UserSheetController,
        controllerAs: 'vm',
        templateUrl: 'views/bottomsheet.html',
        parent: angular.element(document.querySelector('#content'))
      })

      /**
       * Bottom Sheet controller for the Avatar Actions
       */
     function UserSheetController() {
       this.user = selectedUser;
       this.items = [
         {  name: 'Phone'     ,   icon:   'phone'     ,     icon_url:   baseDir + '/svg/phone.svg'     },
         {  name: 'Twitter'   ,   icon:   'twitter'   ,     icon_url:   baseDir + '/svg/twitter.svg'   },
         {  name: 'Google'    ,   icon:   'google'    ,     icon_url:   baseDir + '/svg/google.svg'    },
         {  name: 'Hangout'   ,   icon:   'hangouts'  ,     icon_url:   baseDir + '/svg/hangouts.svg'  }
       ];
       this.performAction = function(action) {
         $mdBottomSheet.hide();
       }
     }
  }

}
