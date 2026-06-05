terraform {
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
# Enable required APIs
# -----------------------------
resource "google_project_service" "run" {
  project = "terraform-497011"
  service = "run.googleapis.com"
}



resource "google_project_service" "artifactregistry" {
  project = "terraform-497011"
  service = "artifactregistry.googleapis.com"
}

# -----------------------------
# Service Account
# -----------------------------
resource "google_service_account" "sa" {
  project      = "terraform-497011"
  account_id   = "cloudrun-sa"
  display_name = "Cloud Run Service Account"
}

resource "google_project_iam_member" "artifact_writer" {
  project = "terraform-497011"
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.sa.email}"
}
# -----------------------------
# Artifact Registry (Docker repo)
# -----------------------------
resource "google_artifact_registry_repository" "docker_repo" {
  project       = "terraform-497011"

  location      = "asia-south1"
  repository_id = "my-repo"
  description   = "Docker repo for Cloud Run"
  format        = "DOCKER"

  depends_on = [google_project_service.artifactregistry]
}



# -----------------------------
# Cloud Run Service (ONLY ONE)
# -----------------------------

resource "google_cloud_run_service" "app" {
  project  = "terraform-497011"
  name     = "react-cloudrun"
  location = "asia-south1"

  template {
    spec {
      service_account_name = google_service_account.sa.email

      containers {
        image = "asia-south1-docker.pkg.dev/terraform-497011/my-repo/react-app:latest"

        ports {
          container_port = 80
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  depends_on = [
    google_artifact_registry_repository.docker_repo,
    google_project_service.run
  ]
}

# -----------------------------
# Public access (frontend)
# -----------------------------
resource "google_cloud_run_service_iam_member" "public" {
  service  = google_cloud_run_service.app.name
  location = google_cloud_run_service.app.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}



# New Code



