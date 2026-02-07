// Student form data types
export interface StudentFormData {
  // Academic Information
  faculty: string;
  year: number;
  program: string;
  gpa: number;
  campus: 'Vancouver' | 'Okanagan';

  // Demographic Information
  citizenshipStatus: 'Canadian Citizen' | 'Permanent Resident' | 'Refugee' | 'International';
  indigenousStatus: boolean;
  indigenousGroup?: 'First Nations' | 'Métis' | 'Inuit' | 'Other';
  hasDisability: boolean;
  gender?: 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say';

  // Financial Information
  hasStudentLoan: boolean;
  hasFinancialNeed: boolean;
  familyIncome?: number;

  // Affiliations
  affiliations: {
    alphaGammaDelta?: boolean;
    canadianArmedForces?: boolean;
    chineseAncestry?: boolean;
    swedishHeritage?: boolean;
    sikhCommunity?: boolean;
    iranianHeritage?: boolean;
    ilwu?: boolean;
    ufcw?: boolean;
    pipingIndustry?: boolean;
    beemCreditUnion?: boolean;
    royalCanadianLegion?: boolean;
    knightsPythias?: boolean;
  };

  // Geographic
  homeRegion?: string;
  schoolDistrict?: string;

  // Other
  partTimeStudent?: boolean;
  formerYouthInCare?: boolean;
}

// Award/Scholarship/Bursary types
export interface EligibilityCriteria {
  // Academic requirements
  minGPA?: number;
  requiredYear?: number[];
  requiredFaculty?: string[];
  requiredProgram?: string[];
  campus?: ('Vancouver' | 'Okanagan')[];

  // Demographic requirements
  citizenshipRequired?: ('Canadian Citizen' | 'Permanent Resident' | 'Refugee' | 'International Student' | 'International')[];
  indigenousOnly?: boolean;
  hasDisability?: boolean;
  gender?: string[];

  // Financial requirements
  financialNeed?: boolean;
  studentLoanRequired?: boolean;

  // Affiliation requirements
  affiliation?: string;

  // Geographic requirements
  region?: string;
  schoolDistrict?: string;

  // Other requirements
  partTimeEligible?: boolean;
  formerYouthInCare?: boolean;
}

export interface Award {
  id: string;
  name: string;
  type: 'Scholarship' | 'Bursary' | 'Grant' | 'Prize';
  amount: number | string;
  description: string;
  eligibility: EligibilityCriteria;
  requiredDocumentation?: string[];
  applicationDeadline?: string;
  category: string;
  sourceUrl?: string;
}

export interface MatchResult {
  award: Award;
  matchScore: number;
  matchReasons: string[];
  missingRequirements: string[];
}
