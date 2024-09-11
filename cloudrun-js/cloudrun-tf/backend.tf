# Configure the Terraform backend to use Google Cloud Storage (GCS)
terraform {
    # Define the GCS backend block
    backend "gcs" {
        # The name of the GCS bucket to store the Terraform state files
        bucket = "simple-express"
        # The path within the bucket where the state files will be stored
        prefix = "sample-express/cloudrun"
    }
}
