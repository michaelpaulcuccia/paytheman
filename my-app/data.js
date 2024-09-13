const data = [
  {
    id: "JMM-0001",
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
        debtId: "JMM-DI-0001",
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
          amountOriginallyOwed: 5000,
          dateOfOriginalDebt: "2023-01-27",
          contactWith: [
            {
              dateOfContact: "2024-09-13",
              method: "text",
              offer: {
                amount: 200,
                frequency: "monthly",
              },
              messages: [
                "Are you still interested in paying?",
                "Thank you for your response",
              ],
              response: ["I am looking into how to pay this"],
            },
          ],
        },
      },
    ],
  },
  // Additional person objects
  {
    id: "JMM-0002",
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
        debtId: "JMM-DI-0002",
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
              method: "email",
              offer: {
                amount: 100,
                frequency: "bi-weekly",
              },
              messages: [
                "We need to discuss your payment options.",
                "Please let us know your preferred payment plan.",
              ],
              response: ["I can do bi-weekly payments."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0003",
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
        debtId: "JMM-DI-0003",
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
              method: "call",
              offer: {
                amount: 300,
                frequency: "weekly",
              },
              messages: [
                "We need to set up a new payment arrangement.",
                "Please confirm your preferred payment frequency.",
              ],
              response: ["I prefer to pay weekly."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0004",
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
        debtId: "JMM-DI-0004",
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
              method: "text",
              offer: {
                amount: 150,
                frequency: "monthly",
              },
              messages: [
                "Your payment is overdue. Please contact us.",
                "We can offer a payment plan to help you manage this debt.",
              ],
              response: ["I will set up a monthly payment plan."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0005",
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
        debtId: "JMM-DI-0005",
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
              method: "email",
              offer: {
                amount: 500,
                frequency: "bi-weekly",
              },
              messages: [
                "We need to arrange a new payment schedule.",
                "Please confirm your payment arrangement.",
              ],
              response: ["I will arrange for bi-weekly payments."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0006",
    name: {
      firstName: "Sophia",
      middleName: "Marie",
      lastName: "Miller",
      aliases: ["Sophie"],
    },
    address: {
      street: "600 Maple Street",
      city: "Fort Worth",
      state: "Texas",
      zip: "06789",
    },
    communication: {
      email: {
        primary: "sophia.miller@mail.com",
        alt: ["sophia.miller@gmail.com"],
      },
      phone: {
        cell: "555-678-9012",
        home: "555-345-6789",
        alt: [],
      },
      debts: [
        {
          debtId: "JMM-DI-0006",
          debtor: {
            company: "HealthCorp",
            companyID: "HC-006",
            address: {
              street: "600 Maple Street",
              city: "Fort Worth",
              state: "Texas",
              zip: "06789",
            },
            contacts: [
              {
                name: "Lisa Adams",
                email: "lisa.adams@healthcorp.com",
                phone: "555-678-9012",
              },
            ],
            amountOriginallyOwed: 8000,
            dateOfOriginalDebt: "2023-06-05",
            contactWith: [
              {
                dateOfContact: "2024-04-15",
                method: "call",
                offer: {
                  amount: 400,
                  frequency: "monthly",
                },
                messages: [
                  "Your payment is overdue. Please get in touch.",
                  "We can set up a payment plan that suits you.",
                ],
                response: ["I need more time to arrange payment."],
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "JMM-0007",
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
        alt: ["james.taylor@gmail.com"],
      },
      phone: {
        cell: "555-789-0123",
        home: "555-456-7890",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0007",
        debtor: {
          company: "Auto Loan Co.",
          companyID: "ALC-007",
          address: {
            street: "700 Birch Street",
            city: "El Paso",
            state: "Texas",
            zip: "07890",
          },
          contacts: [
            {
              name: "Emily Clark",
              email: "emily.clark@autoloanco.com",
              phone: "555-789-0123",
            },
          ],
          amountOriginallyOwed: 12000,
          dateOfOriginalDebt: "2023-07-30",
          contactWith: [
            {
              dateOfContact: "2024-03-10",
              method: "text",
              offer: {
                amount: 600,
                frequency: "monthly",
              },
              messages: [
                "Reminder: Your payment is overdue.",
                "We are happy to discuss a payment plan.",
              ],
              response: ["I will start paying monthly."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0008",
    name: {
      firstName: "Olivia",
      middleName: "Jane",
      lastName: "Davis",
      aliases: ["Liv"],
    },
    address: {
      street: "800 Cedar Avenue",
      city: "Arlington",
      state: "Texas",
      zip: "08901",
    },
    communication: {
      email: {
        primary: "olivia.davis@mail.com",
        alt: ["olivia.davis@gmail.com"],
      },
      phone: {
        cell: "555-890-1234",
        home: "555-567-8901",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0008",
        debtor: {
          company: "University Loans",
          companyID: "UL-008",
          address: {
            street: "800 Cedar Avenue",
            city: "Arlington",
            state: "Texas",
            zip: "08901",
          },
          contacts: [
            {
              name: "Daniel Wilson",
              email: "daniel.wilson@universityloans.com",
              phone: "555-890-1234",
            },
          ],
          amountOriginallyOwed: 6000,
          dateOfOriginalDebt: "2023-08-25",
          contactWith: [
            {
              dateOfContact: "2024-02-05",
              method: "email",
              offer: {
                amount: 300,
                frequency: "monthly",
              },
              messages: [
                "Please review your payment options.",
                "Contact us to discuss a plan.",
              ],
              response: ["I’ll review and get back to you."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0009",
    name: {
      firstName: "Benjamin",
      middleName: "Ray",
      lastName: "Anderson",
      aliases: [],
    },
    address: {
      street: "900 Spruce Street",
      city: "Houston",
      state: "Texas",
      zip: "09012",
    },
    communication: {
      email: {
        primary: "benjamin.anderson@mail.com",
        alt: ["benjamin.anderson@gmail.com"],
      },
      phone: {
        cell: "555-901-2345",
        home: "555-678-9012",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0009",
        debtor: {
          company: "Energy Corp.",
          companyID: "EC-009",
          address: {
            street: "900 Spruce Street",
            city: "Houston",
            state: "Texas",
            zip: "09012",
          },
          contacts: [
            {
              name: "Sandra Lee",
              email: "sandra.lee@energycorp.com",
              phone: "555-901-2345",
            },
          ],
          amountOriginallyOwed: 4500,
          dateOfOriginalDebt: "2023-09-10",
          contactWith: [
            {
              dateOfContact: "2024-01-22",
              method: "call",
              offer: {
                amount: 225,
                frequency: "monthly",
              },
              messages: [
                "We need to discuss your outstanding balance.",
                "Please contact us to set up a payment plan.",
              ],
              response: ["I will contact you next week."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0010",
    name: {
      firstName: "Charlotte",
      middleName: "Elise",
      lastName: "Scott",
      aliases: ["Charlie"],
    },
    address: {
      street: "1000 Willow Drive",
      city: "Austin",
      state: "Texas",
      zip: "10123",
    },
    communication: {
      email: {
        primary: "charlotte.scott@mail.com",
        alt: ["charlotte.scott@gmail.com"],
      },
      phone: {
        cell: "555-012-3456",
        home: "555-789-0123",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0010",
        debtor: {
          company: "Internet Services",
          companyID: "IS-010",
          address: {
            street: "1000 Willow Drive",
            city: "Austin",
            state: "Texas",
            zip: "10123",
          },
          contacts: [
            {
              name: "Paul Turner",
              email: "paul.turner@internetservices.com",
              phone: "555-012-3456",
            },
          ],
          amountOriginallyOwed: 7000,
          dateOfOriginalDebt: "2023-10-01",
          contactWith: [
            {
              dateOfContact: "2024-11-05",
              method: "text",
              offer: {
                amount: 350,
                frequency: "monthly",
              },
              messages: [
                "Your payment is overdue.",
                "We are available to help you with a payment plan.",
              ],
              response: ["I will arrange for payments."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0011",
    name: {
      firstName: "Lucas",
      middleName: "Henry",
      lastName: "Harris",
      aliases: ["Luke"],
    },
    address: {
      street: "1100 Maple Lane",
      city: "San Antonio",
      state: "Texas",
      zip: "11234",
    },
    communication: {
      email: {
        primary: "lucas.harris@mail.com",
        alt: ["lucas.harris@gmail.com"],
      },
      phone: {
        cell: "555-123-4567",
        home: "555-890-1234",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0011",
        debtor: {
          company: "Furniture Co.",
          companyID: "FC-011",
          address: {
            street: "1100 Maple Lane",
            city: "San Antonio",
            state: "Texas",
            zip: "11234",
          },
          contacts: [
            {
              name: "Rachel Green",
              email: "rachel.green@furnitureco.com",
              phone: "555-123-4567",
            },
          ],
          amountOriginallyOwed: 2500,
          dateOfOriginalDebt: "2023-11-15",
          contactWith: [
            {
              dateOfContact: "2024-05-18",
              method: "email",
              offer: {
                amount: 125,
                frequency: "monthly",
              },
              messages: [
                "Your payment is overdue.",
                "Please contact us to set up a payment plan.",
              ],
              response: ["I will start monthly payments."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0012",
    name: {
      firstName: "Mia",
      middleName: "Rose",
      lastName: "Walker",
      aliases: [],
    },
    address: {
      street: "1200 Oak Drive",
      city: "Dallas",
      state: "Texas",
      zip: "12345",
    },
    communication: {
      email: {
        primary: "mia.walker@mail.com",
        alt: ["mia.walker@gmail.com"],
      },
      phone: {
        cell: "555-234-5678",
        home: "555-345-6789",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0012",
        debtor: {
          company: "Utility Services",
          companyID: "US-012",
          address: {
            street: "1200 Oak Drive",
            city: "Dallas",
            state: "Texas",
            zip: "12345",
          },
          contacts: [
            {
              name: "Michael Scott",
              email: "michael.scott@utilityservices.com",
              phone: "555-234-5678",
            },
          ],
          amountOriginallyOwed: 9500,
          dateOfOriginalDebt: "2023-12-20",
          contactWith: [
            {
              dateOfContact: "2024-07-12",
              method: "call",
              offer: {
                amount: 475,
                frequency: "monthly",
              },
              messages: [
                "Reminder: Your payment is overdue.",
                "Please contact us to arrange payment.",
              ],
              response: ["I will contact you to discuss."],
            },
          ],
        },
      },
    ],
  },
  {
    id: "JMM-0013",
    name: {
      firstName: "Noah",
      middleName: "Eli",
      lastName: "Thomas",
      aliases: [],
    },
    address: {
      street: "1300 Pine Road",
      city: "Fort Worth",
      state: "Texas",
      zip: "13456",
    },
    communication: {
      email: {
        primary: "noah.thomas@mail.com",
        alt: ["noah.thomas@gmail.com"],
      },
      phone: {
        cell: "555-345-6789",
        home: "555-456-7890",
        alt: [],
      },
    },
    debts: [
      {
        debtId: "JMM-DI-0013",
        debtor: {
          company: "Construction Co.",
          companyID: "CC-013",
          address: {
            street: "1300 Pine Road",
            city: "Fort Worth",
            state: "Texas",
            zip: "13456",
          },
          contacts: [
            {
              name: "Linda Brown",
              email: "linda.brown@constructionco.com",
              phone: "555-345-6789",
            },
          ],
          amountOriginallyOwed: 4000,
          dateOfOriginalDebt: "2024-01-15",
          contactWith: [
            {
              dateOfContact: "2024-08-10",
              method: "text",
              offer: {
                amount: 200,
                frequency: "bi-weekly",
              },
              messages: [
                "We need to arrange a new payment schedule.",
                "Please contact us to discuss.",
              ],
              response: ["I will start bi-weekly payments."],
            },
          ],
        },
      },
    ],
  },
];
