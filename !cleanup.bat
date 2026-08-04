@call git reset %~dp0
@call git checkout %~dp0
@call git clean %~dp0 -d -x -f
