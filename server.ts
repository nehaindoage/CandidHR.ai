import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface DemoLead {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  phone?: string;
  hiringVolume: string;
  rolesDescription?: string;
  source: string;
  createdAt: string;
}

const leadsStore: DemoLead[] = [];

// Curated ATS list from CandidHR documentation
const atsIntegrations = [
  { name: 'Greenhouse', category: 'Enterprise ATS', tier: 'Deep Sync', status: 'Ready' },
  { name: 'Lever', category: 'Enterprise ATS', tier: 'Bi-directional', status: 'Ready' },
  { name: 'Workday', category: 'HCM / Enterprise', tier: 'Native Connector', status: 'Ready' },
  { name: 'Ashby', category: 'Modern ATS', tier: 'Real-time API', status: 'Ready' },
  { name: 'BambooHR', category: 'Mid-Market HR', tier: 'Two-way Sync', status: 'Ready' },
  { name: 'Bullhorn', category: 'Staffing & Agency', tier: 'Candidate Flow', status: 'Ready' },
  { name: 'SmartRecruiters', category: 'Enterprise ATS', tier: 'Deep Sync', status: 'Ready' },
  { name: 'iCIMS', category: 'Enterprise ATS', tier: 'Native Connector', status: 'Ready' },
  { name: 'JobAdder', category: 'Agency & Staffing', tier: 'Direct Sync', status: 'Ready' },
  { name: 'Darwinbox', category: 'Global HCM', tier: 'API Integration', status: 'Ready' },
  { name: 'Keka', category: 'HRMS / ATS', tier: 'Instant Import', status: 'Ready' },
  { name: 'Zoho Recruit', category: 'SMB & Staffing', tier: 'Webhook / API', status: 'Ready' },
  { name: 'Workable', category: 'All-in-One ATS', tier: 'Two-way Sync', status: 'Ready' },
  { name: 'Teamtailor', category: 'Candidate Experience', tier: 'API Integration', status: 'Ready' },
  { name: 'Oracle HCM', category: 'Global Enterprise', tier: 'Enterprise Connector', status: 'Ready' },
  { name: 'SAP SuccessFactors', category: 'Enterprise HCM', tier: 'Native Connector', status: 'Ready' },
  { name: 'Personio', category: 'European HR', tier: 'Direct Sync', status: 'Ready' },
  { name: 'Recruitee', category: 'Mid-Market ATS', tier: 'Bi-directional', status: 'Ready' },
];

