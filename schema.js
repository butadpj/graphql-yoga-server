import { createSchema } from "graphql-yoga";

let countries = [
  {
    code: "AE",
    name: "United Arab Emirates",
  },
  {
    code: "AF",
    name: "Afghanistan",
  },
  {
    code: "AM",
    name: "Armenia",
  },
  {
    code: "AZ",
    name: "Azerbaijan",
  },
  {
    code: "BD",
    name: "Bangladesh",
  },
  {
    code: "BH",
    name: "Bahrain",
  },
  {
    code: "BN",
    name: "Brunei",
  },
  {
    code: "BT",
    name: "Bhutan",
  },
  {
    code: "CC",
    name: "Cocos [Keeling] Islands",
  },
  {
    code: "CN",
    name: "China",
  },
  {
    code: "CX",
    name: "Christmas Island",
  },
  {
    code: "GE",
    name: "Georgia",
  },
  {
    code: "HK",
    name: "Hong Kong",
  },
  {
    code: "ID",
    name: "Indonesia",
  },
  {
    code: "IL",
    name: "Israel",
  },
  {
    code: "IN",
    name: "India",
  },
  {
    code: "IO",
    name: "British Indian Ocean Territory",
  },
  {
    code: "IQ",
    name: "Iraq",
  },
  {
    code: "IR",
    name: "Iran",
  },
  {
    code: "JO",
    name: "Jordan",
  },
  {
    code: "JP",
    name: "Japan",
  },
  {
    code: "KG",
    name: "Kyrgyzstan",
  },
  {
    code: "KH",
    name: "Cambodia",
  },
  {
    code: "KP",
    name: "North Korea",
  },
  {
    code: "KR",
    name: "South Korea",
  },
  {
    code: "KW",
    name: "Kuwait",
  },
  {
    code: "KZ",
    name: "Kazakhstan",
  },
  {
    code: "LA",
    name: "Laos",
  },
  {
    code: "LB",
    name: "Lebanon",
  },
  {
    code: "LK",
    name: "Sri Lanka",
  },
  {
    code: "MM",
    name: "Myanmar [Burma]",
  },
  {
    code: "MN",
    name: "Mongolia",
  },
  {
    code: "MO",
    name: "Macao",
  },
  {
    code: "MV",
    name: "Maldives",
  },
  {
    code: "MY",
    name: "Malaysia",
  },
  {
    code: "NP",
    name: "Nepal",
  },
  {
    code: "OM",
    name: "Oman",
  },
  {
    code: "PH",
    name: "Philippines",
  },
  {
    code: "PK",
    name: "Pakistan",
  },
  {
    code: "PS",
    name: "Palestine",
  },
  {
    code: "QA",
    name: "Qatar",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
  },
  {
    code: "SG",
    name: "Singapore",
  },
  {
    code: "SY",
    name: "Syria",
  },
  {
    code: "TH",
    name: "Thailand",
  },
  {
    code: "TJ",
    name: "Tajikistan",
  },
  {
    code: "TM",
    name: "Turkmenistan",
  },
  {
    code: "TR",
    name: "Turkey",
  },
  {
    code: "TW",
    name: "Taiwan",
  },
  {
    code: "UZ",
    name: "Uzbekistan",
  },
  {
    code: "VN",
    name: "Vietnam",
  },
  {
    code: "YE",
    name: "Yemen",
  },
];

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
      countries: [Country]
      latest_country: Country
    }

    type Mutation {
      addCountry(code: String, name: String): Country
    }

    type Country {
      code: String
      name: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello worlds!",
      countries: () => countries,
      latest_country: () => countries[0],
    },
    Mutation: {
      addCountry(_, args) {
        const newCountry = { code: args.code, name: args.name };
        countries = [newCountry, ...countries];

        return newCountry;
      },
    },
  },
});
