// ==========================================================================
// Basejump.Client
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Basejump.Client = SC.Record.extend(
/** @scope Basejump.Client.prototype */ {
  
  dataSource: Basejump.server,
  resourceURL: "rails/clients",
//  type: "client",
  
  properties: ['firstname', 'lastname'],

  fullName: function() {
    return [this.get('firstname'), this.get('lastname')].compact().join(' ');
  }.property('firstname', 'lastname'),
  
  icon: 'sc-icon-user-16'

}) ;
