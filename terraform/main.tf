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

resource "aws_amplify_app" "react_app" {
  name         = var.app_name
  repository   = var.repository_url
  access_token = var.github_token

  platform = "WEB"

  enable_branch_auto_build = true

  build_spec = <<EOF
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
EOF
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.react_app.id
  branch_name = var.branch_name

  framework         = "React"
  stage             = "PRODUCTION"
  enable_auto_build = true
}

output "amplify_app_id" {
  value = aws_amplify_app.react_app.id
}

output "amplify_default_domain" {
  value = aws_amplify_app.react_app.default_domain
}

output "amplify_url" {
  value = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.react_app.default_domain}"
}