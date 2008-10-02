// ==========================================================================
// Basejump.User
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Basejump.User = SC.Record.extend(
/** @scope Basejump.User.prototype */ {

  dataSource: Basejump.server,
  resourceURL: "data",
  
  properties: ['type', 'userName']

}) ;
