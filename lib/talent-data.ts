export type DeveloperStatus = "actively_looking" | "open_to_offers" | "not_looking"

export type DeveloperProfile = {
  id: string
  name: string
  headline: string
  status: DeveloperStatus
  isNew: boolean
  skills: string[]
  bio: string
  avatarUrl?: string
}

export const developers: DeveloperProfile[] = [
  {
    id: "1",
    name: "Maria Gonzalez",
    headline: "Senior Cloud Architect | AWS Certified Solutions Architect Pro",
    status: "actively_looking",
    isNew: true,
    skills: ["AWS", "Terraform", "Python", "CloudFormation", "Lambda", "Kubernetes"],
    bio: "10+ years designing scalable cloud infrastructure for fintech and healthcare organizations. Led a multi-account AWS migration for a Fortune 500 company, reducing cloud costs by 40%. Passionate about serverless patterns and infrastructure as code.",
  },
  {
    id: "2",
    name: "David Chen",
    headline: "Full-Stack Developer | React + AWS Enthusiast",
    status: "open_to_offers",
    isNew: false,
    skills: ["React", "TypeScript", "Node.js", "AWS", "DynamoDB", "GraphQL"],
    bio: "Full-stack engineer with a focus on building modern web applications using React, TypeScript, and AWS services. Previously at a Tampa Bay startup building real-time collaboration tools. Open to mid-to-senior roles at product-driven companies.",
  },
  {
    id: "3",
    name: "Aisha Johnson",
    headline: "DevOps Engineer | CI/CD and AWS Infrastructure Specialist",
    status: "actively_looking",
    isNew: true,
    skills: ["AWS", "Docker", "GitHub Actions", "Terraform", "ECS", "CDK"],
    bio: "Focused on building reliable CI/CD pipelines and automating cloud infrastructure. Experienced with container orchestration on ECS and EKS. Speaker at local Tampa meetups on DevOps best practices and cloud security.",
  },
  {
    id: "4",
    name: "James Rodriguez",
    headline: "Backend Engineer | Microservices and Event-Driven Architecture",
    status: "open_to_offers",
    isNew: false,
    skills: ["Java", "Spring Boot", "AWS", "SQS", "SNS", "PostgreSQL", "Kafka"],
    bio: "Backend developer specializing in distributed systems and event-driven architectures on AWS. Built high-throughput payment processing services handling 50k+ transactions per minute. Looking for roles with strong engineering cultures.",
  },
  {
    id: "5",
    name: "Sarah Mitchell",
    headline: "Data Engineer | Building Scalable Data Pipelines on AWS",
    status: "actively_looking",
    isNew: false,
    skills: ["Python", "AWS", "Spark", "Redshift", "Glue", "Airflow", "S3"],
    bio: "Data engineer with deep experience building ETL pipelines and data lakes on AWS. Proficient in Spark, Glue, and Redshift for large-scale analytics. Contributed to open-source data quality tools used by hundreds of companies.",
  },
  {
    id: "6",
    name: "Kevin Park",
    headline: "Frontend Developer | Accessibility-First UI Engineering",
    status: "not_looking",
    isNew: false,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AWS Amplify"],
    bio: "Frontend developer passionate about building accessible, performant user interfaces. Experienced with Next.js, design systems, and deploying to AWS Amplify. Currently happy at my role but always open to interesting conversations.",
  },
  {
    id: "7",
    name: "Priya Sharma",
    headline: "Machine Learning Engineer | AI/ML on AWS SageMaker",
    status: "actively_looking",
    isNew: true,
    skills: ["Python", "AWS", "SageMaker", "TensorFlow", "Bedrock", "Lambda"],
    bio: "ML engineer specializing in deploying production machine learning models on AWS SageMaker and integrating generative AI with Bedrock. Previously built recommendation engines serving millions of users. Seeking roles at the intersection of AI and cloud.",
  },
  {
    id: "8",
    name: "Marcus Thompson",
    headline: "Security Engineer | AWS Security and Compliance",
    status: "open_to_offers",
    isNew: false,
    skills: ["AWS", "IAM", "GuardDuty", "Security Hub", "CloudTrail", "SOC 2"],
    bio: "Cloud security specialist with expertise in AWS IAM, threat detection, and compliance frameworks. Helped three Tampa companies achieve SOC 2 certification. Strong advocate for shift-left security practices and zero-trust architectures.",
  },
  {
    id: "9",
    name: "Elena Petrova",
    headline: "Solutions Architect | Helping Startups Scale on AWS",
    status: "open_to_offers",
    isNew: true,
    skills: ["AWS", "Architecture", "Serverless", "CDK", "Step Functions", "API Gateway"],
    bio: "Former AWS partner network consultant turned freelance solutions architect. Helped 20+ startups design their initial cloud architecture on AWS. Experienced with serverless-first approaches, cost optimization, and Well-Architected reviews.",
  },
  {
    id: "10",
    name: "Tyler Brooks",
    headline: "Mobile Developer | React Native + AWS AppSync",
    status: "actively_looking",
    isNew: false,
    skills: ["React Native", "TypeScript", "AWS", "AppSync", "Cognito", "Amplify"],
    bio: "Mobile developer building cross-platform apps with React Native backed by AWS services. Shipped three apps to the App Store with 50k+ combined downloads. Looking for a Tampa-based team working on consumer-facing mobile products.",
  },
]

export const allSkills = Array.from(
  new Set(developers.flatMap((d) => d.skills))
).sort()
