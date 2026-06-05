\terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = "terraform-497011"
  region  = "asia-south1"
}

# -----------------------------
# Enable APIs
# -----------------------------
resource "google_project_service" "run_api" {
  project = "terraform-497011"
  service = "run.googleapis.com"
}

resource "google_project_service" "artifact_registry_api" {
  project = "terraform-497011"
  service = "artifactregistry.googleapis.com"
}

# -----------------------------
# Service Account
# -----------------------------
resource "google_service_account" "cloudrun_sa" {
  project      = "terraform-497011"
  account_id   = "cloudrun-sa"
  display_name = "Cloud Run Service Account"
}

resource "google_project_iam_member" "artifact_writer" {
  project = "terraform-497011"
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.cloudrun_sa.email}"
}

# -----------------------------
# Artifact Registry (Docker Repo)
# -----------------------------
resource "google_artifact_registry_repository" "docker_repo" {
  project       = var.project_id
  location      = "asia-south1"
  repository_id = "react-app"
  description   = "Docker repo for React app"
  format        = "DOCKER"

  depends_on = [google_project_service.artifact_registry_api]
}

# -----------------------------
# Cloud Run Service (v2)
# -----------------------------
resource "google_cloud_run_v2_service" "app" {
  project  = "terraform-497011"
  name     = "react-cloudrun"
  location = "asia-south1"

  template {
    service_account = google_service_account.cloudrun_sa.email

    containers {
      image = "asia-south1-docker.pkg.dev/terraform-497011/react-app/react-app:latest"

      ports {
        container_port = 80
      }
    }
  }

  traffic {
    percent = 100
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
  }

  depends_on = [
    google_artifact_registry_repository.docker_repo,
    google_project_service.run_api
  ]
}

# -----------------------------
# Public Access (Cloud Run Invoker)
# -----------------------------
resource "google_cloud_run_v2_service_iam_member" "public" {
  project  = "terraform-497011"
  location = "asia-south1"
  name     = google_cloud_run_v2_service.app.name

  role   = "roles/run.invoker"
  member = "allUsers"
}

resource "google_artifact_registry_repository" "docker_repo" {
  project       = var.project_id
  location      = "asia-south1"
  repository_id = "react-app"
  format        = "DOCKER"

  depends_on = [
    google_project_service.artifact_registry_api
  ]
}