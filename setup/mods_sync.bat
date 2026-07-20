@echo off
cd ..

> .git\hooks\post-merge echo #!/bin/sh
>> .git\hooks\post-merge echo sh "$(git rev-parse --show-toplevel)/setup/sync.sh"

> .git\hooks\post-checkout echo #!/bin/sh
>> .git\hooks\post-checkout echo [ "$3" = "1" ] ^|^| exit 0
>> .git\hooks\post-checkout echo sh "$(git rev-parse --show-toplevel)/setup/sync.sh"

echo Hooks installed
sh setup/sync.sh
