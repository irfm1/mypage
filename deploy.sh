#! /usr/bin/enc sh

# 1. Build the project

set -e

npm run build

# 2. Navigate into the build output directory

cd dist

# 3. If you are deploying to a custom domain

git init
git add -A
git commit -m 'deploy'

# 4. If you are deploying to https://<USERNAME>.github.io

git push -f git@github.com:irfm1/irfm1.github.io.git main:gh-pages

cd -