// ==========================================================================
// Basejump.MasterController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Basejump.masterController = SC.ArrayController.create(
/** @scope Basejump.masterController */ {
  
  loggedInUser: null,
  
  users: null,
  
  usersObserver: function() {
    var u = this.get('users') ;
    if (u != null && u.records() != null) this.set("loggedInUser", u.records().first())
  }.observes('users'),

  sideBarVisible: YES,

  sideBarVisibleObserver: function() {
  //  SC.page.workspace.sidebar.set('isCollapsed', this.get('sideBarVisible'))
    SC.page.workspace.layout() ; // update layout for splitview.
  }.observes('sideBarVisible')

}) ;
