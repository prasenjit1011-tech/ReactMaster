terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100"
    }
  }

  required_version = ">= 1.5.0"
}

provider "azurerm" {
  features {}
}

# ==================================================
# RESOURCE GROUP
# ==================================================
resource "azurerm_resource_group" "rg" {
  name     = "ReactStaticWebApp2026_group"
  location = "East Asia"
}

# ==================================================
# LOG ANALYTICS (REQUIRED FOR CONTAINER APPS)
# ==================================================
resource "azurerm_log_analytics_workspace" "law" {
  name                = "portfolio-law"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# ==================================================
# CONTAINER APPS ENVIRONMENT (FIXES YOUR ERROR)
# ==================================================
resource "azurerm_container_app_environment" "env" {
  name                       = "portfolio-env"
  location                   = azurerm_resource_group.rg.location
  resource_group_name       = azurerm_resource_group.rg.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.law.id
}

# ==================================================
# CONTAINER APP
# ==================================================
resource "azurerm_container_app" "app" {
  name                         = "portfolio-app"
  container_app_environment_id = azurerm_container_app_environment.env.id
  resource_group_name          = azurerm_resource_group.rg.name
  revision_mode                = "Single"

  template {
    container {
      name   = "react-app"
      image  = "ghcr.io/prasenjit1011/reactmaster:latest"
      cpu    = 0.5
      memory = "1Gi"
    }
  }

  ingress {
    external_enabled = true
    target_port      = 80
    transport        = "auto"

    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }
}

# ==================================================
# OUTPUT URL
# ==================================================
output "container_app_url" {
  value = azurerm_container_app.app.latest_revision_fqdn
}