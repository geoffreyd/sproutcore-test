// ==========================================================================
// Basejump
// ==========================================================================

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
function main() {
  
  // Set some convinience variables.
  Basejump.controlTabs = SC.page.get('workspace').get('mainContent').get('controlTabs')

  // Step 1: Load Your Model Data
  // The default code here will load the fixtures you have defined.
  // Comment out the preload line and add something to refresh from the server
  // when you are ready to pull data from your server.
  Basejump.server.preload(Basejump.FIXTURES) ;

  // TODO: refresh() any collections you have created to get their records.
  // ex: Basejump.contacts.refresh() ;

  // Step 2: Instantiate Your Views
  Basejump.controlTabs.set('nowShowing', 'welcome')
  SC.page.awake() ;

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!

/*  Basejump.userCollection = Basejump.User.collection() ;
  Basejump.masterController.set('users', Basejump.userCollection)
  Basejump.server.listFor(Basejump.User, {view:"_view/users/by_username"}) ;
*/
//  Basejump.clientListController.set('content', Basejump.Client.collection({orderBy:"lastName"})) ;
//  Basejump.server.listFor(Basejump.Client) ;

  var c = Basejump.Client.collection();
  Basejump.clientListController.set('content', c);
  c.refresh();
  
  var b = Basejump.Booking.collection();
  Basejump.bookingListController.set('content', b);
  Basejump.bookingListController.set('orderBy', "date")
  b.refresh();
} ;
