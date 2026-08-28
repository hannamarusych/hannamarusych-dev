export const aiEngineering = {
  intro:
    "Four Claude Code skills built and run in day-to-day platform work, each taking over a manual review pass.",

  skills: [
    {
      name: "PR requirements review",
      description:
        "Reads each pull request against its Jira ticket and flags missing requirements and exposed secrets before merge — replaces the first manual pass.",
    },
    {
      name: "Log diagnostics",
      description:
        "Collects the relevant logs, groups repeating errors, ties them to a deployment or workload, and proposes what to check next.",
    },
    {
      name: "Kubernetes triage",
      description:
        "Reads pod events, deployment status, and resource errors to explain a failed rollout, in place of hand-assembled kubectl context.",
    },
    {
      name: "Terraform plan review",
      description:
        "Checks plans for unexpected IAM, networking, and security changes, flags drift, and surfaces violations before apply — replaces reading large plans by eye.",
    },
  ],

  scoping:
    "Scoped by repository-level CLAUDE.md conventions carrying the team's Terraform and delivery standards, MCP integrations for infrastructure context, and AWS Bedrock for analysis workloads.",
};
