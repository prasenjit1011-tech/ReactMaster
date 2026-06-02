resource "aws_amplify_app" "react_app" {
  name         = "reactmaster"
  repository   = "https://github.com/prasenjit1011/ReactMaster"
  access_token = var.github_token

  platform = "WEB"

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
  cache:
    paths:
      - node_modules/**/*
EOF

  enable_branch_auto_build = true
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.react_app.id
  branch_name = "amplify_main"

  framework = "React"
  stage     = "PRODUCTION"

  enable_auto_build = true
}
