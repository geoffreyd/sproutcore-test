// ==========================================================================
// Basejump.ClientListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Basejump.clientListController = SC.CollectionController.create(
/** @scope Basejump.clientListController */ {

  allowsEmptySelection: false,
  allowsMultipleSelection: false,
  
  recordType: Basejump.Client,
  dataSource: Basejump.server,
  
  addClient: function() {
    var now = new Date();
    var client = Basejump.Client.newRecord({
      created: now.format('yyyy-MM-dd HH:mm:ss'),
      modified: now.format('yyyy-MM-dd HH:mm:ss')
    }, Basejump.server);
    
    // Set the selection of the list to 
    this.set('selection', client) ; 
    // Open the Client Details tab.
    Basejump.controlTabs.set('nowShowing', 'clients') ;
  },

  deleteClient: function() {
    if (!confirm('Are you sure you wish to remove this client?')) return ;
    var content = this.get('selection').first();
    content.destroy();
  }

}) ;
