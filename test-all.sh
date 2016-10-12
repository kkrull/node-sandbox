#!/usr/bin/env bash

set -e
#set -x

self_dir=$(readlink -f $(dirname $0))
for file in $(git ls-files '*package.json')
do
  package_file="${self_dir}/${file}"
  package_dir=$(dirname $package_file)

  echo "== ${file} =="
  cd $package_dir
  npm t
done
