# Terraform for AWS Lambda

Trying out terraform to deploy a Lambda function on AWS.


## AWS CLI

Even if the lambda is written in node.js, terraform will use the AWS CLI (in Python) to deploy it.
So use `pyenv install 3.8.10` and `pipenv --python 3.8.10` to set up an environment to use something
close to what Lambda will be using (not that it matters right now, since I'll start with node.js).
