export const projects = [
  {
    title: "EKS Platform Migration",
    description:
      "Rebuilt an existing EKS platform with Terraform, replacing CloudFormation-managed infrastructure with reusable modules and a structured environment model. The work included Terraform state migration, AWS IAM and OIDC integration, VPC infrastructure, and GitHub Actions automation.",
    technologies: [
      "Terraform",
      "AWS",
      "EKS",
      "Kubernetes",
      "GitHub Actions",
      "IAM",
    ],
    github: "https://github.com/hannamarusych",
  },

  {
    title: "Cloud-Native Application Platform",
    description:
      "Built a cloud-native application platform around AWS, containers, Terraform, and CI/CD. The project focused on repeatable infrastructure, containerized workloads, automated delivery, and operational visibility rather than manually managed application environments.",
    technologies: [
      "AWS",
      "Terraform",
      "ECS",
      "Docker",
      "GitHub Actions",
      "Monitoring",
    ],
    github: "https://github.com/hannamarusych",
  },

  {
    title: "AI-Assisted Engineering",
    description:
      "Developing an AI-first engineering workflow around Claude Code, AWS Bedrock, and MCP. The approach uses agents for infrastructure work, troubleshooting, documentation, and delivery while keeping changes branch-based, review-driven, and controlled before reaching production.",
    technologies: [
      "Claude Code",
      "AWS Bedrock",
      "MCP",
      "Agentic AI",
      "GitHub",
      "Infrastructure Automation",
    ],
    github: "https://github.com/hannamarusych",
  },
];
