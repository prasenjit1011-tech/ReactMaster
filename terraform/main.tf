terraform {
  required_version = ">= 1.5.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}

variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

resource "azurerm_resource_group" "rg" {
  name     = "portfolio-rg"
  location = "Central India"
}

resource "azurerm_container_app_environment" "env" {
  name                = "portfolio-env"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  # No Log Analytics Workspace
  # No logs_destination
}

resource "azurerm_container_app" "app" {
  name                         = "portfolio-app"
  resource_group_name          = azurerm_resource_group.rg.name
  container_app_environment_id = azurerm_container_app_environment.env.id
  revision_mode                = "Single"

  template {
    min_replicas = 0
    max_replicas = 1

    container {
      name   = "portfolio"
      image  = "ghcr.io/prasenjit1011/reactmaster:latest"
      cpu    = 0.25
      memory = "0.5Gi"
    }
  }

  ingress {
    external_enabled = true
    target_port      = 80

    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }
}

output "container_app_url" {
  value = "https://${azurerm_container_app.app.latest_revision_fqdn}"
}

output "container_app_environment_domain" {
  value = azurerm_container_app_environment.env.default_domain
}

output "container_app_id" {
  value = azurerm_container_app.app.id
}

output "container_app_environment_id" {
  value = azurerm_container_app_environment.env.id
}

output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}