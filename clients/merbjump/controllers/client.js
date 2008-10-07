// ==========================================================================
// Basejump.ClientController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Basejump.clientController = SC.ObjectController.create(
/** @scope Basejump.clientController */ {

  recordType: Basejump.Client,
  dataSource: Basejump.server,
  allowsMultipleContent: false,

  contentBinding: 'Basejump.clientListController*selection',

  commitChangesImmediately: false,
  
  canSaveDoc: function() {
    return this.get('hasChanges') || this.get('newRecord')
  }.property('hasChanges', 'newRecord'),
  
  saveChanges: function() {
    this.commitChanges();
    this.get('content').first().commit();
  },
  
  deleteClient: function() {
    Basejump.clientListController.deleteClient() ;
  }

}) ;
