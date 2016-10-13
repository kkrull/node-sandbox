#!/usr/bin/env bash

#set -x
exit_code=0

self_dir=$(readlink -f $(dirname $0))
for file in $(git ls-files '*package.json')
do
  package_file="${self_dir}/${file}"
  package_dir=$(dirname $package_file)

  echo "== ${file} =="
  cd $package_dir
  npm t || exit_code=1
done

exit $exit_code
