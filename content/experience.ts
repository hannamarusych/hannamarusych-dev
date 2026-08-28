export const experience = [
  {
    company: "Egencia — American Express Global Business Travel",
    role: "DevOps Engineer, Platform Engineering",
    location: "Chicago, IL",
    period: "Nov 2023 — Present",
    summary:
      "Run the Kubernetes platform behind 50 services across 3 engineering teams — Terraform modules and OIDC-federated pipelines in place of hand-run, per-environment work.",
    responsibilities: [
      "Own the delivery path for 8 of the platform's 50 services and the 6 developers behind them: one GitHub Actions → ECR → ArgoCD → EKS flow in place of manual per-environment deploys, now shipping daily production releases.",
      "Swapped hardcoded AWS credentials in CI/CD for Terraform-managed OIDC roles — no more long-lived keys sitting in pipelines.",
      "Built self-service routing for application teams: a Kubernetes route declaration automatically brings up the load balancer, Route 53 record, and TLS certificate (Gateway API, ExternalDNS, cert-manager).",
      "Unified fragmented per-team checks into one Prometheus, Grafana, and Alertmanager stack — alerting on certificate expiry and node pressure before they reach customers, and replacing cross-team Slack threads with one Grafana panel on-call works from.",
      "Automated first-pass PR review across 30 repositories with a Claude Code GitHub Action that reads each pull request against its Jira ticket and flags requirement gaps and exposed secrets.",
      "Migrated 4 ML model-serving workloads from AWS SageMaker to Amazon EKS as part of the platform team, cutting monthly compute cost for the highest-traffic inference workload 66%.",
    ],
    stack: [
      "AWS",
      "EKS",
      "Terraform",
      "ArgoCD",
      "GitHub Actions",
      "Gateway API",
      "Prometheus",
      "Claude Code",
    ],
  },
  {
    company: "FanDuel",
    role: "Cloud Engineer",
    location: "Remote",
    period: "Sep 2020 — Oct 2023",
    summary:
      "Cloud engineer on the AWS and Kubernetes platform behind FanDuel's betting product, through NFL-season traffic peaks and the move onto reusable Terraform modules.",
    responsibilities: [
      "Scaled Kubernetes workloads for NFL season peaks: historical traffic analysis, load tests on the critical paths, and node groups pre-scaled for 3–5× traffic spikes.",
      "Ran the AWS platform behind the betting product — 6 accounts, 12 Kubernetes clusters — and moved its provisioning onto reusable Terraform modules for node groups, IAM/IRSA, networking, and CloudFront, shared across development and staging.",
      "Provisioned additional Amazon Redshift clusters with Terraform on a producer/consumer data-sharing pattern, monitored for query queue time and concurrency.",
      "Built the provisioning path for live sports video channels behind the betting product, turning manual requests into self-service configuration — 4 live channels online in 3 weeks.",
    ],
    stack: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "IAM/IRSA",
      "CloudFront",
      "Redshift",
    ],
  },
];
