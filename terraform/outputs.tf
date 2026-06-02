output "amplify_app_id" {
  description = "AWS Amplify App ID"
  value       = aws_amplify_app.react_app.id
}

output "amplify_app_name" {
  description = "AWS Amplify App Name"
  value       = aws_amplify_app.react_app.name
}

output "amplify_default_domain" {
  description = "Amplify Default Domain"
  value       = aws_amplify_app.react_app.default_domain
}

output "amplify_branch_name" {
  description = "Amplify Branch Name"
  value       = aws_amplify_branch.main.branch_name
}

output "amplify_url" {
  description = "Amplify Application URL"
  value       = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.react_app.default_domain}"
}
