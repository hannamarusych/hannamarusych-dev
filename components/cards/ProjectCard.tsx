import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-8">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          >
            <ExternalLink size={18} />
            View on GitHub
          </Link>

          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </CardContent>
    </Card>
  );
}
