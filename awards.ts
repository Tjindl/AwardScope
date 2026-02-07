import { Award } from "../types";

export const awards: Award[] = [
  // Affiliation Scholarships
  {
    id: "alpha-gamma-delta-626",
    name: "ALPHA Gamma Delta Award",
    type: "Scholarship",
    amount: 14000,
    description:
      "Awards up to $14,000 endowed by the Alpha Gamma Delta Alumnae to a member of the Alpha Gamma Delta Fraternity who is entering her second or higher year of study.",
    category: "Affiliation Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      requiredYear: [2, 3, 4],
      affiliation: "alphaGammaDelta",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: ["Letter of recommendation from the Fraternity"],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "canadian-armed-forces-673",
    name: "CANADIAN Armed Forces Memorial Scholarship",
    type: "Scholarship",
    amount: 2150,
    description:
      "Up to 4 scholarships of $2,150 each for undergraduate and graduate students who are serving or who have served in the Reserves or Regular Forces of Canada, are serving or have served as Cadets, or are descendants of those who have served.",
    category: "Affiliation Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      affiliation: "canadianArmedForces",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "chan-yuet-lan-8572",
    name: "Chan Yuet Lan Scholarship",
    type: "Scholarship",
    amount: 2000,
    description:
      "A $2,000 scholarship for an outstanding undergraduate student in any year or any field of study.",
    category: "General Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "dr-yun-i-ssu-517",
    name: "Dr. Yun-I SSU Memorial Prize",
    type: "Prize",
    amount: 750,
    description:
      "A $750 prize awarded to the student of Chinese ancestry with the highest scholastic standing in the year preceding their final year in attendance.",
    category: "Heritage Prize",
    eligibility: {
      campus: ["Vancouver"],
      affiliation: "chineseAncestry",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "faculty-womens-club-303",
    name: "FACULTY Women's Club Anne Wesbrook Scholarship",
    type: "Scholarship",
    amount: 40250,
    description:
      "Scholarships totalling $40,250 offered to female students who have obtained a baccalaureate degree from UBC and are continuing studies at graduate level or in Medicine, Dentistry or Law.",
    category: "Women's Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      gender: ["Female"],
      requiredFaculty: ["Medicine", "Dentistry", "Law", "Graduate Studies"],
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "faculty-womens-club-mackenzie-639",
    name: "FACULTY Women's Club Margaret MacKenzie Scholarship",
    type: "Scholarship",
    amount: 2400,
    description:
      "A scholarship of $2,400 offered to women students entering UBC for the first time. Preference given to a student with demonstrated interest in hiking and cross-country skiing.",
    category: "Women's Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      gender: ["Female"],
      requiredYear: [1],
      financialNeed: true,
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "beem-credit-union-4707",
    name: "Beem Credit Union Scholarship",
    type: "Scholarship",
    amount: 1000,
    description:
      "Five scholarships of $1,000 each for students who are active members or immediate family of an active member of Beem Credit Union.",
    category: "Affiliation Scholarship",
    eligibility: {
      campus: ["Vancouver", "Okanagan"],
      affiliation: "beemCreditUnion",
      financialNeed: true,
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Proof of Beem Credit Union membership (bank statement or letter)",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "guenther-felix-sanders-524",
    name: "Guenther Felix SANDERS Scholarship",
    type: "Scholarship",
    amount: 4050,
    description:
      "Scholarships totalling $4,050 for outstanding undergraduate and graduate students, with preference for students whose parents or themselves are affiliated with the Knights Pythias in BC and/or are majoring in mathematics or in Applied Science.",
    category: "Affiliation Scholarship",
    eligibility: {
      campus: ["Vancouver", "Okanagan"],
      affiliation: "knightsPythias",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Letter of recommendation from the Grand Lodge, Knights",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "ilwu-bert-johnson-666",
    name: "ILWU Canada Bert Johnson Scholarship",
    type: "Scholarship",
    amount: 1200,
    description:
      "A $1,200 scholarship for active members of the ILWU in good standing, dependents, and their sons and daughters.",
    category: "Affiliation Scholarship",
    eligibility: {
      affiliation: "ilwu",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: ["Letter from ILWU confirming good standing"],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "ilwu-harry-bridges-entrance-4718",
    name: "ILWU Harry Bridges Entrance Scholarship",
    type: "Scholarship",
    amount: 1500,
    description:
      "Four scholarships of $1,500 each for active members, dependents, and sons and daughters of members in good standing of the ILWU, proceeding to first year.",
    category: "Affiliation Scholarship",
    eligibility: {
      requiredYear: [1],
      affiliation: "ilwu",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: ["Letter from ILWU confirming good standing"],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "ilwu-harry-bridges-undergraduate-530",
    name: "ILWU Harry Bridges Undergraduate Scholarship",
    type: "Scholarship",
    amount: 1500,
    description:
      "Three scholarships of $1,500 each for active members, dependents, and sons and daughters of members in good standing of the ILWU.",
    category: "Affiliation Scholarship",
    eligibility: {
      affiliation: "ilwu",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: ["Letter from ILWU confirming good standing"],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "iranian-student-memorial-1465",
    name: "Iranian Student Memorial Award",
    type: "Scholarship",
    amount: 4950,
    description:
      "Awards totalling $4,950 for undergraduate and graduate students of Persian or Iranian heritage, or who are studying Persian Studies. Established in memory of those who perished aboard Flight PS752 in January 2020.",
    category: "Heritage Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      affiliation: "iranianHeritage",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Statement explaining Persian/Iranian heritage or Persian Studies interest",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "mildred-brock-memorial-1226",
    name: "Mildred BROCK Memorial Scholarship",
    type: "Scholarship",
    amount: 7800,
    description:
      "Scholarships totalling $7,800 for women students who have completed at least one year at UBC with sound academic standing. Special consideration given to students active in women's organizations.",
    category: "Women's Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      gender: ["Female"],
      requiredYear: [2, 3, 4],
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "percy-w-perris-545",
    name: "Percy W. PERRIS Salmon Arm Scholarship",
    type: "Scholarship",
    amount: 1400,
    description:
      "A scholarship of $1,400 for students whose homes are in School District No. 83 (N. Okanagan – Shuswap).",
    category: "Regional Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      schoolDistrict: "83",
      financialNeed: true,
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: ["Proof of current address in School District 83"],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "piping-industry-4731",
    name: "Piping Industry Journeyman Training and Industry",
    type: "Scholarship",
    amount: 2000,
    description:
      "A scholarship of $2,000 for sons, daughters or legal dependents of members of UA Plumbers and Steamfitters, Local 170, or employees of contributing firms.",
    category: "Affiliation Scholarship",
    eligibility: {
      campus: ["Vancouver", "Okanagan"],
      requiredYear: [1],
      affiliation: "pipingIndustry",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: ["Letter from the Association"],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "royal-canadian-legion-1471",
    name: "Royal Canadian Legion, UBC Branch Award",
    type: "Scholarship",
    amount: 2000,
    description:
      "Awards totaling $2,000 for students serving or who have served in Canadian Armed Forces, or who have volunteered with organizations supporting veterans. Preference given to students who completed an IVET certificate program.",
    category: "Veterans Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      affiliation: "royalCanadianLegion",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Statement explaining service in Canadian Armed Forces",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "sikh-students-647",
    name: "SIKH Students' Association Scholarship",
    type: "Scholarship",
    amount: 900,
    description:
      "A scholarship of $900 based on high scholastic standing and community service. Preference given to a Sikh student.",
    category: "Community Scholarship",
    eligibility: {
      campus: ["Vancouver"],
      affiliation: "sikhCommunity",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Letter of recommendation from a local Sikh Temple President",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "ufcw-kim-novak-103154",
    name: "UFCW Local 1518 Kim Novak Memorial Scholarship",
    type: "Scholarship",
    amount: 10000,
    description:
      "Scholarships totalling $100,000 ($10,000 each) for women in their final year who are members, daughters, or legal wards of UFCW Local 1518 members.",
    category: "Affiliation Scholarship",
    eligibility: {
      affiliation: "ufcw",
      gender: ["Female"],
      requiredYear: [4],
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Letter from UFCW Local 1518 confirming membership",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "ufcw-local-1518-547",
    name: "UNITED Food and Commercial Workers Union, Local 1518, Scholarship",
    type: "Scholarship",
    amount: 1000,
    description:
      "Six scholarships of $1,000 each (3 for entering students, 3 for continuing) for members or sons/daughters/legal wards of UFCW Local 1518 members.",
    category: "Affiliation Scholarship",
    eligibility: {
      affiliation: "ufcw",
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    requiredDocumentation: [
      "Letter from UFCW Local 1518 confirming membership",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/",
  },
  {
    id: "ubc-bursary-program",
    name: "UBC Bursary Program",
    type: "Bursary",
    amount: "Variable",
    description:
      "The UBC Bursary program helps fill the gap between assessed educational and living costs and available government assistance. Amount determined by student loan needs assessment, program eligibility, family size, and prior year total family income.",
    category: "General Bursary",
    eligibility: {
      campus: ["Vancouver"],
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
      studentLoanRequired: true,
      financialNeed: true,
    },
    applicationDeadline: "September 15 (Winter), June 2 (Summer)",
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/ubc-bursary-program/",
  },

  // Indigenous Awards
  {
    id: "indigenous-awards-general",
    name: "UBC Awards for Indigenous Students",
    type: "Scholarship",
    amount: "Variable",
    description:
      "Various scholarships and bursaries for Indigenous students, recognizing academic, community, or athletic achievement, and based on financial need.",
    category: "Indigenous Award",
    eligibility: {
      campus: ["Vancouver"],
      indigenousOnly: true,
      citizenshipRequired: [
        "Canadian Citizen",
        "Permanent Resident",
        "Refugee",
      ],
    },
    applicationDeadline: "October 16",
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-indigenous/",
  },

  // Awards for Students with Disabilities
  {
    id: "disability-awards-general",
    name: "Awards for Students with Disabilities",
    type: "Scholarship",
    amount: "Variable",
    description:
      "Various scholarships and bursaries for UBC Vancouver students with disabilities, based on academic achievement, community involvement, leadership, or demonstrated financial need.",
    category: "Disability Award",
    eligibility: {
      campus: ["Vancouver"],
      hasDisability: true,
      citizenshipRequired: ["Canadian Citizen", "Permanent Resident"],
    },
    applicationDeadline: "September 15",
    requiredDocumentation: [
      "Medical documentation if not registered with Centre for Accessibility",
    ],
    sourceUrl:
      "https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-disabilities/",
  },

  // Additional key scholarships/bursaries can be added here
];
