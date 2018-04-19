#!/bin/bash

templatefile="$1"
str="%% $2 %%"
contentsfile="$3"

sed -e "/$str/r $contentsfile" -e "/$str/d" $templatefile
