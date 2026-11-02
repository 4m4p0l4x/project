export interface ProjectMedia {
  type: 'video' | 'image';
  src: string;
  title: string;
  subtitle: string;
}

export interface ProjectTechnology {
  name: string;
  badgeClass: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  description: string;
  technologies: ProjectTechnology[];
  media: ProjectMedia[];
}

export const projects: ProjectItem[] = [
  {
    id: "cicd-monitoring-system",
    title: "CI/CD Monitoring System",
    githubUrl: "https://github.com/4m4p0l4x/stage-project",
    description: "Complete CI/CD pipeline implementation with Jenkins, integrated with an observability stack using Grafana and Prometheus for real-time monitoring of metrics and logs, utilizing CASA software and its pipeline in version 6.6 in both cases.",
    technologies: [
      { name: "Jenkins", badgeClass: "bg-red-100 text-red-800" },
      { name: "Grafana", badgeClass: "bg-orange-100 text-orange-800" },
      { name: "Prometheus", badgeClass: "bg-yellow-100 text-yellow-800" },
      { name: "Docker", badgeClass: "bg-blue-100 text-blue-800" },
      { name: "Linux (ArchLinux, btw)", badgeClass: "bg-green-100 text-green-800" }
    ],
    media: [
      {
        type: "video",
        src: "/assets/video/demo-node-exporter.webm",
        title: "Demo Node Exporter",
        subtitle: "Monitoreo básico del sistema"
      },
      {
        type: "video",
        src: "/assets/video/demo-full-pipeline.webm",
        title: "Running full (local) CASA Pipeline",
        subtitle: "Jenkins + Grafana + Prometheus"
      },
      {
        type: "image",
        src: "/assets/img/metricas-grafana.png",
        title: "Grafana Dashboard",
        subtitle: "Real time metrics"
      },
      {
        type: "image",
        src: "/assets/img/pipeline.png",
        title: "Jenkins Pipeline",
        subtitle: "Automated CI/CD"
      }
    ]
  }
];

