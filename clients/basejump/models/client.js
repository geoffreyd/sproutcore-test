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
  
//  dataSource: Basejump.server,
//  resourceURL: "data",
//  defaultView: "_view/clients/by_lastname",
  
  properties: ['type', 'firstName', 'lastName'],

  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].compact().join(' ');
  }.property('firstName', 'lastName'),
  
  icon: 'sc-icon-user-16'

}) ;
