terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ----------------------------
# Variables
# ----------------------------
variable "github_token" {
  type      = string
  sensitive = true
}

variable "app_name" {
  type = string
}

variable "repository_url" {
  type = string
}

variable "branch_name" {
  type = string
}

variable "aws_region" {
  type = string
}

# ----------------------------
# Amplify App
# ----------------------------
resource "aws_amplify_app" "react_app" {
  name       = var.app_name
  repository = var.repository_url
  platform   = "WEB"

  # ⚠️ Production CI/CD
  access_token                = var.github_token
  enable_auto_branch_creation = true
  enable_branch_auto_build    = true

  # Build spec (you already added amplify.yml)
  build_spec = file("${path.module}/amplify.yml")

  # SPA fallback routing (FIXED & SAFE)
  custom_rule {
    source = "/*"
    target = "/index.html"
    status = "200"
  }

  lifecycle {
    ignore_changes = [
      build_spec
    ]
  }
}

# ----------------------------
# Branch
# ----------------------------
resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.react_app.id
  branch_name = var.branch_name

  framework         = "React"
  stage             = "PRODUCTION"
  enable_auto_build = true

  lifecycle {
    ignore_changes = [
      stage
    ]
  }
}

# ----------------------------
# Outputs
# ----------------------------
output "amplify_app_id" {
  value = aws_amplify_app.react_app.id
}

output "amplify_default_domain" {
  value = aws_amplify_app.react_app.default_domain
}

output "amplify_url" {
  value = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.react_app.default_domain}"
}

output "amplify_branch_name" {
  value = aws_amplify_branch.main.branch_name
}