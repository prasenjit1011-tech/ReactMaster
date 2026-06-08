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
  name     = "react-rg"
  location = "Central India"
}

resource "azurerm_static_web_app" "react" {
  name                = "react-static-app-2026"
  resource_group_name = azurerm_resource_group.rg.name
  location            = "Central US"

  sku_tier = "Free"
  sku_size = "Free"
}

output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "static_web_app_name" {
  value = azurerm_static_web_app.react.name
}

output "default_host_name" {
  value = azurerm_static_web_app.react.default_host_name
}