terraform {
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
  name = "lambda-input-events"
  display_name = "[terraform-aws 01] Input events that initiate the workflow."
}

#TODO KDK: Set up default VPC and subnet for use on just about everything?
