# Terraform for AWS Anything

Trying out terraform to deploy anything on AWS.


## AWS CLI

Even if the lambda is written in node.js, terraform will use the AWS CLI (in
Python) to deploy it. So use `pyenv install 3.8.10` and `pipenv --python 3.8.10`
to set up an environment to use something close to what Lambda will be using
(not that it matters right now, since I'll start with node.js).

The version of `awscli` that's on Pypi is only v1, which is becomming outdated.
`awscli` v2 is no longer available via Pypi, which means you can't get it
through `pipenv install`.  You can either install it as a package or use the
start and log in to a docker container for it (that's bundled with a compatible
version of python).

Installing via homebrew doesn't look appealing, because it makes you install
`python 3.9` via homebrew as well and then that just gets messy.  So the [MacOS
package](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html#cliv2-mac-install-confirm)
with an embedded pyton is the way to go.


## Terraform backend

I had some trouble setting up the s3 backend, at first.  It may have been due to
either or both of these:

* The bucket name I picked was not unique, globally, among all AWS accounts.  I
  changed it to another name, after trying (and failing) to create it manually
  in the AWS Console.
* The bucket didn't exist yet.  I created it manually, in the AWS Console.
