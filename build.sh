#!/bin/bash

mkdir -p tmp

# Grab the latest version of pretext directly from Rob Beezer's branch, since that
# branch has the features we need.
wget https://github.com/rbeezer/pretext/archive/refs/heads/overhaul.zip -nc -O tmp/pretext.zip

pushd tmp

rm -rf pretext
unzip -q pretext.zip
# We are currenty working with the overhaul branch, but that may change in the future,
# so we normalize the path name
mv pretext-overhaul pretext

popd

PRETEXT_BASE_PATH="$PWD/tmp/pretext"
PRETEXT_HTML_XSL="$PRETEXT_BASE_PATH/xsl/pretext-html.xsl"

set -x

# Compile the source!
pretext build -x $PRETEXT_HTML_XSL html-dev &
pretext build -x $PRETEXT_HTML_XSL html-reference &
pretext build -x $PRETEXT_HTML_XSL html-book &
pretext build -x $PRETEXT_HTML_XSL html-testing &

wait

set +x

echo 'html-dev and html-reference bult'
echo 'You can view them by running'
echo '   pretext view html-dev'
echo ' or'
echo '   pretext view html-reference'
