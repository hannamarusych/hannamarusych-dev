import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      {/* Left column */}
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          DevOps Engineer
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          Hanna Marusych
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
          Building production-ready cloud infrastructure on AWS using
          Kubernetes, Terraform, GitHub Actions, Docker, and Infrastructure as
          Code.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>AWS</Badge>
          <Badge>Kubernetes</Badge>
          <Badge>Terraform</Badge>
          <Badge>GitHub Actions</Badge>
          <Badge>Docker</Badge>
        </div>

        <div className="mt-10 flex gap-4">
          <Button size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>

          <Button variant="outline" size="lg">
            <a
              href="/resume/Hanna_Marusych_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Right column */}
      <div className="flex justify-center lg:justify-end">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent className="p-8">
            <div className="mb-8 flex justify-center">
              <Image
                src="/profile.png"
                alt="Hanna Marusych"
                width={140}
                height={140}
                priority
                className="h-36 w-36 rounded-full border-4 border-blue-600 object-cover"
              />
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold">Hanna Marusych</h2>

              <p className="mt-2 text-lg text-gray-500">
                DevOps Engineer
              </p>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Location
                  </p>
                  <p className="mt-1 font-medium">Chicago, IL</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Cloud Stack
                  </p>
                  <p className="mt-1 font-medium">
                    AWS • Kubernetes • Terraform • Docker
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Focus
                  </p>
                  <p className="mt-1 font-medium">Platform Engineering</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    CI/CD
                  </p>
                  <p className="mt-1 font-medium">GitHub Actions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
