export interface CandidateScore {
  id: string;
  name: string;
  title: string;
  experience: string;
  location: string;
  avatarInitials: string;
  matchScore: number;
  assessmentScore: number;
  interviewScore: number;
  codingScore: number;
  overallScore: number;
  verifiedSkills: string[];
  potentialGaps: string[];
  aiVerdict: 'Strong Hire' | 'Qualified' | 'Consider';
  aiSummary: string;
  videoHighlights: string;
}

export interface AtsIntegration {
  name: string;
  category: string;
  tier: string;
  status: string;
}

export interface JobBoard {
  name: string;
  reach: string;
  icon: string;
}

export interface DemoLeadForm {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone?: string;
  hiringVolume: string;
  rolesDescription?: string;
  source?: string;
}

export interface RoiResult {
  monthlyHires: number;
  totalApplicantsProcessed: number;
  manualHoursSpent: number;
  aiHoursSpent: number;
  hoursSaved: number;
  estimatedMonthlySavings: number;
  recommendedPlan: string;
  planPrice: number;
}
