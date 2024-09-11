resource "google_cloud_run_service" "default" {
  name     = var.cloudrun_service_name
  location = var.region

  template {
    spec {
      containers {
        image = var.image_name
        ports {
          container_port = var.container_port
        }
      }
    }
  }
  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "invoker" {
  location = var.region
  service  = var.cloudrun_service_name
  role     = "roles/run.invoker"
  member   = "allUsers"
}