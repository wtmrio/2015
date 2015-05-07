#!/bin/bash

rm -rf _site
jekyll build
cp  CNAME _site
git add -A _site/
git commit -m "New release"
git push
git subtree split --prefix _site origin gh-pages --re-join
