// ==========================================================================
// Basejump.Client Fixtures
// ==========================================================================

require('core') ;

Basejump.FIXTURES = Basejump.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  { guid: 1,
   type: 'Client',
   firstname: "Peter",
   lastname: "Pan",
   phone: '0412345678'
  },

  { guid: 2,
   type: 'Client',
   firstname: "Dwight",
   lastname: "Schrute",
    phone: '0409876543'
  },

  { guid: 3,
   type: 'Client',
   firstname: "Jim",
   lastname: "Halpert",
    phone: '0465748392'
  },
  
  { guid: 4,
    type: 'Client',
    firstname: "Pam",
    lastname: "Beesly"
  },
  
  { guid: 5,
    type: 'Client',
    firstname: "Ryan",
    lastname: "Howard"
  }

]);
