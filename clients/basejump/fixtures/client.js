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
   firstName: "Peter",
   lastName: "Pan",
   phone: '0412345678',
   rev: '3'
  },

  { guid: 2,
    type: 'Client',
    firstName: "Dwight",
    lastName: "Schrute",
    phone: '0409876543',
    rev: '1'
  },

  { guid: 3,
   type: 'Client',
   firstName: "Jim",
   lastName: "Halpert",
    phone: '0465748392',
    rev: '1'
  },

  { guid: 4,
   type: 'Client',
   firstName: "Pam",
   lastName: "Beesly",
   rev: '1'
  },

  { guid: 5,
   type: 'Client',
   firstName: "Ryan",
   lastName: "Howard",
   rev: '1'
  }

]);
