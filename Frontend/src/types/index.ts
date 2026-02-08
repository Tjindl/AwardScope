// Student form data types
export interface StudentFormData {
  // Academic Information
  faculty: string;
  year: number;
  program: string;
  gpa: number;
  campus: "Vancouver" | "Okanagan";

  // Demographic Information
  citizenshipStatus: string;
  indigenousStatus: boolean;
  indigenousGroup?: string;
  hasDisability: boolean;
  gender?: string;

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
  campus?: ("Vancouver" | "Okanagan")[];

  // Demographic requirements
  citizenshipRequired?: string[];
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
  type: "Scholarship" | "Bursary" | "Grant" | "Prize";
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

// AI Analysis types
export interface AIAnalysis {
  success: boolean;
  awardId: string;
  awardName: string;
  chanceLevel: "HIGH" | "MEDIUM" | "LOW";
  chancePercentage: number;
  keyFactors: string[];
  advice: string[];
  summary: string;
}
