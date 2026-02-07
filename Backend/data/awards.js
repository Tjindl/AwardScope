// Awards database - Scraped from UBC Financial Aid official sources
module.exports = [
  // ========== AFFILIATION SCHOLARSHIPS ==========

  {
    id: 'alpha-gamma-delta-626',
    name: 'ALPHA Gamma Delta Award',
    type: 'Scholarship',
    amount: 14000,
    description: 'Awards up to $14,000 endowed by the Alpha Gamma Delta Alumnae to a member of the Alpha Gamma Delta Fraternity who is entering her second or higher year of study. Selection considers academic abilities, university and community activities, and service within the Fraternity.',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2, 3, 4],
      affiliation: 'alphaGammaDelta',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter of recommendation from the Fraternity'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'canadian-armed-forces-673',
    name: 'CANADIAN Armed Forces Memorial Scholarship',
    type: 'Scholarship',
    amount: 2150,
    description: 'Up to 4 scholarships of $2,150 each commemorating those who gave their lives in service of Canada. One scholarship honours Surgeon Captain Maurice D. Young. Open to undergraduate and graduate students who are serving or have served in the Reserves or Regular Forces of Canada, have served as Cadets, or are descendants of those who have served.',
    category: 'Veterans Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      affiliation: 'canadianArmedForces',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'chan-yuet-lan-8572',
    name: 'Chan Yuet Lan Scholarship',
    type: 'Scholarship',
    amount: 2000,
    description: 'A $2,000 scholarship established by Tin Yick Lung in honour of his mother, Chan Yuet Lan (aka Yuet Lan Lung), for an outstanding undergraduate student in any year or any field of study. Chan Yuet Lan was an accomplished author whose book on Chinese classics is catalogued in UBC\'s Asian Library.',
    category: 'General Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'council-exceptional-children-1921',
    name: 'COUNCIL for Exceptional Children Samuel Laycock Book Prize',
    type: 'Prize',
    amount: 300,
    description: 'A $300 prize offered in all fields and faculties dealing with exceptional children (psychology, psychiatry, medicine, education). Open to all undergraduate or graduate students who have an interest in exceptional children and shown aptitude for study and investigation concerning them.',
    category: 'Academic Prize',
    eligibility: {
      campus: ['Vancouver'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter of recommendation from the appropriate department'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'dr-yun-i-ssu-517',
    name: 'Dr. Yun-I SSU Memorial Prize',
    type: 'Prize',
    amount: 750,
    description: 'A $750 prize endowed by friends of the late Dr. Yun-I Ssu (Ph.D. in Metallurgy, UBC, 1960). Awarded to the student of Chinese ancestry with the highest scholastic standing in the year preceding their final year in attendance.',
    category: 'Heritage Prize',
    eligibility: {
      campus: ['Vancouver'],
      affiliation: 'chineseAncestry',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'faculty-womens-club-303',
    name: 'FACULTY Women\'s Club Anne Wesbrook Scholarship',
    type: 'Scholarship',
    amount: 40250,
    description: 'Scholarships totalling $40,250 established in 1919 to honour Anne Wesbrook, wife of the first President of UBC. Awarded to female students who have obtained a baccalaureate degree from UBC and are continuing studies at graduate level or in Medicine, Dentistry or Law.',
    category: 'Women\'s Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      gender: ['Female'],
      requiredFaculty: ['Medicine', 'Dentistry', 'Law', 'Graduate Studies'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'faculty-womens-club-mackenzie-639',
    name: 'FACULTY Women\'s Club Margaret MacKenzie Scholarship',
    type: 'Scholarship',
    amount: 2400,
    description: 'A $2,400 scholarship honouring Margaret MacKenzie whose contributions helped develop UBC. Offered to women students entering UBC for the first time. Preference given to students with demonstrated interest in hiking and cross-country skiing. Financial circumstances will be considered.',
    category: 'Women\'s Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      gender: ['Female'],
      requiredYear: [1],
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ferguson-656',
    name: 'FERGUSON Scholarship',
    type: 'Scholarship',
    amount: 500,
    description: 'A $500 scholarship honouring Reverend T.J.S. Ferguson and Dr. Amy Ferguson of Nelson. For graduates of secondary schools in School District No. 8, with first preference to students from L.V. Rogers Secondary School (Nelson). Open to students beginning or continuing studies at UBC. Financial circumstances are an important factor.',
    category: 'Regional Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      schoolDistrict: '8',
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'beem-credit-union-4707',
    name: 'Beem Credit Union Scholarship',
    type: 'Scholarship',
    amount: 1000,
    description: 'Five scholarships of $1,000 each for students who are active members or immediate family of an active member of Beem Credit Union. Available for students at all publicly funded Post-Secondary Educational Institutions in BC. Awarded based on academic merit and financial need.',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      affiliation: 'beemCreditUnion',
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Proof of Beem Credit Union membership (bank statement or letter)'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'guenther-felix-sanders-524',
    name: 'Guenther Felix SANDERS Scholarship',
    type: 'Scholarship',
    amount: 4050,
    description: 'Scholarships totalling $4,050 for outstanding undergraduate and graduate students, with preference for (1) students affiliated with Knights Pythias in BC and/or (2) students majoring in mathematics or in Applied Science.',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      affiliation: 'knightsPythias',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter of recommendation from the Grand Lodge, Knights'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ilwu-bert-johnson-666',
    name: 'ILWU Canada Bert Johnson Scholarship',
    type: 'Scholarship',
    amount: 1200,
    description: 'A $1,200 scholarship in memory of Bert Johnson, Local 500. Available to active ILWU members in good standing, dependents, and their sons and daughters. Candidates may attend UBC, UVic, SFU, BCIT or any college in BC.',
    category: 'Affiliation Scholarship',
    eligibility: {
      affiliation: 'ilwu',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from ILWU confirming good standing'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ilwu-harry-bridges-entrance-4718',
    name: 'ILWU Harry Bridges Entrance Scholarship',
    type: 'Scholarship',
    amount: 1500,
    description: 'Four scholarships of $1,500 each for active ILWU members, dependents, and sons/daughters of members in good standing, proceeding to a full first year program at UBC, UVic, SFU, BCIT, or a BC college.',
    category: 'Affiliation Scholarship',
    eligibility: {
      requiredYear: [1],
      affiliation: 'ilwu',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from ILWU confirming good standing'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ilwu-harry-bridges-undergraduate-530',
    name: 'ILWU Harry Bridges Undergraduate Scholarship',
    type: 'Scholarship',
    amount: 1500,
    description: 'Three scholarships of $1,500 each for active ILWU members, dependents, and sons/daughters of members in good standing. Open to students at UBC, UVic, SFU, BCIT, or any BC college continuing in a full undergraduate program.',
    category: 'Affiliation Scholarship',
    eligibility: {
      affiliation: 'ilwu',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from ILWU confirming good standing'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ilwu-local-517-bud-smith-4804',
    name: 'ILWU Local 517 Bud Smith Scholarship',
    type: 'Scholarship',
    amount: 500,
    description: 'A $500 scholarship in memory of former Local 517 secretary "Bud" Smith. Open to Local 517 members in good standing, and their sons and daughters. Candidates may attend UBC, UVic, SFU, BCIT or any BC college.',
    category: 'Affiliation Scholarship',
    eligibility: {
      affiliation: 'ilwuLocal517',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ilwu-thomas-p-mayes-558',
    name: 'ILWU Thomas P. Mayes Scholarship',
    type: 'Scholarship',
    amount: 1500,
    description: 'A $1,500 undergraduate scholarship in memory of Thomas P. Mayes, who served as Union secretary until his death in 1968. Available to active ILWU members, dependents, and sons/daughters of members in good standing.',
    category: 'Affiliation Scholarship',
    eligibility: {
      affiliation: 'ilwu',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from ILWU confirming good standing'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'iranian-student-memorial-1465',
    name: 'Iranian Student Memorial Award',
    type: 'Scholarship',
    amount: 4950,
    description: 'Awards totalling $4,950 established by the Iranian-Canadian community and UBC in memory of those who perished aboard Flight PS752 in January 2020. For outstanding undergraduate and graduate students of Persian or Iranian heritage, or studying Persian Studies.',
    category: 'Heritage Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      affiliation: 'iranianHeritage',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Statement explaining Persian/Iranian heritage or Persian Studies interest'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'mildred-brock-memorial-1226',
    name: 'Mildred BROCK Memorial Scholarship',
    type: 'Scholarship',
    amount: 7800,
    description: 'Scholarships totalling $7,800, established in 1936 by Delta Gamma Fraternity in memory of Mrs. Mildred Brock. For women students who have completed at least one year at UBC with sound academic standing. Special consideration for students active in women\'s organizations such as sororities or Phrateres.',
    category: 'Women\'s Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      gender: ['Female'],
      requiredYear: [2, 3, 4],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'nancy-ryckman-544',
    name: 'Nancy RYCKMAN Scholarship',
    type: 'Scholarship',
    amount: 1400,
    description: 'Scholarships totalling $1,400 for students who have completed at least one year at a university or college and attended school in the East Kootenays for three years (two immediately prior to entrance). Awarded to students requiring aid, considering character and intellectual promise.',
    category: 'Regional Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2, 3, 4],
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Proof of attending school in the East Kootenays'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'olof-sjobom-seaholm-638',
    name: 'Olof Sjobom SEAHOLM Memorial Scholarship',
    type: 'Scholarship',
    amount: 10550,
    description: 'Scholarships totalling $10,550 endowed by the late Olof Sjobom Seaholm. Preference given to students of Swedish Immigrant History or allied fields relating to the Swedish Immigrant Community.',
    category: 'Heritage Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      affiliation: 'swedishHeritage',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'percy-w-perris-545',
    name: 'Percy W. PERRIS Salmon Arm Scholarship',
    type: 'Scholarship',
    amount: 1400,
    description: 'A $1,400 scholarship for students beginning or continuing studies at UBC whose homes are in School District No. 83 (N. Okanagan – Shuswap). Selection based on academic standing, personal qualities, and need.',
    category: 'Regional Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      schoolDistrict: '83',
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Proof of current address in School District 83'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'piping-industry-4731',
    name: 'Piping Industry Journeyman Training and Industry Scholarship',
    type: 'Scholarship',
    amount: 2000,
    description: 'A $2,000 scholarship for first-year students at any BC university or college. For sons, daughters or legal dependents of (a) UA Plumbers and Steamfitters Local 170 members employed by contributing firms, or (b) employees of contributing firms.',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [1],
      affiliation: 'pipingIndustry',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from the Association'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'royal-canadian-legion-1471',
    name: 'Royal Canadian Legion, UBC Branch Award',
    type: 'Scholarship',
    amount: 2000,
    description: 'Awards totaling $2,000 for students serving or who have served in the Regular or Reserve Force of the Canadian Armed Forces, or who have volunteered with organizations supporting veterans. Preference given to IVET certificate program completers transitioning to full-time study.',
    category: 'Veterans Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      affiliation: 'royalCanadianLegion',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Statement explaining service in Canadian Armed Forces'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'sikh-students-647',
    name: 'SIKH Students\' Association Scholarship',
    type: 'Scholarship',
    amount: 900,
    description: 'A $900 scholarship based on high scholastic standing and community service. Established in 1985 by the Sikh Students\' Association to encourage and recognize individual excellence. Preference given to Sikh students.',
    category: 'Community Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      affiliation: 'sikhCommunity',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter of recommendation from a local Sikh Temple President'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'te-me-ladner-554',
    name: 'T. E. and M. E. LADNER Memorial Scholarship',
    type: 'Scholarship',
    amount: 1800,
    description: 'A $1,800 scholarship in memory of Thomas Ellis and Minnie E. Ladner for students whose home is in Delta Municipality of the lower Fraser Valley. Considers high scholastic standing, character, and financial need. Open to new or continuing students.',
    category: 'Regional Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      schoolDistrict: 'Delta',
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Proof of Delta address (current bill or government photo ID)'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ufcw-kim-novak-103154',
    name: 'UFCW Local 1518 Kim Novak Memorial Scholarship',
    type: 'Scholarship',
    amount: 10000,
    description: 'Scholarships totalling $100,000 ($10,000 each) in memory of Kim Novak (1985-2024), a dedicated advocate for social justice who served as UFCW 1518 President from 2019-2024. For women in final year who are members, daughters, or legal wards of UFCW Local 1518 members.',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      affiliation: 'ufcw',
      gender: ['Female'],
      requiredYear: [4],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from UFCW Local 1518 confirming membership'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ua-plumbers-steamfitters-4798',
    name: 'UNITED Association of Plumbers & Steamfitters, Local 170, Scholarship',
    type: 'Scholarship',
    amount: 2500,
    description: 'Two scholarships of $2,500 each for first-year students at any public BC university, pursuing a degree in any field. For sons, daughters, grandchildren or legal dependents of Local 170 members in good standing.',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [1],
      affiliation: 'uaPlumbersSteamfitters',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from Local confirming good standing'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ufcw-local-1518-547',
    name: 'UNITED Food and Commercial Workers Union, Local 1518, Scholarship',
    type: 'Scholarship',
    amount: 1000,
    description: 'Six scholarships of $1,000 each (3 for entering students, 3 for continuing) for UFCW Local 1518 members or their sons, daughters, or legal wards. Available at UBC, UVic, SFU, BCIT, or any BC college.',
    category: 'Affiliation Scholarship',
    eligibility: {
      affiliation: 'ufcw',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from UFCW Local 1518 confirming membership'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'ubc-alumni-southern-california-652',
    name: 'UNIVERSITY of B.C. Alumni Southern California Scholarship',
    type: 'Scholarship',
    amount: 650,
    description: 'A $650 scholarship with preference for students (a) whose home is in Southern California, (b) whose home is in the United States, (c) at discretion of University. Based on academic standing, personal qualities and need.',
    category: 'International Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      citizenshipRequired: ['International Student', 'Canadian Citizen', 'Permanent Resident'],
    },
    requiredDocumentation: ['Proof of residency in Southern California or USA'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'william-l-hurford-4786',
    name: 'William L. HURFORD Memorial Scholarship',
    type: 'Scholarship',
    amount: 1800,
    description: 'A $1,800 scholarship in memory of William L. Hurford, offered by B.C. Maritime Employers Association. For sons and daughters of ILWU members in good standing, proceeding to first year at UBC, UVic, SFU, BCIT, or a BC college.',
    category: 'Affiliation Scholarship',
    eligibility: {
      requiredYear: [1],
      affiliation: 'ilwu',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from ILWU'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'william-mcmahan-2157',
    name: 'William MCMAHAN Scholarship',
    type: 'Scholarship',
    amount: 5150,
    description: 'A $5,150 scholarship for students entering 2nd, 3rd, or final year in chemical, civil, electrical, or mechanical engineering, or forestry. For sons/daughters of Canadian Forest Products Ltd. employees (logging, pulp operations, or head office).',
    category: 'Affiliation Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2, 3, 4],
      requiredFaculty: ['Engineering', 'Forestry'],
      affiliation: 'canforEmployees',
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Letter from head office confirming eligibility'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },
  {
    id: 'yates-memorial-7731',
    name: 'YATES Memorial Scholarship',
    type: 'Scholarship',
    amount: 2350,
    description: 'Scholarships totalling $2,350 as a memorial to Frederick H. L. Yates. For promising students with financial need or high academic standing. First preference: WWII veterans, then descendants of those who served, then student body at large.',
    category: 'Veterans Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      financialNeed: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/affiliation-scholarships/descriptions-affiliation-scholarships/'
  },

  // ========== GENERAL BURSARIES ==========

  {
    id: 'ubc-bursary-program',
    name: 'UBC Bursary Program',
    type: 'Bursary',
    amount: 'Variable',
    description: 'The UBC Bursary program helps fill the gap between assessed educational and living costs and available government assistance. Amount determined by student loan needs assessment, program eligibility, family size, and prior year total family income.',
    category: 'General Bursary',
    eligibility: {
      campus: ['Vancouver'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
      studentLoanRequired: true,
      financialNeed: true,
    },
    applicationDeadline: 'September 15 (Winter), June 2 (Summer)',
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/ubc-bursary-program/'
  },

  // ========== INDIGENOUS AWARDS ==========

  {
    id: 'indigenous-awards-general',
    name: 'UBC Awards for Indigenous Students',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Various scholarships and bursaries for Indigenous students, recognizing academic, community, or athletic achievement, and based on financial need.',
    category: 'Indigenous Award',
    eligibility: {
      campus: ['Vancouver'],
      indigenousOnly: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    applicationDeadline: 'October 16',
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-indigenous/'
  },

  // ========== DISABILITY AWARDS ==========

  {
    id: 'disability-awards-general',
    name: 'Awards for Students with Disabilities',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Various scholarships and bursaries for UBC Vancouver students with disabilities, based on academic achievement, community involvement, leadership, or demonstrated financial need.',
    category: 'Disability Award',
    eligibility: {
      campus: ['Vancouver'],
      hasDisability: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
    },
    applicationDeadline: 'September 15',
    requiredDocumentation: ['Medical documentation if not registered with Centre for Accessibility'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-disabilities/'
  },

  // ========== FACULTY-SPECIFIC SCHOLARSHIPS ==========

  {
    id: 'trek-excellence-scholarship',
    name: 'Trek Excellence Scholarship',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Automatic scholarship for students with outstanding academic achievement. No application required - students are automatically considered based on their academic standing.',
    category: 'Merit Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      minGPA: 3.5,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'student-housing-supplement',
    name: 'Student Housing Supplement Grant',
    type: 'Grant',
    amount: 'Variable',
    description: 'Automatic grant to help eligible domestic students with housing costs. No application required - students are automatically considered.',
    category: 'Housing Grant',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
      financialNeed: true,
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'john-r-scarfo-wellness-bursary',
    name: 'John R. Scarfo Wellness Bursary',
    type: 'Bursary',
    amount: 'Variable',
    description: 'Bursary for students demonstrating financial need with a focus on wellness and mental health support.',
    category: 'Wellness Bursary',
    eligibility: {
      campus: ['Vancouver'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
      financialNeed: true,
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'premier-undergraduate-scholarship',
    name: 'Premier Undergraduate Scholarship',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Prestigious scholarship for outstanding undergraduate students demonstrating academic excellence and leadership.',
    category: 'Merit Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      minGPA: 3.7,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    requiredDocumentation: ['Application required'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'wesbrook-scholarship',
    name: 'Wesbrook Scholarship',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Major scholarship for students with exceptional academic achievement and significant contributions to their community.',
    category: 'Merit Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      minGPA: 3.7,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    requiredDocumentation: ['Application required'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },

  // ========== INTERNATIONAL STUDENT AWARDS ==========

  {
    id: 'international-major-entrance-scholarship',
    name: 'International Major Entrance Scholarship (IMES)',
    type: 'Scholarship',
    amount: 25000,
    amountRange: '$10,000 - $25,000/year',
    description: 'Prestigious renewable scholarship for exceptional international students entering undergraduate programs. Renewable for up to three additional years of study. Awarded based on exceptional academic achievement, intellectual promise, and impressive extracurricular and community involvement.',
    category: 'International Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
      minGPA: 3.8,
    },
    renewable: true,
    renewableYears: 4,
    automaticConsideration: true,
    sourceUrl: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/'
  },
  {
    id: 'outstanding-international-student-award',
    name: 'Outstanding International Student (OIS) Award',
    type: 'Scholarship',
    amount: 25000,
    amountRange: '$10,000 - $25,000',
    description: 'One-time, merit-based entrance scholarship awarded to qualified international students when offered admission to UBC. Recipients demonstrate strong academics and involvement outside of the classroom.',
    category: 'International Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
      minGPA: 3.5,
    },
    automaticConsideration: true,
    sourceUrl: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/'
  },
  {
    id: 'ubc-okanagan-global-elevation-award',
    name: 'UBC Okanagan Global Elevation Award',
    type: 'Award',
    amount: 8000,
    description: 'An $8,000 award applied to international students\' tuition at UBC Okanagan. Renewable for up to 4 years or degree completion. All new international undergraduate students who enroll at UBC Okanagan receive this award automatically.',
    category: 'International Campus Award',
    eligibility: {
      campus: ['Okanagan'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
    },
    renewable: true,
    renewableYears: 4,
    automaticConsideration: true,
    sourceUrl: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/'
  },
  {
    id: 'ubc-okanagan-international-welcome-award',
    name: 'UBC Okanagan International Welcome Award',
    type: 'Award',
    amount: 5000,
    description: 'A $5,000 award applied to international students\' first-year tuition at UBC Okanagan. For students who select UBC Okanagan as their first choice and are accepted and enroll into their first-choice program.',
    category: 'International Campus Award',
    eligibility: {
      campus: ['Okanagan'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
    },
    automaticConsideration: true,
    sourceUrl: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/'
  },
  {
    id: 'international-scholars-program',
    name: 'International Scholars Program',
    type: 'Scholarship',
    amount: 'Full Tuition + Living',
    description: 'Prestigious need-and-merit-based scholarship for high academic achievers with significant financial need who have demonstrated exceptional extracurricular activities and show a desire to create global and social change. Covers full tuition and living expenses.',
    category: 'International Need-Based Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
      financialNeed: true,
      minGPA: 3.9,
    },
    renewable: true,
    renewableYears: 4,
    requiredDocumentation: ['Financial need documentation', 'Personal profile', 'Extracurricular evidence'],
    sourceUrl: 'https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/'
  },
  {
    id: 'international-community-achievement-award',
    name: 'International Community Achievement Award',
    type: 'Award',
    amount: 10000,
    description: 'Awards up to $10,000 each for continuing international undergraduate students who have demonstrated leadership in community service, international engagement, intercultural understanding, promotion of diversity, intellectual/artistic/athletic pursuits, or other campus activities.',
    category: 'International Leadership Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2, 3, 4],
      citizenshipRequired: ['International Student'],
    },
    requiredDocumentation: ['Application required', 'Evidence of leadership and community involvement'],
    applicationDeadline: 'June (check website for exact date)',
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/awards-international'
  },
  {
    id: 'vantage-one-entrance-award',
    name: 'Vantage One Entrance Award',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'For academically strong international students in UBC Vantage One program whose English language proficiency does not yet meet direct admission requirements. Awarded based on academic achievement, intellectual promise, and extracurricular involvement.',
    category: 'Vantage One Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
    },
    sourceUrl: 'https://vantagecollege.ubc.ca/scholarships-awards'
  },
  {
    id: 'vantage-one-excellence-award',
    name: 'Vantage One Excellence Award',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Prestigious award for exceptional Vantage One students demonstrating outstanding academic performance and community involvement in their first year.',
    category: 'Vantage One Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
    },
    sourceUrl: 'https://vantagecollege.ubc.ca/scholarships-awards'
  },
  {
    id: 'imes-vantage-one',
    name: 'International Major Entrance Scholarship for Vantage One',
    type: 'Scholarship',
    amount: 25000,
    amountRange: '$10,000 - $25,000/year',
    description: 'Renewable scholarship for exceptional Vantage One students, similar to IMES but specifically for the Vantage One program pathway.',
    category: 'Vantage One Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['International Student'],
    },
    renewable: true,
    renewableYears: 4,
    sourceUrl: 'https://vantagecollege.ubc.ca/scholarships-awards'
  },

  // ========== CANADIAN ENTRANCE SCHOLARSHIPS ==========

  {
    id: 'schulich-leader-scholarship',
    name: 'Schulich Leader Scholarship',
    type: 'Scholarship',
    amount: 100000,
    description: 'Canada\'s most prestigious undergraduate STEM scholarship, valued at $100,000 for Engineering students and $80,000 for Science students. For students entering Science, Technology, Engineering, or Mathematics (STEM) programs.',
    category: 'Major Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [1],
      requiredFaculty: ['Science', 'Engineering'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      minGPA: 3.9,
    },
    requiredDocumentation: ['High school nomination required', 'Application required'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'loran-award',
    name: 'Loran Award',
    type: 'Scholarship',
    amount: 100000,
    description: 'Canada\'s largest and most comprehensive undergraduate award, valued at $100,000. For students who demonstrate character, commitment to community service, and leadership potential.',
    category: 'Major Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [1],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
    },
    requiredDocumentation: ['Application through Loran Scholars Foundation', 'Multiple interviews required'],
    sourceUrl: 'https://loranscholar.ca/'
  },
  {
    id: 'presidential-scholars-award',
    name: 'Presidential Scholars Award',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Major entrance award for exceptional Canadian high school students demonstrating outstanding academic and extracurricular achievement.',
    category: 'Major Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      minGPA: 3.9,
    },
    requiredDocumentation: ['Application required'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'ubc-centennial-scholars-entrance-award',
    name: 'UBC Centennial Scholars Entrance Award',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Need-and-merit-based entrance award for exceptional Canadian students with demonstrated financial need. Combines academic excellence with community involvement.',
    category: 'Need-Based Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [1],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      financialNeed: true,
    },
    requiredDocumentation: ['Financial need documentation', 'Application required'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'beyond-tomorrow-scholars-program',
    name: 'Beyond Tomorrow Scholars Program',
    type: 'Scholarship',
    amount: 'Variable',
    description: 'Comprehensive support program for Indigenous students, Black Canadian students, and students with disabilities, providing financial support and mentorship throughout their undergraduate studies.',
    category: 'Equity Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [1],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    requiredDocumentation: ['Application required'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },

  // ========== FACULTY OF ARTS AWARDS ==========

  {
    id: 'william-nona-heaslip-scholarship',
    name: 'William and Nona Heaslip Scholarship',
    type: 'Scholarship',
    amount: 15000,
    description: 'A $15,000 per year scholarship, renewable for up to three years, for eligible domestic undergraduate students entering their second year in the Faculty of Arts. Recipients must be receiving Government Student Loans, demonstrate outstanding community involvement and leadership, and have strong first-year academic performance (minimum 75% average).',
    category: 'Faculty of Arts Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2],
      requiredFaculty: ['Arts'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      financialNeed: true,
      studentLoanRequired: true,
      minGPA: 3.0,
    },
    renewable: true,
    renewableYears: 3,
    sourceUrl: 'https://www.arts.ubc.ca/student-support/funding-opportunities/'
  },
  {
    id: 'katherine-brearley-arts-scholarship',
    name: 'Katherine Brearley Arts Scholarship',
    type: 'Scholarship',
    amount: 4000,
    amountRange: '$500 - $4,000',
    description: 'A scholarship ranging from $500 to $4,000 for undergraduate students in their third or fourth year of study in the Faculty of Arts.',
    category: 'Faculty of Arts Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [3, 4],
      requiredFaculty: ['Arts'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    applicationDeadline: 'October 15',
    sourceUrl: 'https://www.arts.ubc.ca/student-support/funding-opportunities/'
  },
  {
    id: 'yp-heung-foundation-awards',
    name: 'Y.P. Heung Foundation Awards',
    type: 'Award',
    amount: 3000,
    description: 'Awards totaling $9,000 (valued at $3,000 each) annually for undergraduate First Nations, Inuit, or Métis students entering their second year in the Faculty of Arts with outstanding academic achievement. Preference given to students demonstrating community involvement.',
    category: 'Indigenous Faculty Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2],
      requiredFaculty: ['Arts'],
      indigenousOnly: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
    },
    sourceUrl: 'https://www.arts.ubc.ca/student-support/funding-opportunities/'
  },

  // ========== FACULTY OF ENGINEERING AWARDS ==========

  {
    id: 'elizabeth-leslie-gould-entrance-engineering',
    name: 'Elizabeth and Leslie GOULD Entrance Scholarship for Engineering',
    type: 'Scholarship',
    amount: 2500,
    description: 'Up to five scholarships valued at $2,500 each for outstanding domestic or international students entering their first year of the Bachelor of Applied Science program. Renewable for up to three additional years.',
    category: 'Engineering Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      requiredFaculty: ['Engineering'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    renewable: true,
    renewableYears: 4,
    sourceUrl: 'https://engineering.ubc.ca/admissions/undergraduate/scholarships'
  },
  {
    id: 'christopher-spencer-memorial-engineering',
    name: 'Christopher Spencer Memorial Scholarship in Engineering',
    type: 'Scholarship',
    amount: 7300,
    description: 'Scholarships totaling $7,300 for students entering their first year of the Engineering program.',
    category: 'Engineering Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      requiredFaculty: ['Engineering'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    sourceUrl: 'https://engineering.ubc.ca/admissions/undergraduate/scholarships'
  },
  {
    id: 'fluor-women-in-engineering-entrance',
    name: 'Fluor Women in Engineering Entrance Award',
    type: 'Award',
    amount: 10000,
    description: 'A $10,000 award for outstanding domestic female students entering the Bachelor of Applied Science program directly from high school, emphasizing leadership and involvement in promoting women in STEM.',
    category: 'Women in Engineering Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      requiredFaculty: ['Engineering'],
      gender: ['Female'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
    },
    sourceUrl: 'https://engineering.ubc.ca/admissions/undergraduate/scholarships'
  },
  {
    id: 'engineering-scholarship-innovation',
    name: 'Engineering Scholarship for Innovation',
    type: 'Scholarship',
    amount: 5000,
    description: 'One or more scholarships valued at $5,000 each for exceptional students entering directly from secondary school with high academic achievement and promise in engineering.',
    category: 'Engineering Entrance Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      requiredFaculty: ['Engineering'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
      minGPA: 3.7,
    },
    sourceUrl: 'https://engineering.ubc.ca/admissions/undergraduate/scholarships'
  },
  {
    id: 'women-in-engineering-entrance-scholarship',
    name: 'Women in Engineering Entrance Scholarship',
    type: 'Scholarship',
    amount: 10000,
    description: 'Up to $10,000 for domestic female students entering an undergraduate engineering program. Preference given to BC residents.',
    category: 'Women in Engineering Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      requiredFaculty: ['Engineering'],
      gender: ['Female'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
    },
    sourceUrl: 'https://engineering.ubc.ca/admissions/undergraduate/scholarships'
  },
  {
    id: 'yves-cynthia-bled-women-engineering',
    name: 'Yves and Cynthia Bled Women in Engineering Entrance Scholarship',
    type: 'Scholarship',
    amount: 6500,
    description: 'Renewable scholarships totaling $6,500 for outstanding undergraduate female engineering students.',
    category: 'Women in Engineering Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [1],
      requiredFaculty: ['Engineering'],
      gender: ['Female'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    renewable: true,
    sourceUrl: 'https://engineering.ubc.ca/admissions/undergraduate/scholarships'
  },
  {
    id: 'engineers-canada-leadership-scholarship',
    name: 'Engineers Canada Leadership Scholarship',
    type: 'Scholarship',
    amount: 4000,
    description: 'Eight scholarships of $4,000 each annually for undergraduate engineering students who have completed one year of studies and demonstrate leadership potential.',
    category: 'Engineering In-Program Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2, 3, 4],
      requiredFaculty: ['Engineering'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    sourceUrl: 'https://ubcengineers.ca/'
  },
  {
    id: 'cd-howe-engineering-scholarship',
    name: 'C.D. Howe Scholarship Endowment Fund National Engineering Scholarship',
    type: 'Scholarship',
    amount: 7500,
    description: 'A scholarship valued at $7,500 per academic year for Canadian engineering students entering their second year with first-class standing.',
    category: 'Engineering In-Program Scholarship',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [2],
      requiredFaculty: ['Engineering'],
      citizenshipRequired: ['Canadian Citizen'],
      minGPA: 3.7,
    },
    sourceUrl: 'https://engineering.ubc.ca/'
  },

  // ========== ATHLETIC AWARDS ==========

  {
    id: 'athletic-financial-award',
    name: 'Athletic Financial Award (AFA)',
    type: 'Award',
    amount: 'Variable (up to tuition)',
    description: 'Financial awards for varsity student-athletes, covering up to the value of tuition and compulsory fees. Subject to U Sports eligibility requirements including maintaining good academic standing (minimum 18 semester hours).',
    category: 'Athletic Award',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    requiredDocumentation: ['Varsity team membership', 'Coach recommendation'],
    sourceUrl: 'https://gothunderbirds.ca/'
  },
  {
    id: 'varsity-athlete-reduced-load-eligibility',
    name: 'Varsity Athlete Scholarship Eligibility',
    type: 'Award',
    amount: 'Variable',
    description: 'Varsity athletes may receive and earn scholarships with a reduced course load of 18 credits (vs. typical 24 credits). Requires letter from UBC Athletics confirming varsity commitment.',
    category: 'Athletic Award',
    eligibility: {
      campus: ['Vancouver'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    requiredDocumentation: ['Letter from UBC Athletics confirming varsity commitment'],
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'thunderbirds-sport-clubs-award',
    name: 'Thunderbirds Sport Clubs Award',
    type: 'Award',
    amount: 'Variable',
    description: 'Annual awards celebrating student-athletes and teams in the UBC Thunderbirds Sport Clubs program. Requires minimum 3 years in TSC and representation of UBC at sanctioned competition.',
    category: 'Athletic Award',
    eligibility: {
      campus: ['Vancouver'],
      requiredYear: [3, 4],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    sourceUrl: 'https://recreation.ubc.ca/sport-clubs/'
  },

  // ========== RESEARCH AWARDS ==========

  {
    id: 'nserc-usra',
    name: 'NSERC Undergraduate Student Research Award (USRA)',
    type: 'Award',
    amount: 6000,
    description: 'Research awards administered by Canada\'s three granting agencies (NSERC/CIHR/SSHRC) to stimulate interest in research in natural sciences and engineering. Encourages students to pursue graduate studies. Award is $6,000 for 16 weeks of full-time research.',
    category: 'Research Award',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      requiredYear: [2, 3, 4],
      requiredFaculty: ['Science', 'Engineering'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      minGPA: 3.0,
    },
    requiredDocumentation: ['Faculty supervisor', 'Research proposal'],
    sourceUrl: 'https://www.nserc-crsng.gc.ca/students-etudiants/ug-pc/usra-brpc_eng.asp'
  },
  {
    id: 'science-undergraduate-research-award',
    name: 'Irving K. Barber Faculty of Science Undergraduate Research Award',
    type: 'Award',
    amount: 'Variable',
    description: 'Research awards for Faculty of Science students to gain hands-on research experience with faculty mentors during the summer term.',
    category: 'Research Award',
    eligibility: {
      campus: ['Okanagan'],
      requiredYear: [2, 3, 4],
      requiredFaculty: ['Science'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    sourceUrl: 'https://science.ok.ubc.ca/'
  },

  // ========== WORK LEARN PROGRAM ==========

  {
    id: 'work-learn-program',
    name: 'UBC Work Learn Program',
    type: 'Employment',
    amount: 'Varies (hourly wage)',
    description: 'Subsidized on-campus work experience program providing meaningful employment opportunities. Students gain professional skills, work experience, and expand their networks while working as Research Assistants, Educational Support staff, and other roles.',
    category: 'Work-Study Program',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee', 'International Student'],
    },
    sourceUrl: 'https://students.ubc.ca/career/ubc-work-learn-program'
  },

  // ========== FORMER YOUTH IN CARE AWARDS ==========

  {
    id: 'former-youth-in-care-bursary',
    name: 'Former Youth in Care Bursary',
    type: 'Bursary',
    amount: 'Variable',
    description: 'Financial support for students who were formerly in government care (foster care). Provides assistance with tuition, living expenses, and educational costs.',
    category: 'Youth in Care Award',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      formerYouthInCare: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident', 'Refugee'],
      financialNeed: true,
    },
    sourceUrl: 'https://students.ubc.ca/finances/awards-scholarships-bursaries/'
  },
  {
    id: 'bc-tuition-waiver-former-youth-care',
    name: 'BC Provincial Tuition Waiver for Former Youth in Care',
    type: 'Waiver',
    amount: 'Full Tuition',
    description: 'Provincial program waiving tuition fees for former youth in care attending BC public post-secondary institutions. Covers domestic tuition for eligible students.',
    category: 'Youth in Care Award',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      formerYouthInCare: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
    },
    sourceUrl: 'https://studentaidbc.ca/explore/grants-scholarships'
  },

  // ========== BC GOVERNMENT AWARDS ==========

  {
    id: 'bc-access-grant',
    name: 'BC Access Grant',
    type: 'Grant',
    amount: 4000,
    description: 'Up to $4,000 per year for low and middle-income BC students. Automatically assessed when applying for BC student loans.',
    category: 'Provincial Grant',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      financialNeed: true,
      studentLoanRequired: true,
    },
    automaticConsideration: true,
    sourceUrl: 'https://studentaidbc.ca/explore/grants-scholarships'
  },
  {
    id: 'canada-student-grant',
    name: 'Canada Student Grant for Full-Time Students',
    type: 'Grant',
    amount: 3000,
    description: 'Up to $3,000 per year for full-time students from low and middle-income families. Automatically assessed through student loan applications.',
    category: 'Federal Grant',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
      financialNeed: true,
      studentLoanRequired: true,
    },
    automaticConsideration: true,
    sourceUrl: 'https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html'
  },
  {
    id: 'canada-student-grant-disabilities',
    name: 'Canada Student Grant for Students with Permanent Disabilities',
    type: 'Grant',
    amount: 4000,
    description: 'Up to $4,000 per year for students with permanent disabilities to help cover education-related costs.',
    category: 'Federal Disability Grant',
    eligibility: {
      campus: ['Vancouver', 'Okanagan'],
      hasDisability: true,
      citizenshipRequired: ['Canadian Citizen', 'Permanent Resident'],
    },
    requiredDocumentation: ['Disability documentation'],
    sourceUrl: 'https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html'
  },
];

