# Terraform with Docker

Try out the [quick start
tutorial](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started#quick-start-tutorial)
on terraform.

`terraform plan` and `terraform apply` work as expected, so far.

`terraform show` comes in handy too, to see what is running.


## Learnings

I got a misleading error message about not having access to pull the specified
docker image, when I was saying:

```terraform
resource "docker_container" "nginx" {
  image = "docker_image.nginx.latest"
  ...
}
```

instead of

```terraform
resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  ...
}
```

so it was looking for an image named "docker_image.nginx.latest" instead of
dereferencing that variable.
