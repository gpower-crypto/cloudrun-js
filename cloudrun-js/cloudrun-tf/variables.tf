variable "region" {
  type        = string
  description = "Enter the region name"
}

variable "project_id" {
  type        = string
  description = "Enter the GCP project ID"
}

variable "cloudrun_service_name" {
    type        = string
    description = "Name of cloud run service"
}

variable "image_name" {
    type        = string
    description = "The number of desired replicas"
}

variable "container_port" {
    type        = string
    description = "The number of desired replicas"
}
