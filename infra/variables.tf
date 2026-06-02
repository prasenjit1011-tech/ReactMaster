variable "github_token" {
  description = "GitHub Personal Access Token used by AWS Amplify"
  type        = string
  sensitive   = true
}

variable "app_name" {
  description = "Amplify application name"
  type        = string
  default     = "reactmaster"
}

variable "repository_url" {
  description = "GitHub repository URL"
  type        = string
  default     = "https://github.com/prasenjit1011/ReactMaster"
}

variable "branch_name" {
  description = "Production branch name"
  type        = string
  default     = "amplify_main"
}

variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}