#!/bin/bash
set -e

# 生成图标
npx capacitor-assets generate --android

# 应用 patch
cd android
patch -p1 < ../ci/MainActivity.java.patch