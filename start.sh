#!/bin/bash

cd home
pnpm run deploy &

cd ..

cd about
pnpm run deploy &

cd ..

cd host
pnpm run dev

cd ..
