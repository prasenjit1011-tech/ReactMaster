terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = "YOUR_GCP_PROJECT_ID"
  region  = "asia-south1"
}

resource "google_cloud_run_service" "react_app" {
  name     = "react-cloudrun-app"
  location = "asia-south1"

  template {
    spec {
      containers {
        # 👇 Replace with your pushed image
        image = "gcr.io/YOUR_GCP_PROJECT_ID/react-app:latest"

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
}

# Allow public access (VERY IMPORTANT for frontend)
resource "google_cloud_run_service_iam_member" "public" {
  service  = google_cloud_run_service.react_app.name
  location = google_cloud_run_service.react_app.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}