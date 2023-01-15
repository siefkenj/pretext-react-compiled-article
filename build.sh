#!/bin/bash

mkdir -p tmp

# Grab the latest version of pretext directly from Rob Beezer's branch, since that
# branch has the features we need.
#wget https://github.com/rbeezer/pretext/archive/refs/heads/overhaul.zip -nc -O tmp/pretext.zip
wget https://github.com/PreTeXtBook/pretext/archive/refs/heads/master.zip -nc -O tmp/pretext.zip

pushd tmp

rm -rf pretext
unzip -q pretext.zip
# We are currenty working with the main branch, but that may change in the future,
# so we normalize the path name
mv pretext-* pretext

popd

PRETEXT_BASE_PATH="$PWD/tmp/pretext"
PRETEXT_HTML_XSL="$PRETEXT_BASE_PATH/xsl/pretext-html.xsl"

set -x

# Compile the source!
pretext build html-dev &
pretext build html-reference &
pretext build html-book &
pretext build html-testing &

wait

set +x

echo 'html-dev and html-reference bult'
echo 'You can view them by running'
echo '   pretext view html-dev'
echo ' or'
echo '   pretext view html-reference'
