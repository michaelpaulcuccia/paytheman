export const data = [
  {
    id: "JMM-001",
    name: {
      firstName: "John",
      middleName: "Michael",
      lastName: "Montgomery",
      aliases: [],
    },
    address: {
      street: "100 Main Street",
      city: "Abilene",
      state: "Texas",
      zip: "01234",
    },
    communication: {
      email: {
        primary: "jmm@mail.com",
        alt: ["johnymm@gmail.com"],
      },
      phone: {
        cell: "555-123-1234",
        home: "555-698-7412",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-001",
        debtor: {
          company: "General Hospital",
          companyID: "GH-001",
          address: {
            street: "100 Main Street",
            city: "Abilene",
            state: "Texas",
            zip: "01234",
          },
          contacts: [
            {
              name: "Stan Marsh",
              email: "stanmarsh@generalhospital.com",
              phone: "478-855-9632",
            },
          ],
          amountOriginallyOwed: 11000,
          dateOfOriginalDebt: "2023-01-27",
          contactWith: [
            {
              dateOfContact: "2024-09-13",

              offer: {
                amount: 2000,
                frequency: "monthly",
              },
              messages: [
                "Are you still interested in paying?",
                "Thank you for your response",
              ],
              response: ["I am looking into how to pay this"],
              sentiment: "neutral",
            },
            {
              dateOfContact: "2024-09-14",

              offer: {
                amount: 2000,
                frequency: "monthly",
              },
              messages: [
                "Are you still interested in paying?",
                "Thank you for your response. We look forward to working with you.",
              ],
              response: ["I am still looking into how to pay this"],
              sentiment: "neutral",
            },
          ],
        },
      },
    ],
  },
  {
    id: "AAJ-001",
    name: {
      firstName: "Alice",
      middleName: "Anne",
      lastName: "Johnson",
      aliases: ["A.J."],
    },
    address: {
      street: "200 Elm Street",
      city: "Houston",
      state: "Texas",
      zip: "02345",
    },
    communication: {
      email: {
        primary: "alice.johnson@mail.com",
        alt: ["alice.j@gmail.com"],
      },
      phone: {
        cell: "555-234-5678",
        home: "555-876-5432",
        alt: ["555-345-6789"],
      },
    },
    debts: [
      {
        debtId: "AAJ-DI-001",
        debtor: {
          company: "City Bank",
          companyID: "CB-002",
          address: {
            street: "200 Elm Street",
            city: "Houston",
            state: "Texas",
            zip: "02345",
          },
          contacts: [
            {
              name: "Bob Smith",
              email: "bobsmith@citybank.com",
              phone: "555-234-5678",
            },
          ],
          amountOriginallyOwed: 1500,
          dateOfOriginalDebt: "2023-02-15",
          contactWith: [
            {
              dateOfContact: "2024-08-20",

              offer: {
                amount: 1000,
                frequency: "bi-weekly",
              },
              messages: [
                "We need to discuss your payment options.",
                "Please let us know your preferred payment plan.",
              ],
              response: ["I can do bi-weekly payments."],
              sentiment: "neutral",
            },
          ],
        },
      },
    ],
  },
  {
    id: "MDL-001",
    name: {
      firstName: "Michael",
      middleName: "David",
      lastName: "Lee",
      aliases: [],
    },
    address: {
      street: "300 Oak Street",
      city: "Dallas",
      state: "Texas",
      zip: "03456",
    },
    communication: {
      email: {
        primary: "michael.lee@mail.com",
        alt: [],
      },
      phone: {
        cell: "555-345-6789",
        home: "555-987-6543",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "MDL-DI-001",
        debtor: {
          company: "Tech Solutions",
          companyID: "TS-003",
          address: {
            street: "300 Oak Street",
            city: "Dallas",
            state: "Texas",
            zip: "03456",
          },
          contacts: [
            {
              name: "Alice Cooper",
              email: "alice.cooper@techsolutions.com",
              phone: "555-345-6789",
            },
          ],
          amountOriginallyOwed: 3200,
          dateOfOriginalDebt: "2023-03-12",
          contactWith: [
            {
              dateOfContact: "2024-07-10",

              offer: {
                amount: 3000,
                frequency: "weekly",
              },
              messages: [
                "We need to set up a new payment arrangement.",
                "Please confirm your preferred payment frequency.",
              ],
              response: ["I prefer to pay weekly."],
              sentiment: "positive",
            },
            {
              dateOfContact: "2024-07-12",

              offer: {
                amount: 3000,
                frequency: "weekly",
              },
              messages: [
                "Are you ready to set up payments?",
                "We will have someone call you.",
              ],
              response: ["Yes.", "Thank you."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "EGW-001",
    name: {
      firstName: "Emma",
      middleName: "Grace",
      lastName: "Wilson",
      aliases: ["Em"],
    },
    address: {
      street: "400 Pine Street",
      city: "San Antonio",
      state: "Texas",
      zip: "04567",
    },
    communication: {
      email: {
        primary: "emma.wilson@mail.com",
        alt: ["emily.wilson@gmail.com"],
      },
      phone: {
        cell: "555-456-7890",
        home: "555-876-5432",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "EGW-DI-001",
        debtor: {
          company: "Retail Inc.",
          companyID: "RI-004",
          address: {
            street: "400 Pine Street",
            city: "San Antonio",
            state: "Texas",
            zip: "04567",
          },
          contacts: [
            {
              name: "John Doe",
              email: "johndoe@retailinc.com",
              phone: "555-456-7890",
            },
          ],
          amountOriginallyOwed: 2200,
          dateOfOriginalDebt: "2023-04-18",
          contactWith: [
            {
              dateOfContact: "2024-06-25",

              offer: {
                amount: 1500,
                frequency: "monthly",
              },
              messages: [
                "Your payment is overdue. Please contact us.",
                "We can offer a payment plan to help you manage this debt.",
              ],
              response: ["I will set up a monthly payment plan."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "DAB-001",
    name: {
      firstName: "David",
      middleName: "Alexander",
      lastName: "Brown",
      aliases: [],
    },
    address: {
      street: "500 Cedar Street",
      city: "Austin",
      state: "Texas",
      zip: "05678",
    },
    communication: {
      email: {
        primary: "david.brown@mail.com",
        alt: ["david.brown@gmail.com"],
      },
      phone: {
        cell: "555-567-8901",
        home: "555-234-5678",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "DAB-DI-001",
        debtor: {
          company: "Mortgage Co.",
          companyID: "MC-005",
          address: {
            street: "500 Cedar Street",
            city: "Austin",
            state: "Texas",
            zip: "05678",
          },
          contacts: [
            {
              name: "Mary Johnson",
              email: "mary.johnson@mortgageco.com",
              phone: "555-567-8901",
            },
          ],
          amountOriginallyOwed: 10000,
          dateOfOriginalDebt: "2023-05-22",
          contactWith: [
            {
              dateOfContact: "2024-05-30",

              offer: {
                amount: 5000,
                frequency: "bi-weekly",
              },
              messages: [
                "We need to arrange a new payment schedule.",
                "Please confirm your payment arrangement.",
              ],
              response: ["I will arrange for bi-weekly payments."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "JWT-001",
    name: {
      firstName: "James",
      middleName: "William",
      lastName: "Taylor",
      aliases: ["Jamie"],
    },
    address: {
      street: "700 Birch Street",
      city: "El Paso",
      state: "Texas",
      zip: "07890",
    },
    communication: {
      email: {
        primary: "james.taylor@mail.com",
        alt: ["james.t@gmail.com"],
      },
      phone: {
        cell: "555-678-9012",
        home: "555-345-6789",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JWT-DI-001",
        debtor: {
          company: "Health Corp",
          companyID: "HC-007",
          address: {
            street: "700 Birch Street",
            city: "El Paso",
            state: "Texas",
            zip: "07890",
          },
          contacts: [
            {
              name: "Laura King",
              email: "laura.king@healthcorp.com",
              phone: "555-678-9012",
            },
          ],
          amountOriginallyOwed: 4000,
          dateOfOriginalDebt: "2023-06-10",
          contactWith: [
            {
              dateOfContact: "2024-04-05",

              offer: {
                amount: 2500,
                frequency: "monthly",
              },
              messages: [
                "Please contact us to arrange payment.",
                "We are offering a new payment plan option.",
              ],
              response: ["I can manage monthly payments."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "LHK-001",
    name: {
      firstName: "Linda",
      middleName: "Hannah",
      lastName: "Kirk",
      aliases: [],
    },
    address: {
      street: "800 Maple Street",
      city: "Corpus Christi",
      state: "Texas",
      zip: "08901",
    },
    communication: {
      email: {
        primary: "linda.kirk@mail.com",
        alt: ["linda.kirk@gmail.com"],
      },
      phone: {
        cell: "555-789-0123",
        home: "555-456-7890",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "LHK-DI-001",
        debtor: {
          company: "Auto Loan Co.",
          companyID: "AL-008",
          address: {
            street: "800 Maple Street",
            city: "Corpus Christi",
            state: "Texas",
            zip: "08901",
          },
          contacts: [
            {
              name: "Tom Richardson",
              email: "tom.richardson@autoloanco.com",
              phone: "555-789-0123",
            },
          ],
          amountOriginallyOwed: 7500,
          dateOfOriginalDebt: "2023-07-15",
          contactWith: [
            {
              dateOfContact: "2024-03-20",

              offer: {
                amount: 4000,
                frequency: "monthly",
              },
              messages: [
                "Your payment is overdue.",
                "We offer flexible payment options.",
              ],
              response: [
                "I will review the payment options and get back to you.",
              ],
              sentiment: "negative",
            },
          ],
        },
      },
      {
        debtId: "LHK-DI-002",
        debtor: {
          company: "Utility Services",
          companyID: "US-009",
          address: {
            street: "800 Maple Street",
            city: "Corpus Christi",
            state: "Texas",
            zip: "08901",
          },
          contacts: [
            {
              name: "Nancy Davis",
              email: "nancy.davis@utilityservices.com",
              phone: "555-890-1234",
            },
          ],
          amountOriginallyOwed: 300,
          dateOfOriginalDebt: "2023-08-01",
          contactWith: [
            {
              dateOfContact: "2024-02-10",

              offer: {
                amount: 5000,
                frequency: "one-time",
              },
              messages: [
                "Your utility bill is overdue.",
                "We can accept a partial payment to avoid service disruption.",
              ],
              response: ["I can make a one-time payment of $50."],
              sentiment: "negative",
            },
          ],
        },
      },
    ],
  },
  {
    id: "SMR-001",
    name: {
      firstName: "Samuel",
      middleName: "Mark",
      lastName: "Roberts",
      aliases: ["Sam"],
    },
    address: {
      street: "900 Birchwood Lane",
      city: "Lubbock",
      state: "Texas",
      zip: "09123",
    },
    communication: {
      email: {
        primary: "samuel.roberts@mail.com",
        alt: ["sam.roberts@gmail.com"],
      },
      phone: {
        cell: "555-890-1234",
        home: "555-678-9012",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "SMR-DI-001",
        debtor: {
          company: "Credit Union",
          companyID: "CU-009",
          address: {
            street: "900 Birchwood Lane",
            city: "Lubbock",
            state: "Texas",
            zip: "09123",
          },
          contacts: [
            {
              name: "Rachel Green",
              email: "rachel.green@creditunion.com",
              phone: "555-890-1234",
            },
          ],
          amountOriginallyOwed: 2000,
          dateOfOriginalDebt: "2023-09-30",
          contactWith: [
            {
              dateOfContact: "2024-06-15",

              offer: {
                amount: 1500,
                frequency: "bi-weekly",
              },
              messages: [
                "We need to discuss your repayment options.",
                "Bi-weekly payments are available.",
              ],
              response: ["I prefer bi-weekly payments."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "RCJ-001",
    name: {
      firstName: "Rebecca",
      middleName: "Claire",
      lastName: "Johnson",
      aliases: ["Becca"],
    },
    address: {
      street: "1000 Hilltop Drive",
      city: "McAllen",
      state: "Texas",
      zip: "09234",
    },
    communication: {
      email: {
        primary: "rebecca.johnson@mail.com",
        alt: ["becca.johnson@gmail.com"],
      },
      phone: {
        cell: "555-901-2345",
        home: "555-789-1234",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "RCJ-DI-001",
        debtor: {
          company: "Loan Sharks",
          companyID: "LS-010",
          address: {
            street: "1000 Hilltop Drive",
            city: "McAllen",
            state: "Texas",
            zip: "09234",
          },
          contacts: [
            {
              name: "Michael Scott",
              email: "michael.scott@loansharks.com",
              phone: "555-901-2345",
            },
          ],
          amountOriginallyOwed: 4000,
          dateOfOriginalDebt: "2023-10-01",
          contactWith: [
            {
              dateOfContact: "2024-05-15",
              offer: {
                amount: 3000,
                frequency: "monthly",
              },
              messages: [
                "Your debt is overdue.",
                "Monthly payment plans are available.",
              ],
              response: ["I can do monthly payments."],
              sentiment: "positive",
            },
          ],
        },
      },
      {
        debtId: "RCJ-DI-002",
        debtor: {
          company: "Furniture World",
          companyID: "FW-011",
          address: {
            street: "1000 Hilltop Drive",
            city: "McAllen",
            state: "Texas",
            zip: "09234",
          },
          contacts: [
            {
              name: "Linda Martinez",
              email: "linda.martinez@furnitureworld.com",
              phone: "555-901-2345",
            },
          ],
          amountOriginallyOwed: 1200,
          dateOfOriginalDebt: "2023-11-15",
          contactWith: [
            {
              dateOfContact: "2024-07-20",

              offer: {
                amount: 1000,
                frequency: "one-time",
              },
              messages: [
                "Your account has an overdue balance.",
                "We can accept a one-time payment to settle the debt.",
              ],
              response: ["I will make a one-time payment of $100."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  // --------------------------------------------------------------

  {
    id: "JWT-001",
    name: {
      firstName: "James",
      middleName: "William",
      lastName: "Taylor",
      aliases: ["Jamie"],
    },
    address: {
      street: "700 Birch Street",
      city: "El Paso",
      state: "Texas",
      zip: "07890",
    },
    communication: {
      email: {
        primary: "james.taylor@mail.com",
        alt: ["james.t@gmail.com"],
      },
      phone: {
        cell: "555-678-9012",
        home: "555-345-6789",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JWT-DI-001",
        debtor: {
          company: "Health Corp",
          companyID: "HC-007",
          address: {
            street: "700 Birch Street",
            city: "El Paso",
            state: "Texas",
            zip: "07890",
          },
          contacts: [
            {
              name: "Laura King",
              email: "laura.king@healthcorp.com",
              phone: "555-678-9012",
            },
          ],
          amountOriginallyOwed: 4000,
          dateOfOriginalDebt: "2023-06-10",
          contactWith: [
            {
              dateOfContact: "2024-04-05",
              offer: {
                amount: 2500,
                frequency: "monthly",
              },
              messages: [
                "Please contact us to arrange payment.",
                "We are offering a new payment plan option.",
              ],
              response: ["I can manage monthly payments."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "ASD-001",
    name: {
      firstName: "Alice",
      middleName: "Sophia",
      lastName: "Doe",
      aliases: ["Ally"],
    },
    address: {
      street: "123 Oak Avenue",
      city: "Phoenix",
      state: "Arizona",
      zip: "85001",
    },
    communication: {
      email: {
        primary: "alice.doe@mail.com",
        alt: ["ally.smith@gmail.com"],
      },
      phone: {
        cell: "555-123-4567",
        home: "555-987-6543",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "ASD-DI-001",
        debtor: {
          company: "Retail Solutions",
          companyID: "RS-010",
          address: {
            street: "456 Maple Drive",
            city: "Phoenix",
            state: "Arizona",
            zip: "85002",
          },
          contacts: [
            {
              name: "Michael Stone",
              email: "michael.stone@retailsolutions.com",
              phone: "555-123-9876",
            },
          ],
          amountOriginallyOwed: 5200,
          dateOfOriginalDebt: "2023-04-15",
          contactWith: [
            {
              dateOfContact: "2024-03-22",
              offer: {
                amount: 4500,
                frequency: "bi-weekly",
              },
              messages: [
                "We would like to discuss a payment plan.",
                "Please confirm your availability.",
              ],
              response: ["I am available for bi-weekly payments."],
              sentiment: "neutral",
            },
          ],
        },
      },
    ],
  },
  {
    id: "BHD-001",
    name: {
      firstName: "Benjamin",
      middleName: "Harris",
      lastName: "Davis",
      aliases: ["Ben"],
    },
    address: {
      street: "890 Pine Road",
      city: "Miami",
      state: "Florida",
      zip: "33101",
    },
    communication: {
      email: {
        primary: "benjamin.davis@mail.com",
        alt: ["ben.h.davis@gmail.com"],
      },
      phone: {
        cell: "555-234-5678",
        home: "555-876-5432",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "BHD-DI-001",
        debtor: {
          company: "Auto Finance Inc",
          companyID: "AFI-015",
          address: {
            street: "567 Elm Street",
            city: "Miami",
            state: "Florida",
            zip: "33102",
          },
          contacts: [
            {
              name: "Sarah Lopez",
              email: "sarah.lopez@autofinance.com",
              phone: "555-234-5670",
            },
          ],
          amountOriginallyOwed: 3000,
          dateOfOriginalDebt: "2023-01-20",
          contactWith: [
            {
              dateOfContact: "2024-05-10",
              offer: {
                amount: 2500,
                frequency: "monthly",
              },
              messages: [
                "We need to finalize the payment arrangement.",
                "Please confirm the payment schedule.",
              ],
              response: ["Monthly payments work for me."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "CHP-001",
    name: {
      firstName: "Charlotte",
      middleName: "Hope",
      lastName: "Parker",
      aliases: ["Charlie"],
    },
    address: {
      street: "321 Cedar Avenue",
      city: "Houston",
      state: "Texas",
      zip: "77001",
    },
    communication: {
      email: {
        primary: "charlotte.parker@mail.com",
        alt: ["charlie.parker@gmail.com"],
      },
      phone: {
        cell: "555-567-8901",
        home: "555-765-4321",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "CHP-DI-001",
        debtor: {
          company: "Educational Loans Co",
          companyID: "ELC-022",
          address: {
            street: "123 College Road",
            city: "Houston",
            state: "Texas",
            zip: "77002",
          },
          contacts: [
            {
              name: "John Baker",
              email: "john.baker@educo.com",
              phone: "555-567-8902",
            },
          ],
          amountOriginallyOwed: 12000,
          dateOfOriginalDebt: "2023-08-25",
          contactWith: [
            {
              dateOfContact: "2024-07-15",
              offer: {
                amount: 11000,
                frequency: "quarterly",
              },
              messages: [
                "We need to set up your quarterly payment.",
                "Please confirm the new terms.",
              ],
              response: ["Quarterly payments sound good."],
              sentiment: "positive",
            },
          ],
        },
      },
    ],
  },
  {
    id: "DMW-001",
    name: {
      firstName: "Daniel",
      middleName: "Michael",
      lastName: "Wilson",
      aliases: ["Dan"],
    },
    address: {
      street: "456 Walnut Street",
      city: "Denver",
      state: "Colorado",
      zip: "80201",
    },
    communication: {
      email: {
        primary: "daniel.wilson@mail.com",
        alt: ["dan.m.wilson@gmail.com"],
      },
      phone: {
        cell: "555-345-6789",
        home: "555-234-5678",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "DMW-DI-001",
        debtor: {
          company: "Tech Equipment Ltd",
          companyID: "TEL-030",
          address: {
            street: "789 Industrial Road",
            city: "Denver",
            state: "Colorado",
            zip: "80202",
          },
          contacts: [
            {
              name: "Emily Green",
              email: "emily.green@tech.com",
              phone: "555-345-6780",
            },
          ],
          amountOriginallyOwed: 5500,
          dateOfOriginalDebt: "2023-05-18",
          contactWith: [
            {
              dateOfContact: "2024-06-12",
              offer: {
                amount: 5000,
                frequency: "monthly",
              },
              messages: [
                "Let's confirm your monthly payments.",
                "Please review the updated payment plan.",
              ],
              response: ["Monthly payments confirmed."],
              sentiment: "neutral",
            },
          ],
        },
      },
    ],
  },

  // --------------------------------------------------------------
];
