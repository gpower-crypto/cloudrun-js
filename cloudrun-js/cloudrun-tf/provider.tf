# Define the Terraform block to specify required providers
terraform {
    # Specify the required providers and their versions
    required_providers {
        # Define the Google provider with the source and version
        google = {
            source = "hashicorp/google"  # Source for the Google provider
            version = "~> 5.0"           # Version constraint for the Google provider
        }
    }
}

# Configure the Google provider
provider "google" {
    # The ID of the GCP project to use
    project = var.project_id
    # The region where resources will be managed
    region  = var.region
}
