'use strict';

angular.module('users')
     .controller('UserController', [
        'userService', '$mdSidenav', '$mdBottomSheet', '$log',
        UserController
     ]);

function UserController( userService, $mdSidenav, $mdBottomSheet ) {

  var self = this;

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
         {  name: 'Phone'     ,   icon:   'phone'     ,     icon_url:   '../svg/phone.svg'     },
         {  name: 'Twitter'   ,   icon:   'twitter'   ,     icon_url:   '../svg/twitter.svg'   },
         {  name: 'Google'    ,   icon:   'google'    ,     icon_url:   '../svg/google.svg'    },
         {  name: 'Hangout'   ,   icon:   'hangouts'  ,     icon_url:   '../svg/hangouts.svg'  }
       ];
       this.performAction = function(action) {
         $mdBottomSheet.hide();
       }
     }
  }

}
