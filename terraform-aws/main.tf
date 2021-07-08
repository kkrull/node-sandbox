terraform {
  backend "s3" {
    bucket = "kkrull-at-8thlight-node-sandbox"
    key    = "terraform-aws/main.tfstate"
    region = "us-east-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

resource "aws_sns_topic" "lambda-input" {
  name         = "lambda-input-events"
  display_name = "[terraform-aws 01] Input events that initiate the workflow"
}

output "lambda-input-arn" {
  description = "ARN to the SNS topic that initiates the workflow"
  value       = aws_sns_topic.lambda-input.arn
}