const jobBoardNetworks = [
  { name: 'LinkedIn', reach: '900M+ professionals', icon: 'linkedin' },
  { name: 'Indeed', reach: '350M+ monthly visitors', icon: 'briefcase' },
  { name: 'Google for Jobs', reach: 'Universal search reach', icon: 'search' },
  { name: 'Glassdoor', reach: 'Company review community', icon: 'star' },
  { name: 'ZipRecruiter', reach: 'Instant match network', icon: 'zap' },
  { name: 'Naukri', reach: 'Leading tech & APAC market', icon: 'globe' },
  { name: 'Dice', reach: 'Tech & engineering specialists', icon: 'code' },
  { name: 'Talent.com', reach: 'Global job aggregator', icon: 'users' },
  { name: 'Jooble', reach: '70+ countries distribution', icon: 'share-2' },
  { name: 'Adzuna', reach: 'Smart search engine reach', icon: 'target' }
];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'healthy', platform: 'CandidHR.ai Backend', timestamp: new Date().toISOString() });
  });

  // Get ATS integrations & job networks
  app.get('/api/ats-integrations', (_req: Request, res: Response) => {
    res.json({
      totalAtsSupported: 153,
      featuredAts: atsIntegrations,
      jobBoardsCount: '1,000+',
      featuredJobBoards: jobBoardNetworks
    });
  });

  // Book a demo / lead capture
  app.post('/api/demo-request', (req: Request, res: Response) => {
    const { fullName, workEmail, companyName, phone, hiringVolume, rolesDescription, source } = req.body;

    if (!fullName || !workEmail || !companyName) {
      return res.status(400).json({
        success: false,
        error: 'Please provide full name, work email, and company name.'
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid work email address.'
      });
    }

    const newLead: DemoLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: String(fullName).trim(),
      workEmail: String(workEmail).trim().toLowerCase(),
      companyName: String(companyName).trim(),
      phone: phone ? String(phone).trim() : undefined,
      hiringVolume: hiringVolume || '5-15 hires/month',
      rolesDescription: rolesDescription || '',
      source: source || 'homepage_modal',
      createdAt: new Date().toISOString()
    };

    leadsStore.push(newLead);

    return res.status(201).json({
      success: true,
      message: 'Demo request received successfully! Our team will contact you within 2 business hours.',
      bookingRef: newLead.id,
      lead: {
        fullName: newLead.fullName,
        companyName: newLead.companyName,
        workEmail: newLead.workEmail
      }
    });
  });

  // Interactive Live Screening Simulator
  app.post('/api/screen-preview', (req: Request, res: Response) => {
    const { jobTitle = 'Senior Data Engineer', requiredSkills = ['Python', 'AWS', 'Snowflake'], minExperience = 5 } = req.body;

    const mockCandidates = [
      {
        id: 'c-1',
        name: 'Rhea Kapoor',
        title: 'Senior Data Engineer',
        experience: '8 years',
        location: 'Bengaluru, India',
        avatarInitials: 'RK',
        matchScore: 96,
        assessmentScore: 91,
        interviewScore: 88,
        codingScore: 94,
        overallScore: 92,
        verifiedSkills: ['Python', 'AWS', 'Snowflake', 'Airflow', 'SQL'],
        potentialGaps: [],
        aiVerdict: 'Strong Hire',
        aiSummary: 'Exceeded all technical requirements with proven experience optimizing enterprise petabyte pipelines and leading schema migrations.',
        videoHighlights: 'Answered difficult problem-solving question with structured STAR method and explicit ownership.'
      },
      {
        id: 'c-2',
        name: 'Arjun Nair',
        title: 'Lead Data Architect',
        experience: '7 years',
        location: 'Pune, India',
        avatarInitials: 'AN',
        matchScore: 93,
        assessmentScore: 89,
        interviewScore: 90,
        codingScore: 88,
        overallScore: 90,
        verifiedSkills: ['Python', 'AWS', 'Snowflake', 'Kafka'],
        potentialGaps: ['Notice period 60 days'],
        aiVerdict: 'Strong Hire',
        aiSummary: 'Extensive hands-on Python/AWS infrastructure experience with excellent communication score during automated video interview.',
        videoHighlights: 'Concise explanation of streaming data architectures and cross-functional leadership.'
      },
      {
        id: 'c-3',
        name: 'Meera Iyer',
        title: 'Data Platform Engineer',
        experience: '6 years',
        location: 'Bengaluru, India',
        avatarInitials: 'MI',
        matchScore: 90,
        assessmentScore: 86,
        interviewScore: 84,
        codingScore: 90,
        overallScore: 88,
        verifiedSkills: ['Python', 'Snowflake', 'SQL', 'dbt'],
        potentialGaps: ['Limited production AWS container setup'],
        aiVerdict: 'Qualified',
        aiSummary: 'Solid data modeling and warehouse design background; fits high-scale analytics requirements.',
        videoHighlights: 'Good communication clarity, showed deep domain knowledge on query optimization.'
      },
      {
        id: 'c-4',
        name: 'Kabir Shah',
        title: 'Backend & Data Engineer',
        experience: '5 years',
        location: 'Mumbai, India',
        avatarInitials: 'KS',
        matchScore: 84,
        assessmentScore: 78,
        interviewScore: 81,
        codingScore: 82,
        overallScore: 81,
        verifiedSkills: ['Python', 'AWS', 'PostgreSQL'],
        potentialGaps: ['Snowflake experience is foundational rather than enterprise-grade'],
        aiVerdict: 'Consider',
        aiSummary: 'Generalist engineering background with fast learning curve; secondary candidate for interview backup.',
        videoHighlights: 'Energetic communicator, though answers leaned more toward backend APIs than warehouse modeling.'
      }
    ];

    res.json({
      jobTitle,
      totalScreenedFromPool: 480,
      qualifiedMatchesCount: 42,
      interviewReadyCount: 10,
      candidates: mockCandidates
    });
  });

  // Calculate Hiring ROI & Recommendation
  app.post('/api/pricing-calculate', (req: Request, res: Response) => {
    const { monthlyHires = 5, applicantsPerRole = 350, recruiterSalary = 75000 } = req.body;

    const totalApplicants = monthlyHires * applicantsPerRole;
    // Manual hours spent: ~4 mins per resume screening + 30 mins per phone screen for 20 candidates per role
    const manualHoursSpent = Math.round(
      (totalApplicants * 4) / 60 + (monthlyHires * 20 * 0.5)
    );
    const aiHoursSpent = Math.round(monthlyHires * 2.5); // Just reviewing final ranked 10 candidates
    const hoursSaved = Math.max(0, manualHoursSpent - aiHoursSpent);
    const hourlyCost = recruiterSalary / (52 * 40);
    const estimatedMonthlySavings = Math.round(hoursSaved * hourlyCost);

    let recommendedPlan = 'Growth';
    let planPrice = 499;

    if (monthlyHires <= 2) {
      recommendedPlan = 'Free / Starter';
      planPrice = 0;
    } else if (monthlyHires > 12) {
      recommendedPlan = 'Enterprise Custom';
      planPrice = 1299;
    }

    res.json({
      monthlyHires,
      totalApplicantsProcessed: totalApplicants,
      manualHoursSpent,
      aiHoursSpent,
      hoursSaved,
      estimatedMonthlySavings,
      recommendedPlan,
      planPrice
    });
  });

  // Setup Vite or static serving
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CandidHR server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
