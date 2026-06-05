terraform {
  required_version = ">= 1.5"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
  }
}

provider "google" {
  project = "terraform-497011"
  region  = "asia-south1"
}

resource "google_project_service" "services" {
  for_each = toset([
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "cloudbuild.googleapis.com",
    "iamcredentials.googleapis.com"
  ])

  project = "terraform-497011"
  service = each.value

  disable_on_destroy = false
}

resource "google_artifact_registry_repository" "repo" {
  depends_on = [google_project_service.services]

  location      = "asia-south1"
  repository_id = "react-repo"
  description   = "Docker repository"
  format        = "DOCKER"
}

resource "google_cloud_run_v2_service" "app" {
  depends_on = [
    google_project_service.services,
    google_artifact_registry_repository.repo
  ]

  name     = "react-cloudrun"
  location = "asia-south1"

  template {
    service_account = "cloudrun@terraform-497011.iam.gserviceaccount.com"

    containers {
      image = "nginx:latest"

      ports {
        container_port = 80
      }
    }
  }

  ingress = "INGRESS_TRAFFIC_ALL"
}

resource "google_cloud_run_service_iam_member" "public" {
  location = google_cloud_run_v2_service.app.location
  service  = google_cloud_run_v2_service.app.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}