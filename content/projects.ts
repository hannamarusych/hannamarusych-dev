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
    github: "https://github.com/hannamarusych/extra-migration",
  },

  {
    title: "RouteBox — Cloud-Native Microservices Platform",
    description:
      "A production-style logistics platform built as independent services on AWS: a customer-facing Shipments API (the authoritative shipment lifecycle), a carrier webhook ingestion service that validates and deduplicates events from UPS/FedEx/DHL/USPS, an OR-Tools route-optimization worker that runs as a scalable background process, and an internal ops console. All AWS infrastructure is provisioned with modular Terraform using environment separation and automated remote state — the focus is service decomposition and infrastructure-as-code, not a single monolith.",
    technologies: [
      "Terraform",
      "AWS",
      "Microservices",
      "Docker",
      "REST APIs",
      "CI/CD",
    ],
    github: "https://github.com/hannamarusych/routebox-infra-tf-hanna",
  },

  {
    title: "Product Review System — 3-Tier App on AWS",
    description:
      "A 3-tier web application on AWS where users add products and leave reviews: an Nginx-served frontend, a Python/Flask REST API, and a MySQL database. Containerized with Docker and designed for high availability and scalability, it demonstrates clean 3-tier separation, containerization, and cloud deployment end to end.",
    technologies: [
      "AWS",
      "Docker",
      "Python",
      "Flask",
      "MySQL",
      "Nginx",
    ],
    github: "https://github.com/hannamarusych/reviews-app",
  },
];
