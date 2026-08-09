export const projects = [
  {
    title: "EKS Cluster Migration — CloudFormation → Terraform",
    description:
      "Migrated a team's live EKS cluster from a hand-created CloudFormation stack to Terraform with no meaningful downtime. Ran both clusters in parallel while validating networking, IAM, Kubernetes RBAC, ingress, monitoring, and CI/CD, then cut over application by application. Modernized to an IPv6-primary design with worker nodes in private subnets, removing per-node public IPv4s and the associated public-networking cost (verified before/after in AWS Cost Explorer).",
    technologies: [
      "Terraform",
      "AWS",
      "EKS",
      "Kubernetes",
      "IPv6",
      "GitHub Actions",
    ],
    github: "https://github.com/hannamarusych",
  },

  {
    title: "AI PR-Review Agent — 30 Repositories",
    description:
      "Built a first-pass AI PR-review agent as a customized Claude Code GitHub Action running across 30 repositories for two product teams and the platform team. It checks each pull request's diff against its linked Jira ticket to surface requirement gaps and scope drift, and flags exposed secrets before merge. Review prompts are tuned per repo type (Terraform/infra vs. application), and it runs advisory on PR-open for cost efficiency — offloading the senior-reviewer bottleneck as AI-generated code volume grew.",
    technologies: [
      "Claude Code",
      "GitHub Actions",
      "Jira",
      "Secret Scanning",
      "AI Agents",
      "Context Engineering",
    ],
    github: "https://github.com/hannamarusych",
  },

  {
    title: "IAM Normalization & OIDC-Federated CI/CD",
    description:
      "Owned the team's IAM in response to a security audit. Replaced ad-hoc, console-created roles spread across five engineers' repositories with one auditable, least-privilege scheme, and designed the canonical GitHub Actions Terraform role using GitHub OIDC federation — eliminating long-lived AWS keys. Separated AWS authentication from Kubernetes authorization so developers stay read-only on the cluster while CI/CD gets exactly the access it needs, rolled out incrementally with a validated PR into each repo.",
    technologies: [
      "AWS IAM",
      "GitHub OIDC",
      "Terraform",
      "EKS",
      "Kubernetes RBAC",
      "Least Privilege",
    ],
    github: "https://github.com/hannamarusych",
  },

  {
    title: "Centralized Logging & Read-Only Diagnostic Agent",
    description:
      "Stood up the team's open-source logging stack (Elasticsearch, Fluentd, Kibana on EKS), with Fluentd dual-shipping to Elasticsearch for search and to S3 as a durable backup so a lost index is never a lost log. Built a read-only Claude Code diagnostic skill that takes a namespace, service, and bounded time window, groups recurring errors, and returns an evidence-cited hypothesis — collapsing a 20-minute manual log grep into a single command. Intentionally read-only: it diagnoses but can never act, keeping remediation a human decision.",
    technologies: [
      "Elasticsearch",
      "Fluentd",
      "Kibana",
      "Amazon S3",
      "EKS",
      "Claude Code",
    ],
    github: "https://github.com/hannamarusych",
  },
];
